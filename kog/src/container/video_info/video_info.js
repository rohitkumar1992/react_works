import React from 'react'
import axios from 'axios';
import ReactJWPlayer from 'react-jw-player';
import {Link} from 'react-router-dom'
import {VIDEO_DATA,RELATED_VIDEO,PLAYLIST,COUNTRYCODE,PARTNER_ID,USERID,CONTINUE_WATCHING,FAVOURITES,WATCHLATER,USER_HISTORY,PLAYLIST_VIEW} from '../../url'
import Loader from '../../component/loader/video_player_loader.js';
import RelatedLoader from '../../component/loader/loader.js';
import Not_Found from '../../component/not_found/not_found'
import Duration from '../../component/duration';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { toast,cssTransition} from 'react-toastify';
import LinesEllipsis from 'react-lines-ellipsis'
import $ from 'jquery'
 import 'react-toastify/dist/ReactToastify.css';
 import Authenticator from '../Authentication/Authentication'
 const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class VideoInfo extends React.Component{
  state={response_data:[],playlist:[],tag:'',thumbnail:[],related_data:[],isRelatedLoading:false,isLoading:false,currentTime:'',totalDuration:0}
  componentDidMount()
  {
   // this.player.seek(50);
   var letters = /^[0-9]+$/;
 if(this.props.match.params.video_id.match(letters))
   {
    this.setState({old_entry_id:'',entry_id:this.props.match.params.video_id,not_found:false,tag:'categoryid'},function(){
      this.getData()
      this.getRelatedData();
      this.viewPlaylist();
      });
   }
   else {
     this.setState({old_entry_id:'',entry_id:this.props.match.params.video_id,not_found:false,tag:'entryid'},function(){
       this.getData()
       this.getRelatedData();
       this.viewPlaylist();
       });
   }
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append(this.state.tag,this.state.entry_id);
    let response= await axios.post(VIDEO_DATA,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.data.status!='101')
      {
          var result=response.data;
          this.setState({response_data:result.Video[0],thumbnail:result.Video[0].thumbnailurl,not_found:false,totalDuration:result.Video[0].duration})
          setTimeout(()=>this.setState({isLoading:true}),1000)
      }
      else {
          this.setState({not_found:true,isLoading:true})
        }

      }
      getRelatedData=async()=>{
        var formData=new FormData();
        formData.append('userid',USERID);
        formData.append('countrycode',COUNTRYCODE);
        formData.append('partnerid',PARTNER_ID);
        formData.append(this.state.tag,this.state.entry_id);
        let response= await axios.post(RELATED_VIDEO,formData,{headers:{'token':localStorage.getItem('token')}});
          if(response.data.status!='101')
          {
              var result=response.data;
              this.setState({related_data:result.RelatedVideo})
              setTimeout(()=>this.setState({isRelatedLoading:true}),1000)
          }
      }
      continue_watching=async ()=>{
        if(localStorage.getItem('token')==null)
        {
          return false;
        }
        var formData=new FormData();
        formData.append('userid',USERID);
        formData.append('countrycode',COUNTRYCODE);
        formData.append('partnerid',PARTNER_ID);
        formData.append('tag','insert');
        formData.append('played',this.state.currentTime);
        formData.append(this.state.tag,this.state.entry_id);
        let response= await axios.post(CONTINUE_WATCHING,formData,{headers:{'token':localStorage.getItem('token')}});
        if(response.status==200)
        {

        }
        else {

        }
      }
      addFavourites=async ()=>{
        if(localStorage.getItem('token')==null)
        {
            toast('Please Login',{ transition: Zoom,});
          return false;
        }
        var formData=new FormData();
        formData.append('userid',USERID);
        formData.append('countrycode',COUNTRYCODE);
        formData.append('partnerid',PARTNER_ID);
        formData.append('tag','insert');
        formData.append(this.state.tag,this.state.entry_id);
        let response= await axios.post(FAVOURITES,formData,{headers:{'token':localStorage.getItem('token')}});
        if(response.status==200)
        {
          toast(response.data.Message,{ transition: Zoom,});
        }
        else {

        }
      }
      addWatchLater=async()=>{
        if(localStorage.getItem('token')==null)
        {
            toast('Please Login',{ transition: Zoom,});
          return false;
        }
        var formData=new FormData();
        formData.append('userid',USERID);
        formData.append('countrycode',COUNTRYCODE);
        formData.append('partnerid',PARTNER_ID);
        formData.append('tag','insert');
        formData.append(this.state.tag,this.state.entry_id);
        let response= await axios.post(WATCHLATER,formData,{headers:{'token':localStorage.getItem('token')}});
        if(response.status==200)
        {
          toast(response.data.Message,{ transition: Zoom,});
        }
        else {

        }
      }
      viewPlaylist=async(tag,pid)=>{
        var formData=new FormData();
        formData.append('userid',USERID);
        formData.append('countrycode',COUNTRYCODE);
        formData.append('partnerid',PARTNER_ID);
        formData.append('tag','web');
        let response= await axios.post(PLAYLIST_VIEW,formData,{headers:{'token':localStorage.getItem('token')}});
        if(response.status==200)
        {
        //  console.log(response.data.UserView);
          this.setState({playlist:response.data.UserView})
        }
        else {

        }

      }
      likeDislike=async(action)=>{
        var formData=new FormData();
        formData.append('userid',USERID);
        formData.append('countrycode',COUNTRYCODE);
        formData.append('partnerid',PARTNER_ID);
        formData.append('vlike',action);
        formData.append(this.state.tag,this.state.entry_id);
        let response= await axios.post('http://otm.planetcast.in/like',formData,{headers:{'token':localStorage.getItem('token')}});
        if(response.status==200)
        {
       //toast(response.data.msg,{ transition: Zoom,});
            var res=this.state.response_data;
              res.totallike=response.data.total_like
              res.totaldislike=response.data.total_dislike
              res.userlike=response.data.user_choice
           this.setState({response_data:res})
        }
        else {

        }

      }
      addToPlaylist=async(tag,pid,pname)=>{
        var formData=new FormData();
        formData.append('userid',USERID);
        formData.append('countrycode',COUNTRYCODE);
        formData.append('partnerid',PARTNER_ID);
        if(tag=='new')
        {
          var name=document.getElementById('playlist_name').value;
            if(name.trim()=='')
            {
              $('#error_msg').html("Field can't be black")
              return false;
            }
            else {
              $('#error_msg').html("");
              formData.append('tag','new');
              formData.append('playlist',name);
              formData.append(this.state.tag,this.state.entry_id);
              let response= await axios.post(PLAYLIST,formData,{headers:{'token':localStorage.getItem('token')}});
              if(response.status==200)
              {
              //  $('#modalLoginForm').hide();
              $(".modal .close").click()
                toast(response.data.Message,{ transition: Zoom,});
              //  return false;
              }
              else {

              }
            }
        }
        if(tag=="old")
        {
          formData.append('tag','insert');
          formData.append(this.state.tag,this.state.entry_id);
          formData.append('pid',pid);
          formData.append('playlist',pname);
          let response= await axios.post(PLAYLIST,formData,{headers:{'token':localStorage.getItem('token')}});
          if(response.status==200)
          {

            toast(response.data.Message,{ transition: Zoom,});
          }
          else {

          }
        }

      }
  componentDidUpdate()
  {
    if(this.state.entry_id!=this.props.match.params.video_id)
    {
    //  console.log('hi');
    this.setState({old_entry_id:this.state.entry_id,entry_id:this.props.match.params.video_id,isLoading:false},function(){this.getData();this.getRelatedData()});
    }
  }
  onTimeChange=(e)=>{
    this.setState({currentTime:e.currentTime*1000})
    var percentage=(e.currentTime*1000/this.state.totalDuration)*100
    if(percentage>10 && percentage<90)
    {
      this.continue_watching()
    }
  }
  onVideoLoad(event) {
  //  console.log(event);
// this.setState({
// videoTitle: event.item.description // this only works with json feeds!
// });
}

  render()
  {
    const responsive={
      320:{items:2},
      480:{items:2},
      600:{items:3},
      960:{items:4},
      1200:{items:4}
      }
    const {response_data,thumbnail,related_data}=this.state;
    // console.log(related_data);
    const Related_Video=(related_data.length>0 && related_data.map((res,key)=>{
      return(<div class="item" key={key}>
                    <Link to={`/video/${(res.name.replace(/\s/g,'')).toLowerCase()}/${res.entryid}`} class={`box`}>
                      <div class="img">
                          <img  class="load_place_horiz" src={res.thumburl.h_thumburl} alt="" style={{maxHeight:'160px'}}/>
                          <p class="duration"><Duration sec1={res.duration}/></p>
                      </div>
                      <div  class="desc">
                           <span class="title">{res.name}</span>
                           <span class="subtitle">{res.sub_count}</span>
                           <div class="det">{res.description}</div>
                      </div>
                  </Link>
              </div>)
            }));
      const UpNext=(related_data.length>0 && related_data.map((res,key)=>{
        return(<Link to={`/video/${(res.name.replace(/\s/g,'')).toLowerCase()}/${res.entryid}`}  key={key}><li>
            <div class="img">
                <img  class="load_place_horiz" src={res.thumburl.h_thumburl} alt="" />
                <p class="duration"><Duration sec1={res.duration}/></p>
            </div>
            <div class="desc">
               <span class="title">{res.name}</span>
               <span class="subtitle">{res.sub_count}</span>
               <div class="det"><LinesEllipsis
  text={res.longdescription}
  maxLine='3'
  ellipsis='...'
  trimRight
  basedOn='letters'
/></div>
            </div>
          </li></Link>)
      }))
      if(this.state.isLoading)
    {
      if(this.state.not_found)
      {
        return(<Not_Found/>)
      }
      else {
          return(<div class="inner_wrap">
                    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title w-100 font-weight-bold">Create Playlist</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body mx-3">
                  <div class="md-form mb-5">
                    <i class="fas fa-text"></i>
                    <input type="text" id="playlist_name" class="form-control validate"/>
                    <label data-error="wrong" data-success="right" for="defaultForm-email">Your Playlist Name</label>
                  </div>
                </div>
                <span id="error_msg" style={{color:'red'}}></span>
                <div class="modal-footer d-flex justify-content-center">
                  <button class="btn btn-default" onClick={()=>{this.addToPlaylist('new')}}>Create Playlist</button>
                </div>
              </div>
            </div>
          </div>
            <section class="catdet_video">
                <div class="container">
                    <article class="vd_area">
                      <div class="row">
                        <div class="col-md-7 col-lg-8">
                          <ReactJWPlayer
                          style={{backgroundColor:'grey'}}
                          ref={(ref) => { this.player = ref }}
                          playerId='jw-player'
                          image={`${thumbnail.h_thumburl}`}
                          playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                          file={response_data.downloadurl}
                          aspectRatio="16:9"
                          className="col-md-12"
                          isAutoPlay={false}
                          controls={true}
                          repeat="true"
                            customProps={{
                              controls: true,
                              repeat: true,
                              stretching: 'fill',
                              preload: 'auto',
                              volume: 100,
                              width: '100%',
                              height: '100%',
                          }}
                          onTime={(e)=>{this.onTimeChange(e)}}
                          />
                          <div class="view_info">
                              <div class="ttl_info">
                                  <div class="row">
                                      <div class="col-md-12 col-lg-8">
                                          <h2>{response_data.name}</h2>
                                          <ul class="time_list">
                                              <li>2018</li>
                                              <li><Duration sec1={response_data.duration}/></li>
                                              <li>{response_data.SubGenre}</li>
                                              <li><span>U/A</span></li>
                                          </ul>
                                      </div>
                                      <div class="col-md-12 col-lg-4">
                                          <ul class="icon_list">
                                              <li><a href="javascript:;" onClick={()=>this.likeDislike('L')}><i class="fa fa-hand-o-up" aria-hidden="true"  style={{color:(response_data.userlike=='L' && response_data.userlike!=='D')?'#f79e1c':''}}></i>{response_data.totallike=='None'?0:response_data.totallike}</a></li>
                                              <li><a href="javascript:;" onClick={()=>this.likeDislike('D')}><i class="fa fa-thumbs-o-down" aria-hidden="true"  style={{color:(response_data.userlike=='D' && response_data.userlike!=='L')?'#f79e1c':''}}></i>{response_data.totaldislike=='None'?0:response_data.totaldislike}</a></li>
                                              <li><a href="javascript:;" onClick={()=>this.addWatchLater()}><i class="fa fa-clock-o" aria-hidden="true"></i></a></li>
                                              <li><a href="javascript:;" onClick={()=>this.addFavourites()}><i class="fa fa-heart" aria-hidden="true"></i></a></li>
                                              <li class="dropdown">
                                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-list" aria-hidden="true"></i></a>
                                                <div class="dropdown-menu">
                                                  <a class="dropdown-item" href="javascript:;"  data-toggle="modal" data-target="#modalLoginForm"><i class="fa fa-th-list" aria-hidden="true" ></i> Create Playlist</a>
                                                  {this.state.playlist.map((result,key)=>{
                                                    return(<a class="dropdown-item" href="javascript:;" onClick={()=>this.addToPlaylist('old',result.Playlist_id,result.Playlist_name)} key={key}><i class="fa fa-th-list" aria-hidden="true" ></i>{result.Playlist_name}</a>)
                                                  })}
                                                </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="clearfix"></div>
                              </div>
                              <div class="desc">
                                  <h4>Description</h4>
                                  <p>{response_data.longdescription}</p>
                                  <div class="clearfix"></div>
                              </div>
                              <div class="clearfix"></div>
                          </div>
                        </div>
                        <div class="col-md-5 col-lg-4">
                          <div class="side_playlist">
                            <h4>Up next</h4>
                            <ul>
                              {UpNext}

                            </ul>
                            <div class="clearfix"></div>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </article>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </section>

          <section class="cat_gal">
                  <article class="container">
                      <div class={`horz_cat cat_slides`}>
                          <div class="slider_box">

                                 <div class="clearfix"></div>
                             </div>
                             <div class="clearfix"></div>
                         </div>
                     </article>
                     <div class="clearfix"></div>
                 </section>
            <div class="clearfix"></div>
        </div>)
        }
  }
  else {
    return(<Loader/>)
  }
}
}
export default Authenticator(VideoInfo);
// {related_data.length>0 && <h2>We Recommend</h2>}
//     <OwlCarousel
//        className="owl-theme"
//        items={4}
//        slideBy={4}
//        nav={true}
//        loop={false}
//        mouseDrag={false}
//        dots={false}
//        animateOut={'fadeOut'}
//        animateIn={'fadeIn'}
//        autoplay={false}
//        margin={0}
//        navigation={true}
//        navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
//        responsive={responsive}
//        >
//        {Related_Video}
//        </OwlCarousel>
          // {!this.state.isRelatedLoading && <RelatedLoader/>}
