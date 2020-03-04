import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import ReactJWPlayer from 'react-jw-player';
import Loader from '../../component/loader/video_player_loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import Duration from '../../component/duration'
import {CATEGORY_DATA,COUNTRYCODE,PARTNER_ID,USERID,PLAYLIST_VIEW,PLAYLIST_METADATA,PLAYLIST} from '../../url';
import Not_Found from '../../component/not_found/not_found'
import InfiniteScroll from 'react-infinite-scroller';
import {  toast,cssTransition} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authenticator from '../Authentication/Authentication'
import LinesEllipsis from 'react-lines-ellipsis'
const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Category_list extends React.Component
{
  state={playlistData:[],isLoading:false,not_found:false,play_id:0,videoUrl:'',video_banner:'',currententryId:'',
  playlist:[]
}
  componentDidMount()
  {
    this.setState({play_id:this.props.match.params.id},function(){
      this.getData();
    })
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('pid',this.state.play_id);
    let response= await axios.post(PLAYLIST_METADATA,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status=='200')
      {
          var result=response.data;
          if(result.UserView.length==0)
          {
            //this.setState({not_found:true,isLoading:true})
            toast("Playlist is empty",{ transition: Zoom,});
            setTimeout(()=>this.props.history.push('/playlist'),100)
          //  return false;
          }
          else {
            var output=[]
            var res1=result.UserView;
              for(var i=0;i<res1.length;i++)
              {
                var feed={file:res1[i].downloadurl,image:res1[i].thumbnail.h_thumburl,entryid:res1[i].entry_id}
                  output.push(feed)
              }
              //console.log(output);
            this.setState({playlistData:result.UserView,playlist:output,videoUrl:result.UserView[0].downloadurl,video_banner:result.UserView[0].thumbnail.h_thumburl})
            setTimeout(()=>this.setState({isLoading:true,not_found:false}),1000)
          }

      }
      else {
        this.setState({not_found:true})
      }
  }
  componentDidUpdate(){
    if(this.props.match.params.id!=this.state.play_id){
      this.setState({not_found:false,isLoading:false,play_id:this.props.match.params.id},function(){this.getData()})
    }
  }
  onVideoLoad=(event)=>{
 //console.log(event.item.sources[0].entryid);
  this.setState({currententryId:event.item.sources[0].entryid},function(){
  //  this.switchPlaylist(event.item.sources[0].entryid)
  })

  }
  deletePlaylistItem=async(entryid)=>{
      var formData=new FormData();
      formData.append('userid',USERID);
      formData.append('countrycode',COUNTRYCODE);
      formData.append('partnerid',PARTNER_ID);
      formData.append('entryid',entryid);
      formData.append('tag','delete');
      formData.append('pid',this.state.play_id);
      let response= await axios.post(PLAYLIST,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status==200)
      {
      //  console.log(response.data);
        // var res=this.state.playlistData.filter((data)=>{return data.entry_id!=entryid});
        // var array2=this.state.playlist.filter((data)=>{return data.entryid!=entryid});
        // this.setState({playlistData:res,playlist:array2})
        toast(response.data.Message,{ transition: Zoom,});
        this.getData()
      }
      else {

      }
  }
  switchPlaylist=(entryid)=>{
    var array1=this.state.playlist.filter((data)=>{return data.entryid==entryid});
    var array2=this.state.playlist.filter((data)=>{return data.entryid!=entryid});
    var array3=array1.concat(array2)
    this.setState({playlist:array3,currententryId:entryid})
  }
  render()
  {
    const {playlistData}=this.state
    const UpNext=(playlistData.length>0 && playlistData.map((res,key)=>{
      return(
            <li class={this.state.currententryId==res.entry_id?'current_vdo':''} style={{cursor:'pointer'}} key={key}>
              <div class="img" onClick={()=>this.switchPlaylist(res.entry_id)}>
                  <img  class="load_place_horiz" src={res.thumbnail.h_thumburl} alt="" />
                  <p class="duration"><Duration sec1={res.Duration}/></p>
              </div>
              <div class="desc">
                 <span class="title">Demo</span>
                 <span class="subtitle"></span>
                 <div class="det">
                  <div class="LinesEllipsis"><LinesEllipsis
     text={res.longdescription}
     maxLine='3'
     ellipsis='...'
     trimRight
     basedOn='letters'
   /></div>
                 </div>
              </div>
              <button class="delete"  onClick={()=>this.deletePlaylistItem(res.entry_id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
              {this.state.currententryId==res.entry_id && <div class="icon_pl_pu"><i class="fa fa-play" aria-hidden="true"></i></div>}
              {this.state.currententryId!=res.entry_id && <div class="icon_pl_pu">{key+1}</div>}
            </li>
      )
    }))
          if(this.state.isLoading)
          {
            if(this.state.not_found)
            {
              return(<Not_Found/>)
            }
            else {
    return(
      <div class="inner_wrap">
        <section class="catdet_video">
            <div class="container">
                <article class="vd_area">
                  <div class="row">
                    <div class="col-md-7 col-lg-8">
                      <ReactJWPlayer
                      ref={(ref) => { this.player = ref }}
                      playerId='jw-player'

                  //  file={response_data.downloadurl}
                    onVideoLoad={this.onVideoLoad}
                    playlist={this.state.playlist}
                     image={this.state.video_banner}
                      playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                       file={this.state.videoUrl}
                      aspectRatio="16:9"
                      className="col-md-12"
                      isAutoPlay={false}
                      controls={true}
                        customProps={{
                          controls: true,
                          defaultBandwidthEstimate: 400000,
                          stretching: 'fill',
                          preload: 'auto',
                          volume: 100,
                          width: '100%',
                          height: '100%',
                      }}
                      // onTime={(e)=>{this.onTimeChange(e)}}
                      />
                      {/*<div class="view_info">
                          <div class="ttl_info">
                              <div class="row">
                                  <div class="col-sm-8">
                                      <h2>{response_data.name}</h2>
                                      <ul class="time_list">
                                          <li>2018</li>
                                          <li><Duration sec1={response_data.duration}/></li>
                                          <li>{response_data.SubGenre}</li>
                                          <li><span>U/A</span></li>
                                      </ul>
                                  </div>
                                  <div class="col-sm-4">
                                      <ul class="icon_list">
                                          <li><a href="javascript:;"><i class="fa fa-hand-o-up" aria-hidden="true"></i></a></li>
                                          <li><a href="javascript:;"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></a></li>
                                          <li><a href="javascript:;" onClick={()=>this.addWatchLater()}><i class="fa fa-clock-o" aria-hidden="true"></i></a></li>
                                          <li><a href="javascript:;" onClick={()=>this.addFavourites()}><i class="fa fa-heart" aria-hidden="true"></i></a></li>
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
                      </div>*/}
                    </div>
                    <div class="col-md-5 col-lg-4">
                      <div class="side_playlist play_list">
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
        </div>
    );
  }
}
  else {
    return(<Loader/>)
  }
  }
}
export default Authenticator(Category_list);
