import React, { Component } from 'react';
import './banner.css';
import axios from 'axios';
import {BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import {VIDEO_SEARCH} from '../../url.js';
import $ from 'jquery';
import Particles from 'react-particles-js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Banner extends Component {
  state={
    searchList:[],
    searchShow:false,
    searchKeyword:'',
    hideSearch:true,
    count:0
  }
  searchresult=()=>{
    // alert('hi');
  }
  onKeyPressed=(e)=>
  {
    if(e.keyCode==40){

      if(this.state.searchList.length>0 && this.state.searchList!="No Result found")
      {
        // alert('hi');
        // document.getElementById("dd").focus();
        if((this.state.searchList.length>this.state.count) &&  this.state.count!='undefined')
        {
          $('#td').val(this.state.searchList[this.state.count].title);
          $('#search_id_value').val(this.state.searchList[this.state.count].id);
          var counts=this.state.count;
          this.setState({count:counts+1});
        }

      }

    }
    if(e.keyCode==38){
      if(this.state.searchList.length>0 && this.state.searchList!="No Result found")
      {
        if(this.state.count>0 && this.state.count!='undefined')
        {
          $('#td').val(this.state.searchList[this.state.count-1].title);
          $('#search_id_value').val(this.state.searchList[this.state.count-1].id);
          var counts=this.state.count;
          this.setState({count:counts-1});

          // $('#td').val(this.state.searchList[this.state.count].title);
        }

      }

    }
      // document.getElementById("dd").focus();


  }
  searchResult=(e)=>{
    var keyword=e.target.value;

    if(keyword=='')
    {
      this.setState({searchShow:false,searchList:''});
      return false;
    }
    axios.post(VIDEO_SEARCH,{
      searchKeyword:keyword
    })
  .then(response=>{
    if(response.data.success=='1')
    {
      this.setState({searchShow:true,searchList:response.data.data,searchKeyword:keyword})
    }
    if(response.data.success=='0')
    {
      this.setState({searchShow:true,searchList:'No Result Found'})
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  // searchSubmit =(e)=>{
  //   e.preventDefault();
  //   var shownVal=e.target.inputBoxValue.value;
  //   var id=$("#cars option[value='"+shownVal+"']").attr('data-id');
  //   // this.setState({searchList:[],hideSearch:false});
  //   this.props.history.push("/web/video_land/"+id);
  //   }
  //   optionClick =(id)=>{
  //     this.props.history.push("/web/video_land/"+id);
  //     }
  searchSubmit =(e)=>{
    e.preventDefault();
    var id=e.target.inputBoxValue.value;
    // var id=$("#cars option[value='"+shownVal+"']").attr('data-id');
    // this.setState({searchList:[],hideSearch:false});
    if(id=='')
    {
      return false;
    }
    this.props.history.push("/web/search/"+id);
    }
  render() {
    const responsive={
      320:{items:1},
      480:{items:1},
      600:{items:1},
      960:{items:1},
      1200:{items:1}
      }
    return (
    <div class="home_video">
      <div class="overlay"></div>
      <div class="home_slider">
         <OwlCarousel
            className="owl-theme"
            items={1}
            loop={true}
            mouseDrag={false}
            dots={false}
            animateOut={'fadeOut'}
            animateIn={'fadeIn'}
            autoplay={true}
            responsive={responsive}
            >
            <div class="item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="box l">
                      <h2>Sell your videos & images online</h2>
                      <p class="m_text">Want a marketplace for your videos & images?</p>
                      <p>Get on board to monetize your media contents as you sell your crafty work here.</p>
                      {/*<div class="button">
                        <Link to="/web/transcoding_service" class="btn">Get Started for Free</Link>
                      </div>*/}
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="box r">
                      <div class="tvframe">
                        <img src="img/service_tv.png" alt="" />
                        <img class="tv_img" src="img/service_tv_bg.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="box l">
                      <h2>Influence the media sphere with your creativity & skills</h2>
                      <p class="m_text">Looking to get an attractive price for your art?</p>
                      <p>Receive rewards and appreciations for your quality services as you add value to the media content.</p>
                      {/*<div class="button">
                        <Link to="/web/transcoding_service" class="btn">Get Started for Free</Link>
                      </div>*/}
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="box r">
                      <div class="tvframe">
                        <img src="img/service_tv.png" alt="" />
                        <img class="tv_img" src="img/service_tv_bg1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="box l">
                      <h2>Take your videos to the next level</h2>
                      <p class="m_text">Need a top-up on your videos?</p>
                      <p>Make your videos accessible, worthy and engaging with our cost-effective media services.</p>
                      {/*<div class="button">
                        <Link to="/web/transcoding_service" class="btn">Get Started for Free</Link>
                      </div>*/}
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="box r">
                      <div class="tvframe">
                        <img src="img/service_tv.png" alt="" />
                        <img class="tv_img" src="img/service_tv_bg2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </OwlCarousel>
        </div>
      {/*<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="Test.mp4" type="video/mp4"/>
        <source src="Test.webm" type="video/webm"/>
      </video>*/}
      {/*<Particles
        params={{"particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#b6b2b2"
            }
          },
          "opacity": {
            "value": 0.5211089197812949,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 8.017060304327615,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 12.181158184520175,
              "size_min": 0.1,
              "sync": true
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c8c8c8",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
                       }}
       style={{position:'absolute',zIndex:'111'}}/>*/}

            <div class="container" style={{display:'none'}} >
              <div class="row" style={{textAlign:'center'}}>
                <div class="col-sm-12">
                  <div class="banner-text" >
                    <div class="wow animated slideInDown banner-heading slider_text " data-wow-duration="3500ms"> Discover unmatched media services and captivating videos collection</div>
                </div>
              </div>
              {/*<div class="banner-image col-sm-6">
                  <div class="box-shadow banner-container">
                <img src="img/video.png" alt="Feature 04" />
                  <div class="playbtn"> </div>
                </div>
              </div>*/}
              <div class="col-md-12">
              <form onSubmit={this.searchSubmit} autocomplete="off" >
                    <div class="banner-search row no-gutters align-items-center slider_search">
                        <div class="col" style={{backgroundColor:'white',height:'45px'}}>
                            <input list="cars"  class="form-control form-control-lg form-control-borderless form-control-search" type="search" name="inputBoxValue" placeholder="Search Videos" onChange={(e)=>this.searchResult(e)} id="td" onKeyUp={(e)=>this.onKeyPressed(e)}/>
                            <input  name="id_input_box" class="form-control form-control-lg form-control-borderless form-control-search" id="search_id_value" type="search"  placeholder="Search Videos" style={{display:'none'}}/>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-lg btn-success-search" type="submit" style={{backgroundColor:'#da3928'}}><i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                      {/*  {this.state.searchShow && <datalist id="cars" onClick={()=>this.optionClick(2)}>
                         {this.state.searchList.slice(0,5).map((data,key)=>{
                           return (<a href="#" onClick={()=>this.optionClick(data.id)}><option style={{backgroundColor:'white' ,cursor:'pointer'}} id={data.title} data-id={data.id} value={data.title} >{data.title}</option></a>
                          )
                        })}</datalist>
                      }*/}
                        {(this.state.searchShow && this.state.searchList!="No Result Found") && <div id="search_data" class="col-auto" style={{width: "100%",height:'100%', zIndex:"100000"}}><ul id="dd" class="list-group">
                         {this.state.searchList.slice(0,5).map((data,key)=>{
                           return (<Link to={`/web/search/${data.title}`} onClick={()=>this.setState({searchList:[],hideSearch:false})}><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer'}} class="p-1" >  <div class="col-md-11 text-left pt-0 pl-3"> <medium class="pt-1 text-dark mb-0 mt-0 ">{data.title}</medium> </div></li></Link>
                          )
                        })}
                           {/*{(this.state.hideSearch && this.state.searchList!="No Result Found") && <Link to="#" onClick={()=>this.setState({searchList:[],hideSearch:false})}><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer',textAlign:'center'}} class="p-2">See More Result</li></Link>}*/}
                            </ul></div>}
                           {/*{(this.state.searchList=="No Result Found" && this.state.searchShow==true) && <div id="search_data" class="col-auto" style={{position: "relative", width: "100%",height:'100%', top:"0", right:"0px", zIndex:"100000"}}><ul class="list-group"><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer',textAlign:'center',color:'black',fontFamily:'bold'}} class="p-2">{this.state.searchList}</li></ul></div>}*/}

                    </div>
                </form>
              </div>
           </div>
            </div>
    </div>

    );
  }
}
export default withRouter(Banner);
// {/*      <div class="banner">
//         <div class="container">
//           <div class="row">
//             <div class="col-sm-12">
//               <div class="banner-text">
//                 <div class="banner-heading"> Browse Our Collection and Services</div>
//                 <div class="banner-sub-heading">Explore the worlds largest collection of royalty-free stock video and millions of others creative assets.
//               </div>
//               <button type="button" class="btn btn-warning  btn-banner btn-warning-banner box-shadow">Get started</button>
//             </div>
//           </div>
//           {/*<div class="banner-image col-sm-6">
//               <div class="box-shadow banner-container">
//             <img src="img/video.png" alt="Feature 04" />
//               <div class="playbtn"> </div>
//             </div>
//           </div>*/}
//           <div class="col-12 col-md-10 col-lg-8 offset-md-2">
//               <form class=" ">
//                   <div class="banner-search row no-gutters align-items-center">
//                       <div class="col">
//                           <input class="form-control form-control-lg form-control-borderless form-control-search" type="search" placeholder="Search topics or keywords" />
//                       </div>
//                       <div class="col-auto">
//                           <button class="btn btn-lg btn-success btn-success-search" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
//                       </div>
//                   </div>
//               </form>
//           </div>
//        </div>
//    </div>
// </div>*/}
// <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
// {/*<source src="https://ustreamssl-a.akamaihd.net/videos/home.webm" type="video/mp4"/>*/}
//   <source src="https://res.cloudinary.com/dn3qy37yz/video/upload/v1560413667/v8_aijaau.mp4" type="video/mp4"/>
// </video>
