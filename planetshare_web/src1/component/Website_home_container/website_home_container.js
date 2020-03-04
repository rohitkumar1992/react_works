import React, { Component } from 'react';
import Services from '../../container/services/services';
import Banner from '../../container/banner/banner';
// import Features from '../../component/features/features';
import {BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import {VIDEO_SEARCH} from '../../url.js';
import axios from 'axios';
import Service_url from '../../container/service_url/service_url';
import Login_Signup_Modal from '../../container/login_signup/login_signup';
import Card from '../../container/category_cards/category_cards.js';
import $ from 'jquery';
import LoadingBar from 'react-top-loading-bar';
import './website_home_container.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {VIDEOS,VIDEO_DESCRIPTION_EDIT} from '../../url.js';
class Website_home_container extends Component {
  state = {
    loadingBarProgress: 0,
    redirect:'',
    searchList:[],
    searchShow:false,
    searchKeyword:'',
    hideSearch:true,
    count:0,list:[]
  }
  componentDidMount()
  {
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    axios.post(VIDEOS,{
      page_limit:'18',
      request_coming_from:'web'
    })
  .then(response=>{
    if(response.data.data!='')
    this.setState({list:response.data.data.data});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  complete = (redirect) => {
    this.setState({ loadingBarProgress: 100,redirect:redirect});
  }
  onLoaderFinished = () => {
        this.props.history.push(this.state.redirect);
    this.setState({ loadingBarProgress: 0,redirect:''});

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

    const videolist=(this.state.list.map((result,key)=>{
          return(
            <div class="row d-flex" style={{justifyContent:'left'}}>
              <Link to={`/web/video_land/${result.video_id}`} >
                <div class="col-md-2">
                  <div class="view view-first style_prevu" style={{cursor:'pointer',height:'188px', width:'125px'}}>
                    <div class="feature-title">
                      <span class=" prim_icon"  style={{padding:'10px'}}> </span>
                    </div>
                    <div class="feature-icon" >
                      <div class="card">
                        <img src={result.thumbnail}  class="load_place_vert"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mask d-flex">
                        <div class="col-md-12 d-flex"  style={{top:' 11px',padding: '1px 10px'}}>
                          <p class="break-word pt-4 " style={{marginBottom:'0px'}}>
                            {result.title}<br/>{result.cast}
                            <p class="text-sm row pl-08" style={{color:'#dddada',top:'10%'}}><i class="fa fa-play">&nbsp;Add to watchlist</i></p>
                            <p class="text-sm row pl-08" style={{color:'#dddada',top:'5%'}}><i class="fa fa-list">&nbsp;Watch Now</i></p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                </Link>
              </div>
          )
        }))
    const responsive={
      320:{items:1},
      480:{items:1},
      600:{items:1},
      960:{items:1},
      1200:{items:1}
      }
    return (
      <div class="top_div">
        <div id="home_search_list">
          <div class="searchbox">
            <form onSubmit={this.searchSubmit} autocomplete="off" >
              <Link class="logo_small" to="/" style={{display: "none"}} ><img src="img/logo_small.png" alt="" /></Link>
              <div class="slider_search">
                <input list="cars"  class="form-control form-control-lg form-control-borderless form-control-search" type="search" name="inputBoxValue" placeholder="Search Videos, Images & Media Services..." onChange={(e)=>this.searchResult(e)} id="td" onKeyUp={(e)=>this.onKeyPressed(e)}/>
                <input  name="id_input_box" class="form-control form-control-lg form-control-borderless form-control-search" id="search_id_value" type="search"  placeholder="Search Videos" style={{display:'none'}}/>
                <button class="btn btn-lg btn-success-search" type="submit" style={{backgroundColor:'#da3928'}}><i class="fa fa-search" aria-hidden="true"></i></button>
                {/*  {this.state.searchShow && <datalist id="cars" onClick={()=>this.optionClick(2)}>
                   {this.state.searchList.slice(0,5).map((data,key)=>{
                     return (<a href="#" onClick={()=>this.optionClick(data.id)}><option style={{backgroundColor:'white' ,cursor:'pointer'}} id={data.title} data-id={data.id} value={data.title} >{data.title}</option></a>
                    )
                  })}</datalist>
                }*/}
                  {(this.state.searchShow && this.state.searchList!="No Result Found") && <div id="search_data" class="col-auto" style={{width: "100%", zIndex:"100000"}}><ul id="dd" class="list-group">
                   {this.state.searchList.slice(0,5).map((data,key)=>{
                     return (<Link to={`/web/search/${data.title}`} onClick={()=>this.setState({searchList:[],hideSearch:false})}><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer'}} class="p-1" >  <div class="col-md-11 text-left pt-0 pl-3"> <medium class="pt-1 text-dark mb-0 mt-0 ">{data.title}</medium> </div></li></Link>
                    )
                  })}
                     {/*{(this.state.hideSearch && this.state.searchList!="No Result Found") && <Link to="#" onClick={()=>this.setState({searchList:[],hideSearch:false})}><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer',textAlign:'center'}} class="p-2">See More Result</li></Link>}*/}
                      </ul><div class="clearfix"></div></div>}
                     {/*{(this.state.searchList=="No Result Found" && this.state.searchShow==true) && <div id="search_data" class="col-auto" style={{position: "relative", width: "100%",height:'100%', top:"0", right:"0px", zIndex:"100000"}}><ul class="list-group"><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer',textAlign:'center',color:'black',fontFamily:'bold'}} class="p-2">{this.state.searchList}</li></ul></div>}*/}
                  <div class="clearfix"></div>
              </div>
              <div class="selectbox">
                  <div class="cat_links">
                    <a href="javascript:;" data-toggle="collapse" data-target="#cat_links"><i class="fa fa-list-ul" aria-hidden="true"></i> Categories</a>
                    <div id="cat_links" class="collapse">
                      <h4>Browse Categories</h4>
                      <ul>
                        <li>
                          <Link to="/web/category/technology">Technology</Link>
                        </li>
                        <li>
                        <Link  to="/web/category/people">People</Link>
                        </li>
                        <li>
                        <Link  to="/web/category/slowmotion">Slow Motion</Link>
                        </li>
                        <li>
                        <Link to="/web/category/language">Language</Link>
                        </li>
                        <li>
                        <Link  to="/web/category/business">Business</Link>
                        </li>
                        <li>
                        <Link to="/web/category/nature">Nature</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="clearfix"></div>
              </div>
              <div class="clearfix"></div>
            </form>
            <div class="clearfix"></div>
          </div>
        </div>

        <section class="market">
          <div class="container">
            <div class="market_area">
              <div class="side_cat">
                <h3><i class="fa fa-list-ul" aria-hidden="true"></i> My Markets</h3>
                <ul>
                  <li><Link to="/web/category/business"><i class="fa fa-building" aria-hidden="true"></i> Business</Link></li>
                  <li><Link to="/web/category/fashion"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Fashion</Link></li>
                  <li><Link to="/web/category/healthcare"><i class="fa fa-medkit" aria-hidden="true"></i> Healthcare</Link></li>
                  <li><Link to="/web/category/wildlife"><i class="fa fa-tree" aria-hidden="true"></i> Wildlife</Link></li>
                  <li><Link to="/web/category/food&drink"><i class="fa fa-glass" aria-hidden="true"></i> Food & Drink</Link></li>
                  <li><Link to="/web/category/education"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Education</Link></li>
                  <li><Link to="/web/category/science"><i class="fa fa-flask" aria-hidden="true"></i> Science</Link></li>
                  <li><Link to="/web/category/finance"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Finance</Link></li>
                  <li><Link to="/web/category/sports"><i class="fa fa-trophy" aria-hidden="true"></i> Sports</Link></li>

                  {/*<li class="last dropdown">
                    <a data-toggle="dropdown" href="javascript:;">All Categories <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="javascript:;">Holidays</a></li>
                      <li><a href="javascript:;">Sports</a></li>
                      <li><a href="javascript:;">Finance</a></li>
                      <li><a href="javascript:;">Animals</a></li>
                    </ul>
                  </li>*/}
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="home_slider">
                <OwlCarousel
                   className="owl-theme"
                   items={1}
                   loop={true}
                   mouseDrag={false}
                   dots={false}
                   animateOut={'slideOutUp'}
                   animateIn={'fadeIn'}
                   autoplay={true}
                   responsive={responsive}
                   >
                   <div class="item">
                       <div class="box r">
                         <div class="tvframe">
                           <img class="tv_img" src="img/service_tv_bg1.jpg" alt="" />
                         </div>
                       </div>
                   </div>
                   <div class="item">
                       <div class="box r">
                         <div class="tvframe">
                           <img class="tv_img" src="img/service_tv_bg2.jpg" alt="" />
                         </div>
                       </div>
                   </div>
                   <div class="item">
                       <div class="box r">
                         <div class="tvframe">
                           <img class="tv_img" src="img/service_tv_bg3.jpg" alt="" />
                         </div>
                       </div>
                   </div>
                 </OwlCarousel>
                 {/* <div class="service_mob">
                   <img src="img/services_mob.png" alt="" />
                  </div>*/}
                 <div class="clearfix"></div>
               </div>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </section>
        {/*<Banner />*/}
        {/*<LoadingBar
           progress={this.state.loadingBarProgress}
           height={3}
           color="red"
           onLoaderFinished={() => this.onLoaderFinished()}
         />*/}

        <div class="card_home">
          <Card clicked={this.complete}/>
          <section class="home_trend features section">
              <div class="container">
                  <div class="features-inner">
                      <h4 class="wow fadeInUp">Planetshare Trending</h4>
                      <div class="features-wrap">
                        {videolist}
                       </div>
                    </div>
                  </div>
          </section>

          <Services />
          {/*<Services tag="video"/>*/}

          <div class="cont_safe">
            <div class="container">
              <div class="cont_box">
                <div class="box l">
                  <h2>Content Security</h2>
                  <p>Content Security is our topmost priority. Your media files are safe with us thanks to our industry-standard security practices. Planetshare adopts cutting-edge technology and applies enhanced safety measures </p>
                </div>
                <div class="box r">
                  <img src="img/Privacy-Security-Uscreen.png" alt="" />
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>

          <div class="busi_tools one">
            <div class="container">
              <div class="tools_box">
                <div class="box r">
                  <img src="img/ipadX2.gif" alt="" />
                </div>
                <div class="box l">
                  <h2>Get Work Done With Advanced Tools</h2>
                  <h6><i class="fa fa-hand-o-right" aria-hidden="true"></i> Seller & Vendor Dashboard</h6>
                  <p>With Planetshare, you get a quality dashboard allowing you to view and manage your activities. </p>
                  <h6><i class="fa fa-hand-o-right" aria-hidden="true"></i> Upload What You Want</h6>
                  <p>You can upload the videos and images in seconds on our website. The uploading process is quick, smooth and user-friendly. </p>
                  <h6><i class="fa fa-hand-o-right" aria-hidden="true"></i> Service-Specific Work Assignment</h6>
                  <p>Our system assigns you the task according to the services you offer. Sit back and relax as our advanced system does the job for you.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="busi_tools">
            <div class="container">
              <div class="tools_box">
                <div class="box l">
                  <h2>Get What You Want With Ease & Confidence</h2>
                  <h6><i class="fa fa-hand-o-right" aria-hidden="true"></i> 100 % Payment Protection</h6>
                  <p>Your money is safe with us during the entire cycle of your purchase, i.e. from the transaction till you are satisfied with the services opted.</p>
                  <h6><i class="fa fa-hand-o-right" aria-hidden="true"></i> Genuine, Fixed & Upfront Pricing</h6>
                  <p>We are watchful with every single transaction and ensure genuine prices for all stocks and services. No hidden, hourly or variable prices.</p>
                  <h6><i class="fa fa-hand-o-right" aria-hidden="true"></i> Access To Support</h6>
                  <p>We are minutes away from you when it comes to support. Get your queries addressed and concerns resolved at the earliest.</p>
                </div>
                <div class="box r">
                  <img src="img/safepayment.jpg" alt="" />
                  {/*<div class="icon"><img src="img/icon_play_video.png" alt="" /></div>*/}
                </div>
              </div>
            </div>
          </div>

          <div class="planet_demo">
            <div class="container">
                <h4>Market Place Demo</h4>
                <div class="tools_box">
                    <div class="box l">
                      <img src="img/market_demo.jpg" alt="" />
                      <div class="icon"><img src="img/icon_play_video.png" alt="" /></div>
                    </div>
                    <div class="box r">
                      <h6>Getting Started with Planetshare's Media Services</h6>
                      <ul>
                        <li><i class="fa fa-hand-o-right"></i> Getting started with our services is as easy as you like! Get your desired solutions within minutes as you navigate yourself on our smooth and user-friendly platform. Search for what you want in the search box or make your way through relevant categories to get the work done. Sign Up to get your hands on amazing things.</li>
                        <li><i class="fa fa-hand-o-right"></i> Media Solutions from Planetshare make it easy for you to get customised services on your videos. Get services for your own videos or top up your purchased media files with tailor-made services to suit your project.</li>
                      </ul>
                    </div>
                </div>
                {/*<div class="buttons">
                    <a href="javascript:;" class="btn">Sign up for free</a>
                </div>*/}
            </div>
            <div class="clearfix"></div>
        </div>

          {/*<div class="home_demo">
            <div class="container">
              <h2>Get What You Want With Ease & Confidence</h2>
              <div class="demo_box">
                <div class="box l">
                  <h6><i class="fa fa-check-circle-o" aria-hidden="true"></i> 100% Payment Protection</h6>
                  <p>Your money is safe with us during the entire cycle of your purchase, i.e. from the transaction till you are satisfied with the services opted.</p>
                  <h6><i class="fa fa-check-circle-o" aria-hidden="true"></i> Genuine, Fixed & Upfront Pricing</h6>
                  <p>We are watchful with every single transaction and ensure genuine prices for all stocks and services. No hidden, hourly or variable prices.</p>
                  <h6><i class="fa fa-check-circle-o" aria-hidden="true"></i> Access To Support</h6>
                  <p>We are minutes away from you when it comes to support. Get your queries addressed and concerns resolved at the earliest.</p>
                </div>
                <div class="box r">
                  <img src="img/selling-proposition.png" alt="" />
                </div>
              </div>
            </div>
          </div>*/}

          {/*<div class="features-extended-header text-center mt-4">
            <div class="container-sm">
              <h4 class=" wow bounceInRight section-title " style={{fontSize:'25px'}} data-wow-duration="3500ms">Video Services for Every Industry</h4>
            </div>
          </div>*/}

          {/*<Service_url />*/}
          <div class="clearfix"></div>
        </div>
        {/*<Features />*/}
      </div>
    );
  }
}

export default Website_home_container;
