import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loader from '../../component/loader/home_loading';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import {HOME_DATA,USERID,COUNTRYCODE,PARTNER_ID} from '../../url'
class App extends React.Component {
  state={carouselData:[],homeData:[],isLoading:false,livefeed:'images/video/transcoding.mp4'}
  componentDidMount()
  {
    this.getData();
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('page',0);
    formData.append('limit',8);
    let response= await axios.post(HOME_DATA,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.data.status!='101')
      {
          var result=response.data;
setTimeout(()=>this.setState({homeData:result.home,isLoading:true,livefeed:result.live_feed}),1000)
      }
      else {
        this.props.history.push('/not_found');
      }
  }
  render()
  {
    const responsive={
      320:{items:2},
      480:{items:2},
      600:{items:3},
      960:{items:4},
      1200:{items:5}
      }
      const responsive_vertical={
        320:{items:2},
        480:{items:3},
        600:{items:5},
        960:{items:6},
        1200:{items:6}
        }
      const {carouselData,homeData}=this.state;
      const CarouselData=carouselData.map((result,key)=>{
        return( <Link to={`/video/adds/${result.entryid}`}><div class="item">
                  <img src={result.imgurl} alt="" />
                  <div class="caption">
                      <div class="b_title">
                          {/*<a class="play_icon" data-toggle="modal" data-target="#homevideo_pop"><img src="images/icon_play.png" alt="" /></a>*/}
                          <h2></h2>
                          <p><span></span> </p>
                      </div>
                  </div>
              </div></Link>)
            });
      const HomeData=homeData.map((result,key)=>{
        if(result.search_tag.length>0)
        {
            return(result.image_type=='v'?<Vertical_Banner result={result} route_name="Home" img_disp="v"/>:<Horizontal_Banner result={result} route_name="Home" img_disp="h"/>)
          }
          })
            if(this.state.isLoading)
            {
      return (
          <div class="top_div" >
          <section class="home_banner">
            <div class="container">
              <div class="live_tv">
                <div class="row">
                  <div class="col-sm-7">
                    {/*<OwlCarousel
                     className="owl-theme"
                     items={1}
                     nav={false}
                     loop={true}
                     mouseDrag={true}
                     dots={true}
                     autoplay={true}
                     margin={30}
                     navigation={false}
                     navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                     >
                      {CarouselData}
                    </OwlCarousel>*/}
                    <div class="box l">

                        <ReactJWPlayer
                        playerId='jw-player'
                        image={`images/live_tv_bg.jpg`}
playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                        file={this.state.livefeed}
                        aspectRatio="16:9"
                        isAutoPlay={false}
                        controls={true}
                        repeat="true"
                        />

                        <div class="clearfix"></div>
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="box r">
                      <img src="images/banner_right_img.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </section>
          {HomeData}
          </div>)
        }
        else {
          return(<Loader/>)
        }
}
}
export default App;
