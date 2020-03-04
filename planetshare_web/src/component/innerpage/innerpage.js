import React, { Component } from 'react';
import { Link} from "react-router-dom";
import VideoList from '../../component/videolist/videolist';
import {VIDEOS,VIDEO_DESCRIPTION_EDIT} from '../../url.js';
import axios from 'axios';
import $ from 'jquery';
import './innerpage.css';
import Select from 'react-select';
import ReactJWPlayer from 'react-jw-player';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share';
import Gallery from 'react-grid-gallery';
const dubboptions = [
  { value: 'English', label: 'English' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Bengali', label: 'Bengali' },
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Bhojpuri', label: 'Bhojpuri' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Korean', label: 'Korean' }
];
const bitrateoptions = [
  { value: '1080p', label: '1080p' },
  { value: '720p', label: '720p' },
  { value: '360p', label: '360p' },
  { value: 'WebM', label: 'WebM' },
  { value: '480p', label: '480p' },
  { value: '240p', label: '240p' },
  { value: '144p', label: '144p' },
  { value: 'Iphone4', label: 'Iphone4' },
  { value: 'Iphone4s', label: 'Iphone4s' },
  { value: 'Iphone6s', label: 'Iphone6s' },
  { value: 'HLS 2M', label: 'HLS 2M' },
  { value: 'HLS 2M', label: 'HLS 2M' },
  { value: 'HLS 2M', label: 'HLS 2M' },
  { value: 'HLS 2M', label: 'HLS 2M' },
  { value: 'HLS 2M', label: 'HLS 2M' },{ value: 'HLS 2M', label: 'HLS 2M' },
  { value: '400K', label: '400K' },
];
const qualityoptions = [
  { value: '3gp', label: '3gp' },
  { value: 'Mkv', label: 'Mkv' },
  { value: 'avi', label: 'avi' },
  { value: 'flv', label: 'flv' },
  { value: 'mpeg', label: 'mpeg' },
  { value: 'ogg', label: 'ogg' },
];
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},]
class VideoHomePage extends Component
{
  state={
    list:[],
    video_data:[],
    video_id:'',
    selectedDubbOption:[],
    selectedBitRateOption:[],
    selectedQualityOption:[],
    showCartButton:false,
    showBagButton:false,
    form_dubb:[],
    form_trans:[],
    form_tag:[],
    price:0
  }
  componentDidMount()
  {
    this.setState({video_id:this.props.match.params.id,showBagButton:this.props.showBagButton})
    axios.post(VIDEOS,{
      page_limit:'50',
      request_coming_from:'web'
    })
  .then(response=>{
    if(response.data.data!='')
    this.setState({list:response.data.data.data});
  })
  .catch(function (error) {
    console.log(error);
  });
  this.getVideoDetails(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps){
 window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
this.getVideoDetails(nextProps.match.params.id);
}
openNav=()=> {
document.getElementById("myNav_sell").style.height = "100%";
}

closeNav=()=> {
document.getElementById("myNav_sell").style.height = "0%";
}
  // componentDidUpdate()
  // {
  //   // if(this.state.showBagButton!=this.props.showBagButton)
  //   // {
  //   //   this.setState({showBagButton:this.props.showBagButton});
  //   // }
  //   if(this.state.video_id!=this.props.match.params.id)
  //   {
  //     //   document.getElementById('form').reset();
  //     //   $('#price_div').html('');
  //     //   $('#dubbing_id').addClass('collapsed');
  //     //   $('#dubbing_form').removeClass('show');
  //     //   $('#transcoding_id').addClass('collapsed');
  //     //   $('#transcoding_form').removeClass('show');
  //     //   $('#tagging_id').addClass('collapsed');
  //     //   $('#tagging_form').removeClass('show');
  //     // this.setState({showCartButton:false,showBagButton:false,video_id:this.props.match.params.id,selectedDubbOption:[],selectedBitRateOption:[],selectedQualityOption:[]});
  //     // this.getVideoDetails(this.props.match.params.id);
  //   }
  // }
  getVideoDetails(id)
  {
    axios.post(VIDEO_DESCRIPTION_EDIT,{
      video_id:id
    })
  .then(response=>{
    if(response.data.success=="1"){
      this.setState({video_data:response.data.data[0]})
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
// handleDubbChange = (selectedOption) => {
// this.setState({ selectedDubbOption:selectedOption });
// }
// handleBitRateChange = (selectedOption) => {
// this.setState({ selectedBitRateOption:selectedOption });
// }
// handleQualityChange = (selectedOption) => {
// this.setState({ selectedQualityOption:selectedOption });
// }
// serviceForm=()=>{
//   document.getElementById("form_dubb").submit();
//   document.getElementById("form_tag").submit();
//   document.getElementById("form_trans").submit();
//   var form_dubb=$("#form_dubb").serializeArray();
//   var form_trans=$("#form_trans").serializeArray();
//   var form_tag=$("#form_tag").serializeArray();
//   var fav = [];
// $.each($("input[name='services']:checked"), function(){
//     fav.push($(this).val());
// });
// var sum=100;
// // var html='<div><ul>';
// // for(var i=0;i<fav.length;i++)
// // {
// //   var iprice='';
// //   if(fav[i]=="dubbing")
// //   {
// //     iprice=580;
// //   }
// //   if(fav[i]=="transcoding")
// //   {
// //     iprice=500;
// //   }
// //   if(fav[i]=="tagging")
// //   {
// //     iprice=250;
// //   }
// //   html+='<li><span style="color:black;font-size:15px">'+fav[i]+'</span>:<p>'+iprice+'</p></li>';
// //   sum=sum+iprice;
// // }
// // html+='<li><span style="color:black;font-size:15px">Total</span>:<p>'+sum+'</p></li></ul>';
// this.setState({showCartButton:true,form_dubb:form_dubb,form_trans:form_trans,form_tag:form_tag,price:sum});
// // $('#price_div').html(html);
// }
  render()
  {
    const video_data=this.state.video_data;
    const videolist = (this.state.list.length>0 && this.state.list.map((result,index)=>{
    return <VideoList cast={result.cast} language={result.language} video_id={result.video_id} tag="buyer_video_list" img_url={`${result.thumbnail}`} host_url={result.host_url} title={result.title} description={result.description} video_tag={result.Premium=='0'?'Free':'Premium'} price={result.Premium=='0'?'0':result.Price}/>
  }));
  if(this.props.match.params.id=='undefined')
  {
    return(<header id="scroll_cont">
    <div class="overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    {/*<source src="https://ustreamssl-a.akamaihd.net/videos/home.webm" type="video/mp4"/>*/}
      <source src="img/transcoding.mp4" type="video/mp4"/>
    </video>
            <div class="container">
              <div class="row" style={{textAlign:'center'}}>
                <div class="col-sm-12">
                  <div class="banner-text mt-4" >
                    <div class="banner-heading">Coming Soon</div>
                </div>
              </div>
              {/*<div class="banner-image col-sm-6">
                  <div class="box-shadow banner-container">
                <img src="img/video.png" alt="Feature 04" />
                  <div class="playbtn"> </div>
                </div>
              </div>*/}
              <div class="col-12 col-md-10 col-lg-8 offset-md-2">
              </div>
           </div>
       </div>
    </header>
);
  }
  else {
    return (
      <div>
      <div id="myNav_sell" class="overlay_sell">
        <a href="javascript:void(0)" class="closebtn_sell" onClick={()=>this.closeNav()}>&times;</a>
        <div class="avail_serv_list">
        <Link to={`/dashboard/buyer/service/transcoding/uploadform/mylist/${video_data.id}`}><div class="feature" >
                <div class="feature-icon">
                    <img src="img/all-img/transcode_svg.svg" alt="Feature 01" />
                </div>
                <h6>Transcoding</h6>
        </div></Link>
          <Link to={`/dashboard/buyer/service/dubbing/uploadform/mylist/${video_data.id}`}><div class="feature" >
                <div class="feature-icon">
                    <img src="img/all-img/dubbing_svg.svg" alt="Feature 01" />
                </div>
                <h6>Dubbing</h6>
        </div></Link>
        <Link to={`/dashboard/buyer/service/subtitling/uploadform/mylist/${video_data.id}`}>
        <div class="feature" >
                <div class="feature-icon">
                    <img src="img/all-img/archieve_svg.svg" alt="Feature 01" />
                </div>
                <h6>Subtitling</h6>
        </div></Link>
        <Link to={`/dashboard/buyer/service/tagging/uploadform/mylist/${video_data.id}`}>
        <div class="feature" >
                <div class="feature-icon">
                    <img src="img/all-img/streaming_svg.svg" alt="Feature 01" />
                </div>
                <h6>Auto Tagging</h6>
        </div></Link>
        </div>
      </div>
    	 <section class="pt-5 pb-5 mt-0 view_bg align-items-center d-flex bg-dark " style={{height:'auto', backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 60%, transparent 50%), url(${video_data.banner_name})`, top:'0'}}>
          <div class="container-fluid">
            <div class="row  justify-content-left align-items-left d-flex text-left h-100">
              <div class="col-12 col-md-12" style={{margin: '0 auto', maxWidth: '1170px'}}>
                <h4 class="display-4  text-light mb-2 mt-5"><strong>{video_data.title}</strong> </h4>
                <p class="lead  text-light mb-5">{video_data.description}</p>
                <p><a href="#" class="btn  btn-round text-light btn-lg btn-rised"></a></p>
			          {/*<div class="btn-container-wrapper p-relative d-block  zindex-1">
				              <Link to="#" class="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light" onClick={()=>{alert('Coming Soon')}}>
				                   <div class="playBtn"></div>
				             </Link>
			           </div>*/}
              </div>
            </div>
          </div>
          <div class="icon_box">
            <ul>
              <li><a href="javascript:;"><i class="fa fa-plus-circle" aria-hidden="true"></i> Save</a></li>
              <li><a href="javascript:;"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i> Download</a></li>
              <li><a href="javascript:;"><i class="fa fa-share-alt" aria-hidden="true"></i> Share</a></li>
            </ul>
          </div>
          <FacebookIcon/>
</section>
<br/>

{/*{video_data.Premium=="1"?<Link to={`/checkout/${video_data.Price}`}><div class="col-md-6"><button class=" btn btn-lg btn-success">Buy Now <span style={{fontSize:'14px'}}>Rs. {video_data.Price}</span></button></div></Link>:<div class="col-md-6"><button class=" btn btn-lg btn-success">Watch Now</button></div>}*/}
<div class="row">
{/*<div class="col-md-12">
<div>
<button type="button" class="btn btn-success btn-lg" onClick={()=>{alert('Coming Soon')}} style={{marginLeft:'1050px',position:''}}><i class="fa fa-shopping-cart"></i>Add to cart</button>
</div>
</div>*/}

  {/*{this.state.showBagButton==false && this.state.showCartButton && <button type="button" class="btn btn-primary btn-sm float-right"  style={{maxHeight:'300px'}} onClick={()=>this.props.click(this.state.form_dubb,this.state.form_tag,this.state.form_trans,this.state.video_id,this.state.price)}>Add to Cart</button>}
  {this.state.showCartButton==true && this.state.showBagButton && <button type="button" class="btn btn-primary btn-sm float-right"  style={{maxHeight:'300px'}} >{this.state.showBagButton}Go to Bag</button>}*/}
</div>
<div class="view_content">
<Gallery images={IMAGES}/>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12 box1">
        <div class="video_box">
            <ReactJWPlayer
            playerId='jw-player'
            image={`${this.state.video_data.thumbnail}`}
            playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
            file={this.state.video_data.host_url}
            aspectRatio="16:9"
            className="col-md-12"
            isAutoPlay={true}
            controls="false"
            repeat="true"
            />
            <div class="clearfix"></div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 box2" >
          <div class="video_description" >
            <div class="ttl">
              <p>{video_data.title}</p>
            </div>
            <div class="desc">
              <p>{video_data.description}</p>
            </div>
            <div class="prod_box">
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              <p>{video_data.producer}</p>
              <p>{video_data.director}</p>
            </div>
            <div class="v_info">
              <p>
                <label>Cast:</label>
                <span>{video_data.cast}</span>
              </p>
              <p>
                <label>Genre:</label>
                <span>{video_data.genre}</span>
              </p>
              <p>
                <label>Language:</label>
                <span>{video_data.language}</span>
              </p>
              <p>
                <label>Tag:</label>
                <span>{video_data.tag}</span>
              </p>
            </div>
                <div class="buttons">
            {localStorage.getItem('userid')!=null&& <div class="video_disc_btn" >
              <button type="button" class="btn   btn-success" onClick={()=>this.openNav()} >Avail Service</button>
              </div>}
              {localStorage.getItem('userid')!=null &&  <div class="video_disc_btn"><Link to={{
                 pathname:"/videocheckout",
                 data:{price:150}
               }}><button type="button" class="btn btn-success"  ><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now<br/><br/>Rs.150</button></Link>
               </div>}
              {/*localStorage.getItem('userid')!=null &&  <div class="video_disc_btn">
                  <button type="button" class="btn btn-success"  ><i class="fa fa-shopping-cart" aria-hidden="true"></i>
     Buy Now</button>
                </div>*/}
              </div>

               {/*video_data.Premium=='0' && <button type="button" class="btn btn-primary btn-md" onClick={()=>{alert('Coming Soon')}} style={{padding:'10px'}}><i class="fa fa-video-camera"></i>Watch Now</button>*/}

            <div class="buttons">
              {localStorage.getItem('userid')==null && <div class="video_disc_btn" >
                <button type="button" class="btn   btn-success" onClick={()=>{alert('Please Login')}} >Avail Service</button></div>}
              {localStorage.getItem('userid')==null &&  <div class="video_disc_btn">
                  <button type="button" class="btn btn-success" onClick={()=>{alert('Please Login')}}  ><i class="fa fa-shopping-cart" aria-hidden="true"></i>
     Buy Now</button>
                </div>}
                 {/*video_data.Premium=='1' &&   <button type="button" class="btn btn-primary btn-md" onClick={()=>{alert('Please Login')}} style={{padding:'10px'}}><i class="fa fa-credit-card"  ></i>Buy Now<br/><br/>Rs.{video_data.Price}</button>*/}
                 {/*video_data.Premium=='0' && <button type="button" class="btn btn-primary btn-md" onClick={()=>{alert('Please Login')}} style={{padding:'10px'}}><i class="fa fa-video-camera"></i>Watch Now</button>*/}


              <div class="clearfix"></div>
            </div>
          </div>
      </div>
      {/*<div class="col-md-3">
      <button type="button" class="btn btn-success btn-lg" onClick={this.serviceForm}>Buy Now</button></div>*/}
    </div>
  </div>
</div>
<section class="features section text-center mt-5">
    <div class="container">
        <div class="features-inner section-inner has-top-divider">
            <div class="features-header text-center">
                <div class="container-sm">
                    <h5 class="section-title mt-0">You May Also Like</h5>
                    <p class="section-paragraph mb-0"></p>
                </div>
            </div>
            <div class="features-wrap">
              {videolist}
             </div>
          </div>
        </div>
  </section></div>
);}
    }
}
export default VideoHomePage;
// <nav class="sidebar-offcanvas" >
// <ul class="font-weight-bold">
//   <form  id="form_dubb" action="javascript:" ><li class="nav-item">
//     <input type="checkbox" name="dubbing" value="dubbing" id="dubbing_id" class="nav-link" data-toggle="collapse" href="#dubbing_form" aria-expanded="false" aria-controls="ui-basic"/>
//     <label for="dubbing_id">Dubbing</label>
//     <div class="collapse" id="dubbing_form">
//       <ul class="nav flex-column sub-menu">
//           <p>Please Specify The Language you want to dubb</p>
//           <Select
//        value={this.state.selectedDubbOption}
//        onChange={this.handleDubbChange}
//        options={dubboptions}
//        isMulti={true}
//        name="language"
//      />
//         </ul></div>
//     </li></form>
//     <form  id="form_tag" action="javascript:">
//   <li class="nav-item">
//     <input type="checkbox" name="tagging" value="tagging" id="tagging_id" class="nav-link" data-toggle="collapse" href="#tagging_form" aria-expanded="false" aria-controls="ui-basic" />
//     <label for="tagging_id">Automatic Tagging</label>
//     <div class="collapse" id="tagging_form">
//       <ul class="nav flex-column sub-menu">
//         <input type="radio" name="tag_radio" id="tag_yes" value="Yes"/><label for="tag_yes">Yes:</label>
//         <input type="radio" name="tag_radio" id="tag_no" value="No"/><label for="tag_no">No:</label>
//       </ul></div></li></form>
//       <form  id="form_trans" action="javascript:">
//     <li class="nav-item">
//       <input type="checkbox" name="transcoding" value="transcoding" id="transcoding_id" class="nav-link" data-toggle="collapse" href="#transcoding_form" aria-expanded="false" aria-controls="ui-basic"/>
//       <label for="foo_bar">Transcoding</label>
//       <div class="collapse" id="transcoding_form">
//         <ul class="nav flex-column sub-menu">
//               <p>Please Select Preset</p>
//               <Select
//            value={this.state.selectedBitRateOption}
//            onChange={this.handleBitRateChange}
//            options={bitrateoptions}
//            isMulti={true}
//            name="preset"
//          />
//          <p>Please Select Quality</p>
//          <Select
//       value={this.state.selectedQualityOption}
//       onChange={this.handleQualityChange}
//       options={qualityoptions}
//       isMulti={true}
//       name="quality"
//     />
//         </ul></div></li></form>
//     </ul>
//     </nav>
