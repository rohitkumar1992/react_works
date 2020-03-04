import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loader from '../../component/loader/home_loading';
import Content_Loader from '../../component/loader/loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import {HOME_DATA,COUNTRYCODE,PARTNER_ID,USERID,UUID} from '../../url';
import InfiniteScroll from 'react-infinite-scroller';
class App extends React.Component {
  state={carouselData:[],homeData:[],isLoading:false,currentPage:0,hasMore:false}
  componentDidMount()
  {
    this.getData();
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('page',this.state.currentPage);
    formData.append('limit',8);
    let response= await axios.post(HOME_DATA,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.data.status!='101')
      {
          var result=response.data;
          if(response.data.msg=="next")
          {
            this.setState({hasMore:true,currentPage:this.state.currentPage+1})
          }
          else {
              this.setState({hasMore:false})
          }
            var output=this.state.homeData.concat(result.home)
          this.setState({carouselData:result.Carousel,homeData:output})
          setTimeout(()=>this.setState({isLoading:true}),1000)
      }
      else {
    //    this.props.history.push('/not_found');
      }
  }
  loadFunc=(e)=>{
    if(this.state.hasMore)
    {
      setTimeout(()=>this.getData(),100)
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
  //    console.log(homeData);
      const CarouselData=carouselData.map((result,key)=>{
        return( <Link to={`/video/adds/${result.entryid}`}><div class="item">
                  <img src={result.imgurl} alt="" style={{height:'450px'}}/>
                  <div class="caption">
                    <div class="container">
                      <div class="b_title">
                          {/*<a class="play_icon" data-toggle="modal" data-target="#homevideo_pop"><img src="images/icon_play.png" alt="" /></a>*/}
                          <h2>Playflix</h2>
                          <p><span></span>{result.longdescription}</p>
                      </div>
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
          <OwlCarousel
             className="owl-theme"
             items={1}
             nav={false}
             loop={true}
             mouseDrag={true}
             dots={true}
             autoplay={true}
             autoplayTimeout={5000}
             smartSpeed={2000}
             margin={30}
             navigation={false}
             navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
             >
              {CarouselData}
              </OwlCarousel>
              <div class="clearfix"></div>
          </section>
          <InfiniteScroll
        pageStart={0}
        loadMore={this.loadFunc}
        hasMore={this.state.hasMore}
        loader={<div className="loader" key={0} ><Content_Loader/></div>}
        useWindow={false}
        threshold={100}
    >
        {HomeData}
    </InfiniteScroll>
          </div>)
        }
        else {
          return(<Loader/>)
        }
}
}
export default App;
