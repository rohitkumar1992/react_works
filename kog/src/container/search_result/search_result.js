import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {SEARCH,COUNTRYCODE,PARTNER_ID,USERID} from '../../url';
import Loader from '../../component/loader/category_loader';
import Duration from '../../component/duration';
import LinesEllipsis from 'react-lines-ellipsis';
import Authenticator from '../Authentication/Authentication'
class SearchComponent extends  React.Component
{
  state={keyword:'',searchResult:[],isLoading:false}
  componentDidMount()
  {
    this.setState({keyword:this.props.match.params.word},function(){this.getSearchData(this.props.match.params.word)})
  }
   getSearchData=async (keyword)=>{
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('tag',keyword);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    let response= await axios.post(SEARCH,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.data.status!='101')
      {
          var result=response.data;
          this.setState({searchResult:result.SearchResult})
          setTimeout(()=>this.setState({isLoading:true}),1000)
      }
      else {
        //this.props.history.push('/not_found');
      }
  }
  componentDidUpdate()
  {
    if(this.state.keyword!=this.props.match.params.word)
    {
        this.setState({keyword:this.props.match.params.word,isLoading:false},function(){this.getSearchData(this.props.match.params.word)})
    }
  }
  render()
  {
    const {searchResult}=this.state
    const SearchData=
          (searchResult.length>0?<section class="cat_gal cat_tabin">
                  <article class="container">
                      <div class="horz_cat cat_slides">
                          <div class="slider_box o_data">
                          <div class="row">
                            {  searchResult.map((res,key)=>{return(<div class="item col-md-3 col-sm-3">
                                        {<Link to={`/video/${res.name}/${res.entryid}`} class="box">
                                          <div class="img">
                                              <img  class="load_place_horiz_search" src={res.thumburl.h_thumburl} alt="" />
                                              <p class="duration"><Duration sec1={res.duration}/></p>
                                          </div>
                                          <div class="caption">
                                              <p><LinesEllipsis
                                               text={res.name}
                                               maxLine='1'
                                               ellipsis='...'
                                               trimRight
                                               basedOn='words'
                                             /></p>
                                          </div>
                                      </Link>}
                                      {/*(res.category_id!=0 && res.subcount==null) && <Link to={`/cat/${res.category_id+66546+"svgh"}/${(res.name.replace(/\s/g,'_')).toLowerCase()}/${res.category_id}`} class="box">
                                        <div class="img">
                                            <img  class="load_place_horiz_search" src={res.thumburl_new} alt="" />
                                        </div>
                                        <div class="caption">
                                            <p><LinesEllipsis
                                             text={res.name}
                                             maxLine='1'
                                             ellipsis='...'
                                             trimRight
                                             basedOn='words'
                                           /></p>
                                        </div>
                                    </Link>*/}
                                    {/*(res.category_id!=0 && res.subcount!=null) && <Link to={`/season/${(res.name.replace(/\s/g,'_')).toLowerCase()}/${res.category_id}`} class="box">
                                      <div class="img">
                                          <img  class="load_place_horiz_search" src={res.thumburl_new} alt="" />
                                      </div>
                                      <div class="caption">
                                          <p><LinesEllipsis
                                           text={res.name}
                                           maxLine='1'
                                           ellipsis='...'
                                           trimRight
                                           basedOn='words'
                                         /></p>
                                      </div>
                                  </Link>*/}
                                  </div>)
                                })
                              }
                              </div>
                              <div class="clearfix"></div>
                          </div>



                          <div class="clearfix"></div>
                      </div>
                  </article>
                  <div class="clearfix"></div>
              </section>:<center><h4>No Result Found</h4></center>)
          if(this.state.isLoading)
          {
    return(
      <div class="inner_wrap top_div">
          {SearchData}
          <div class="clearfix"></div>
      </div>
    );
  }
  else {
    return(<Loader/>)
  }
  }
}
export default Authenticator(SearchComponent);
