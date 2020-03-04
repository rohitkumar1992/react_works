import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ServiceList extends Component
{
  state={
    url_tag:'#'
  }
  componentDidMount()
  {
    if(this.props.tag=="dubb_service")
    this.setState({url_tag:`/dashboard/buyer/service/dubbing/uploadform/mylist/${this.props.video_id}`});
    if(this.props.tag=="transcode_service")
    this.setState({url_tag:`/dashboard/buyer/service/transcoding/uploadform/mylist/${this.props.video_id}`});
    if(this.props.tag=="subtitle_service")
    this.setState({url_tag:`/dashboard/buyer/service/subtitling/uploadform/mylist/${this.props.video_id}`});
    if(this.props.tag=="tagging_service")
    this.setState({url_tag:`/dashboard/buyer/service/tagging/uploadform/mylist/${this.props.video_id}`});
    // if(this.props.tag==null)
    // this.setState({url_tag:`/web/video_land/${this.props.video_id}`});
  }
  render()
  {
    if(this.props.tag=="buyer_video_list")
    {
      return (
        <div class=" row d-flex" style={{justifyContent:'left'}}>
          <Link to={`/web/video_land/${this.props.video_id}`} >
         <div class="col-md-2" style={{margin:'12px 6px'}}>
           <div class="view view-first style_prevu" style={{cursor:'pointer',height:'188px', width:'125px'}}>
            <div class="feature-title">
              {this.props.video_tag=="Premium" && <span class=" prim_icon"  style={{padding:'10px'}}> </span>}
              {this.props.video_tag=="Free" && <span class=" prim_icon" style={{padding:'10px'}}></span>}
              </div>
                <div class="feature-icon" >
                <div class="card">
                    <img src={`${this.props.img_url}`}  class="load_place_vert"/>
                  </div>
                  </div>
                  <div class="row">
                   <div class="mask d-flex">
                   <div class="col-md-12 d-flex"  style={{top:' 11px',padding: '1px 10px'}}>
                   <p class="break-word pt-4 " style={{marginBottom:'0px'}}>{this.props.title}<br/>{this.props.cast}
                   <p class="text-sm row pl-08" style={{color:'#dddada',top:'10%'}}><i class="fa fa-play">&nbsp;Add to watchlist</i></p>
                   {this.props.video_tag=="Premium"?<p class="text-sm row mb-1 pl-08" style={{color:'#dddada',top:'1%'}}><i class="fa fa-list">&nbsp;Add to cart</i></p>:<p class="text-sm row pl-08" style={{color:'#dddada',top:'5%'}}><i class="fa fa-list">&nbsp;Watch Now</i></p>}
                   {this.props.video_tag=="Premium" && <p class="text-sm row mb-0 pl-08" style={{color:'#dddada',marginBottom:'0px'}}>Rs {this.props.price}</p>}
                   </p>
              </div>
              </div>
              </div>
              </div>
               </div>
              </Link>

        </div>
      );
    }
    else {
    return (
      <div class=" row d-flex" style={{justifyContent:'left'}}>
        <Link to={this.state.url_tag} >
       <div class="col-md-2" style={{margin:'12px 1px'}}>
         <div class="view view-first style_prevu" style={{cursor:'pointer',height:'188px', width:'125px'}}>
          <div class="feature-title">
            {this.props.video_tag=="Premium" && <span class=" prim_icon"  style={{padding:'10px'}}> </span>}
            {this.props.video_tag=="Free" && <span class=" prim_icon" style={{padding:'10px'}}></span>}
            </div>
              <div class="feature-icon" >
              <div class="card">
                  <img src={`${this.props.img_url}`} alt={this.props.title} class="load_place_vert" />
	              </div>
	              </div>
	              <div class="row">
	               <div class="mask d-flex">
	               <div class="col-md-12 d-flex"  style={{top:' 11px',padding: '1px 10px'}}>
	               <p class="break-word pt-4 " style={{marginBottom:'0px'}}><br/>{this.props.title}<br/>{this.props.cast}
                 <p class="text-sm row pl-08" style={{color:'#dddada',top:'10%'}}><i class="fa fa-play">&nbsp;Add to watchlist</i></p>
                 {this.props.video_tag=="Premium"?<p class="text-sm row mb-1 pl-08" style={{color:'#dddada',top:'1%'}}><i class="fa fa-list">&nbsp;Add to cart</i></p>:<p class="text-sm row pl-08" style={{color:'#dddada',top:'5%'}}><i class="fa fa-list">&nbsp;Watch Now</i></p>}
                 {this.props.video_tag=="Premium" && <p class="text-sm row mb-0 pl-08" style={{color:'#dddada',marginBottom:'0px'}}>Rs {this.props.price}</p>}
                 </p>
            </div>
            </div>
            </div>
            </div>
             </div>
            </Link>

      </div>
    );}
    }
}

  export default ServiceList;
