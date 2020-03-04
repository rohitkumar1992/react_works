import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter,Link
} from "react-router-dom";
import axios from 'axios';
import {VIDEO_DESCRIPTION} from '../../../url';
import $ from 'jquery';
class VideoDescription extends Component {
  state={
    video_id:'',
    success:false,
    language:'',
    genre:'',
    license:'',
    territory:'',
    description:'',
  }
  componentDidMount()
  {
    console.log(this.props.video_id);
    this.setState({video_id:this.props.video_id});
    $(function() {
    $('input[name="price"]').on('click', function() {
        if ($(this).val() == 'Premium') {
            $('#textboxes').show();
        }
        else {
            $('#textboxes').hide();
        }
    });
});
  }
  formSubmitHandler(e)
  {
    e.preventDefault();
    var event=e.target;
    var price_desc=$('input[name=price]:checked').val();
    var title=event.form_title.value;
    var tag=event.form_tagname.value;
    var cast=event.form_cast.value;
    var director=event.form_director.value;
    var producer=event.form_producer.value;
    var language,genre,license_rights,territory_rights,description;
    language=event.form_language.value;
    genre=event.form_genre.value;
    license_rights=event.form_license.value;
    territory_rights=event.form_Territory.value;
    description=event.form_description.value;
    var data
    if(price_desc=="Premium")
    {
    var price=event.form_price.value;
     data={title:title,tag:tag,cast:cast,director:director,producer:producer,language:language,genre:genre,description:description,territory_right:territory_rights,license_right:license_rights,video_id:this.state.video_id,premium:'1',price:price}
    }
    else {
    data={title:title,tag:tag,cast:cast,director:director,producer:producer,language:language,genre:genre,description:description,territory_right:territory_rights,license_right:license_rights,video_id:this.state.video_id,premium:'0'}
    }
    axios.post(VIDEO_DESCRIPTION,
      data
  )
  .then(response=>{
    if(response.data.success)
    {
      $('#form_reset').hide();
      $('#form_save').hide();
      this.setState({success:true});
    }
  })
  .catch(function (error) {
    console.log(error);
});
  }
  formReset() {
  document.getElementById("contact-form").reset();
}
  render() {
    return (
      <form id="contact-form" onSubmit={this.formSubmitHandler.bind(this)}>
          <div class="messages"></div>

          <div class="controls">

              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_title">Title *</label>
                          <input id="form_title" type="text" name="title" class="form-control"  placeholder="Please enter your title *" required="required" data-error="Firstname is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_tagname">Tags *</label>
                          <input id="form_tagname" type="text" name="tagname" class="form-control"  placeholder="Please enter your tags *" required="required" data-error="Lastname is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_cast">Cast *</label>
                          <input id="form_cast" type="text" name="cast" class="form-control"   placeholder="Please enter your cast *" required="required" data-error="Valid email is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_producer">Producer *</label>
                          <input id="form_producer" type="text" name="producer" class="form-control"   placeholder="Please enter your producer *" required="required" data-error="Valid email is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="form_director">Director *</label>
                          <input id="form_director" type="text" name="director" class="form-control"   placeholder="Please enter your director *" required="required" data-error="Valid email is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="form_language">Language</label>
                          <select id="form_language" name="language" class="form-control"  onChange={(e)=>this.setState({language:e.target.value})} required="required" data-error="Please specify your need.">
                              <option value=""></option>
                              <option value="English">English</option>
                              <option value="Hindi">Hindi</option>
                              <option value="Punjabi">Punjabi</option>
                              <option value="Tamil">Tamil</option>
                              <option value="Other">Other</option>
                          </select>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="form_genre">Genre</label>
                          <select id="form_genre" name="genre" class="form-control" onChange={(e)=>this.setState({genre:e.target.value})} required="required" data-error="Please specify your need.">
                              <option value=""></option>
                              <option value="LifeStyle">LifeStyle</option>
                              <option value="Inspiration">Inspiration</option>
                              <option value="Romance">Romance</option>
                              <option value="Other">Other</option>
                          </select>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
              </div>
              <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="form_license">License Right Available</label>
                      <select id="form_license" name="license" class="form-control" onChange={(e)=>this.setState({license:e.target.value})} required="required" data-error="Please specify your need.">
                          <option value=""></option>
                          <option value="OTT">OTT</option>
                          <option value="PLANET">Planet</option>
                          <option value="Other">Other</option>
                      </select>
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="form_Territory">Territory Rights Availabe</label>
                      <select id="form_Territory" name="Territory" class="form-control"  onChange={(e)=>this.setState({territory:e.target.value})} required="required" data-error="Please specify your need.">
                          <option value=""></option>
                          <option value="INDIA">INDIA</option>
                          <option value="America">America</option>
                          <option value="JAPAN">Japan</option>
                          <option value="Other">Other</option>
                      </select>
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
              <div class="form-group">
              <input type="radio" name="price" value="Free" /> Free
              <input type="radio" name="price" value="Premium" /> Premium
              <div id="textboxes" style={{display:"none"}}>
              <div class="form-group">
              <label for="form_price">Price *</label>
              <input id="form_price" type="text" name="form_price" class="form-control"   placeholder="Please enter your price*"  data-error="Valid Price is required."/>
              </div>
              </div>
                  </div>
              </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                      <div class="form-group">
                          <label for="form_description">Description *</label>
                          <textarea id="form_description" name="description" class="form-control" onChange={(e)=>this.setState({description:e.target.value})} placeholder="Enter Description *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>

                  <div class="col-md-6">
                      <input type="submit" class="btn btn-success btn-send" id="form_save" value="Save"/>
                  </div>
                  <div class="col-md-6">
                      <input type="button" class="btn btn-danger btn-send" value="Reset" id="form_reset" onClick={this.formReset.bind(this)}/>
                  </div>
              </div>

          </div>

      </form>
)
}
}
export default VideoDescription;
