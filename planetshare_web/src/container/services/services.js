import React, { Component } from 'react';
import ServiceList from '../../component/servicelist/servicelist';
import VideoList from '../../component/videolist/videolist';
import {VIDEOS} from '../../url.js';
import $ from 'jquery';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom';
import './services.css';
class Services extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      list:[]
    }
  }
  componentDidMount()
  {
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
	{/*var owl = $('.owl-carousel'); // used in slider and  moment
	var owl2 = $('.owl-carousel-2'); // used in happy clients
	owl2.owlCarousel({
		loop:true,
		nav:true,
		dots:true,
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:5000,
		margin:30,

		responsive:{
		320:{items:1},
		480:{items:1},
		600:{items:2},
		960:{items:3},
		1200:{items:4}
		}
	});*/}
  }


  render()
  {
    const videolist = (this.state.list.length>0 && this.state.list.map((result,index)=>{
    return <VideoList cast={result.cast}  video_id={result.video_id} tag="buyer_video_list" img_url={`${result.thumbnail}`} host_url={`${result.host_url}`} title={result.title} description={result.description} video_tag={result.Premium=='0'?'Free':'Premium'} price={result.Premium=='0'?'0':result.Price}/>
  }));
  const responsive={
		320:{items:1},
		480:{items:1},
		600:{items:2 },
		960:{items:3},
		1200:{items:4}
		}
    if(this.props.tag=='video')
    {
    return (
      <section class="features section text-center">
          <div class="container">
              <div class="features-inner section-inner has-top-divider">
                  <div class="features-header text-center">
                      <div class="container-sm">
                          <h5 class="section-title mt-0">Trending Videos </h5>
                          <p class="section-paragraph mb-0"></p>
                      </div>
                  </div>
                  <div class="features-wrap ">
                    {videolist}
                   </div>
                </div>
              </div>
        </section>
             );
          }
          if(this.props.tag=='category_content')
          {
          return (
            <section class="features section text-center">
                <div class="container">
                    <div class="features-inner section-inner has-top-divider">
                          <div class="features-header text-center">
                            <div class="container-sm">
                                <h5 class="section-title mt-0 text-uppercase">{this.props.heading}</h5>
                                <p class="section-paragraph mb-0"></p>
                            </div>
                        </div>
                      <div class="features-wrap ">
                          {videolist}{videolist}
                         </div>
                      </div>
                    </div>
              </section>
                   );
                }
          else {
            return (
              <section class="home_services">
                <div class="container">
                 <h4 class="wow fadeInUp" data-wow-duration="3500ms" style={{fontSize:'25px'}}>True turn-key video monetization platform</h4>
                 <ul class="serv_list">
                   <li class="item">
                     <ServiceList	img_url="img/all-img/transcode_svg.svg" icon_class="fa fa-video-camera" title="Transcoding " content="Transform and tune your content for your desired devices and network conditions with  Planetcast’s Transcoding Services."/>
                     <div class="button"><Link to="/web/transcoding_service">Know More...</Link></div>
                   </li>
  						     <li class="item">
                     <ServiceList	img_url="img/all-img/dubbing_svg.svg" icon_class="fa fa-microphone" title="Dubbing " content="Comprehensive state of the art solutions for Dubbing Services across multiple platforms in over 128 languages."  />
                     <div class="button"><Link to="/web/dubbing_service">Know More...</Link></div>
                   </li>
  						     <li class="item">
                     <ServiceList	img_url="img/all-img/autotagging.svg" icon_class="fa fa-tag" title="Automatic Tagging " content="Amplify the visibility of your video content and get noticed by your target audience with Planetcast’s video tagging services"/>
                     <div class="button"><Link to="/web/tagging_service">Know More...</Link></div>
                   </li>
  						     <li class="item">
                     <ServiceList	img_url="img/all-img/subtitling.svg" icon_class="fa fa-vcard-o" title="Subtitling " content="Experience professional quality and linguistic accuracy with Planetcast’s reliable and cost-effective solutions for Subtitling and Captioning."/>
                     <div class="button"><Link to="/web/subtitling_service">Know More...</Link></div>
                   </li>
  						     <li class="item">
                      <ServiceList img_url="img/all-img/archieve_svg.svg" icon_class="fa fa-file-archive-o" title="Archiving " content="Experience exceptional speed, securityand reliability withPlanetcast's state of the art archiving services.  "/>
                      <div class="button"><Link	to="/web/archieving_service">Know More...</Link></div>
                    </li>
  						      <li class="item">
                      <ServiceList img_url="img/all-img/streaming_svg.svg" icon_class="fa fa-film" title="Streaming " content="Studio-grade streaming services toaudiences of any size to support multiple video streamingplatforms. "/>
                      <div class="button"><Link to="/web/streaming_service">Know More...</Link></div>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
              </section>
            )
          }
    }
}
export default Services;

// <div class="feature ">
// <div class="feature-inner">
//     <div class="feature-icon">
//         <img src="img/all-img/feature-icon-02.svg" alt="Feature 02" />
//     </div>
//     <h6 class="feature-title">High end Analytics</h6>
//     <p class="text-sm">often arouses curiosity due to its resemblance </p>
// </div>
// </div>
// <div class="feature ">
// <div class="feature-inner">
//     <div class="feature-icon">
//         <img src="img/all-img/feature-icon-03.svg" alt="Feature 03" />
//     </div>
//     <h6 class="feature-title">Smart Dashboard</h6>
//     <p class="text-sm">often arouses curiosity due to its resemblance </p>
// </div>
// </div>
// <div class="feature">
// <div class="feature-inner">
//     <div class="feature-icon">
//         <img src="img/all-img/feature-icon-04.svg" alt="Feature 04" />
//     </div>
//     <h6 class="feature-title">Cloud Technology</h6>
//     <p class="text-sm">often arouses curiosity due to its resemblance  </p>
// </div>
// </div>
