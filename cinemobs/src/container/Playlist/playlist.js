import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/category_loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import Duration from '../../component/duration'
import {CATEGORY_DATA,COUNTRYCODE,PARTNER_ID,USERID,PLAYLIST_VIEW,PLAYLIST_METADATA,PLAYLIST} from '../../url';
import InfiniteScroll from 'react-infinite-scroller';
import { toast,cssTransition} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Not_Found from '../../component/not_found/not_found';
import Authenticator from '../Authentication/Authentication'
 const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Category_list extends React.Component
{
  state={playlistData:[],isLoading:false,not_found:false}
  componentDidMount()
  {
    this.setState({cat_id:this.props.match.params.id},function(){
      this.getData();
    })
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',localStorage.getItem('userid'));
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('tag','web');
    let response= await axios.post(PLAYLIST_VIEW,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status=='200')
      {
        var result=response.data;
          // if(result.UserView.length==0)
          // {
          //   this.setState({not_found:true})
          // }
          this.setState({playlistData:result.UserView})
          setTimeout(()=>this.setState({isLoading:true}),1000)
      }
      else {
        this.setState({not_found:true})
      }
  }
  deletePlaylist=async(pid)=>{
      var formData=new FormData();
      formData.append('userid',localStorage.getItem('userid'));
      formData.append('countrycode',COUNTRYCODE);
      formData.append('partnerid',PARTNER_ID);
      formData.append('tag','delete');
      formData.append('pid',pid);
      let response= await axios.post(PLAYLIST,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status==200)
      {
      //  console.log(response.data);
      if(response.data.status==2)
      {
            toast(response.data.Message,{ transition: Zoom,});
            var res=this.state.playlistData.filter((data)=>{return data.Playlist_id!=pid});
            this.setState({playlistData:res})
      }
      }
      else {

      }
  }
  render()
  {
    const {playlistData}=this.state
    //const route_name=this.props.location.pathname.split('/')[1]
    const PlaylistData=
          (playlistData.length>0?<section class="cat_gal cat_tabin">
                  <article class="container">
                      <div class="horz_cat cat_slides">
                          <div class="slider_box o_data">
                          <div class="row">
                            {  playlistData.map((res,key)=>{return(
                              <div class="item col-md-3 col-sm-3">
                                        <Link to={`/playlist/${res.Playlist_name}/${res.Playlist_id}`} class="box">
                                          <div class="img">
                                              <img  class="load_place_horiz_cat" src={res.count==null?'/images/horizontal.png':res.thumbnail.h_thumburl} alt="" />
                                          </div>
                                          <div class="caption">
                                              <p>{res.Playlist_name}</p>
                                          </div>
                                      </Link>
                                      <button class="delete"  onClick={()=>this.deletePlaylist(res.Playlist_id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
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
            if(this.state.not_found)
            {
              return(<Not_Found/>)
            }
            else {
    return(
      <div class="inner_wrap top_div">
          {PlaylistData}
          <div class="clearfix"></div>
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
