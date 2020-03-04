import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter,Link
} from "react-router-dom";
import axios from 'axios';
import {VIDEO_DESCRIPTION,VIDEO_DESCRIPTION_UPDATE} from '../../url';
import SuccessAlert from '../flashmessages/successalert';
import $ from 'jquery';
class Description extends Component {
  state={
    video_id:'',
    success:false,
    language:'',
    genre:'',
    license:'',
    territory:'',
    description:''
  }
  componentDidMount()
  {
    this.setState({video_id:this.props.video_id,genre:this.props.form_data.genre || '',language:this.props.form_data.language || '',license:this.props.form_data.license_right || '',territory:this.props.form_data.territory_right || '',description:this.props.form_data.description || ''});
  }
  formSubmitHandler(e)
  {
    e.preventDefault();
    var event=e.target;
    var title=event.form_title.value;
    var tag=event.form_tagname.value;
    var cast=event.form_cast.value;
    var director=event.form_director.value;
    var producer=event.form_producer.value;
    var language,genre,license_rights,territory_rights,description;
    var api=VIDEO_DESCRIPTION
    if(this.props.form_data!='')
    {
      language=this.state.language;
      genre=this.state.genre;
      license_rights=this.state.license;
      territory_rights=this.state.territory;
      description=this.state.description;
    }
    else {
    language=event.form_language.value;
    genre=event.form_genre.value;
    license_rights=event.form_license.value;
    territory_rights=event.form_Territory.value;
    description=event.form_description.value;
    }
    if(this.props.form_data!='')
    {
      api=VIDEO_DESCRIPTION_UPDATE;
    }
    axios.post(api, {
    title:title,tag:tag,cast:cast,director:director,producer:producer,language:language,genre:genre,description:description,territory_right:territory_rights,license_right:license_rights,video_id:this.state.video_id
  })
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
      {this.state.success && <SuccessAlert title="Details saved successfully" />}
          <div class="messages"></div>

          <div class="controls">

              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_title">Title *</label>
                          <input id="form_title" type="text" name="title" class="form-control" Value={this.props.form_data.title || ''} placeholder="Please enter your title *" required="required" data-error="Firstname is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_tagname">Tags *</label>
                          <input id="form_tagname" type="text" name="tagname" class="form-control" Value={this.props.form_data.tag || ''} placeholder="Please enter your tags *" required="required" data-error="Lastname is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_cast">Cast *</label>
                          <input id="form_cast" type="text" name="cast" class="form-control"  Value={this.props.form_data.cast || ''} placeholder="Please enter your cast *" required="required" data-error="Valid email is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_producer">Producer *</label>
                          <input id="form_producer" type="text" name="producer" class="form-control"  Value={this.props.form_data.producer || ''} placeholder="Please enter your producer *" required="required" data-error="Valid email is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="form_director">Director *</label>
                          <input id="form_director" type="text" name="director" class="form-control"  Value={this.props.form_data.director || ''} placeholder="Please enter your director *" required="required" data-error="Valid email is required."/>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="form_language">Language</label>
                          <select id="form_language" name="language" class="form-control" value={this.state.language} onChange={(e)=>this.setState({language:e.target.value})} required="required" data-error="Please specify your need.">
                              <option value=""></option>
                              <option value="English">English</option>
                              <option value="Hindi">Hindi</option>
                              <option value="Request copy of an invoice">Request copy of an invoice</option>
                              <option value="Other">Other</option>
                          </select>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="form_genre">Genre</label>
                          <select id="form_genre" name="genre" class="form-control" value={this.state.genre} onChange={(e)=>this.setState({genre:e.target.value})} required="required" data-error="Please specify your need.">
                              <option value=""></option>
                              <option value="LifeStyle">LifeStyle</option>
                              <option value="Request order status">Request order status</option>
                              <option value="Request copy of an invoice">Request copy of an invoice</option>
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
                      <select id="form_license" name="license" class="form-control" value={this.state.license} onChange={(e)=>this.setState({license:e.target.value})} required="required" data-error="Please specify your need.">
                          <option value=""></option>
                          <option value="OTT">OTT</option>
                          <option value="PLANET">Planet</option>
                          <option value="Request copy of an invoice">Request copy of an invoice</option>
                          <option value="Other">Other</option>
                      </select>
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="form_Territory">Territory Rights Availabe</label>
                      <select id="form_Territory" name="Territory" class="form-control" value={this.state.territory} onChange={(e)=>this.setState({territory:e.target.value})} required="required" data-error="Please specify your need.">
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
                  <div class="col-md-12">
                      <div class="form-group">
                          <label for="form_description">Description *</label>
                          <textarea id="form_description" name="description" class="form-control" value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})} placeholder="Enter Description *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
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
export default Description;
