import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loader from '../../component/loader/category_loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import {CONTINUE_WATCHING,COUNTRYCODE,PARTNER_ID,USERID,FAVOURITES,WATCHLATER,USER_HISTORY} from '../../url'
import Authenticator from '../Authentication/Authentication'
class TabContent extends React.Component {
  state={isLoading:false,videoData:[],keyValue:''}
  componentDidMount()
  {
    this.setState({keyValue:this.props.key1},function(){
      this.getData('view');
    })
  }
   getData=async (tag,entryid)=>{
      var url="";
      var formData=new FormData();
      formData.append('userid',USERID);
      formData.append('countrycode',COUNTRYCODE);
      formData.append('partnerid',PARTNER_ID);
     if(this.props.key1=="Continue Watching")
      {
        url=CONTINUE_WATCHING;
      }
     if(this.props.key1=="Favourites")
     {
       url=FAVOURITES;
     }
     if(this.props.key1=="History")
     {
       url=USER_HISTORY;
     }
     if(this.props.key1=="Watch Later")
     {
       url=WATCHLATER;
     }
    formData.append('tag',tag);
    if(tag=="delete")
    {
        formData.append('entryid',entryid);
    }
    let response= await axios.post(url,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status=='200')
      {
          var result=response.data;
          if(tag=='delete')
          {
            // if(response.data.Status==0)
            // {
              var res=this.state.videoData.filter((data)=>{return data.entryid!=entryid});
              this.setState({videoData:res})
              return false
            //}
          }
          if(this.props.key1=="Continue Watching")
           {
            this.setState({videoData:result.ContinueWatching})
           }
          if(this.props.key1=="Favourites")
          {
            this.setState({videoData:result.Favourite})
          }
          if(this.props.key1=="History")
          {
            this.setState({videoData:result.UserHistory})
          }
          if(this.props.key1=="Watch Later")
          {
            this.setState({videoData:result.Watchlater})
          }
          setTimeout(()=>this.setState({isLoading:true}),500)
      }
      else {
    //    this.props.history.push('/not_found');
      }
  }
  componentDidUpdate()
  {
    if(this.props.key1!=this.state.keyValue)
    {
      this.setState({keyValue:this.props.key1,isLoading:false},function(){
        this.getData('view')
      })
    }
  }
  render()
  {
    const {videoData}=this.state
    const Data=
      (videoData.length>0?<section class="cat_gal cat_tabin">
              <article class="container">
                  <div class="horz_cat cat_slides">
                      <div class="slider_box o_data">
                      <div class="row">
                        {  videoData.map((res,key)=>{return(<div class="item col-md-3 col-sm-3">
                                    <Link to={`/video/${(res.name.replace(/\s/g,'')).toLowerCase()}/${res.entryid}`} class="box">
                                      <div class="img">
                                          <img  class="load_place_horiz_cat" src={res.thumburl.h_thumburl} alt="" />
                                      </div>
                                      <div class="caption">
                                          <p>{res.name}</p>
                                      </div>
                                  </Link>
                                  {this.props.key1!='History' &&  <button class="delete"  onClick={()=>this.getData('delete',res.entryid)}><i class="fa fa-trash" aria-hidden="true"></i></button>}
                                  {/*res.category_id!=0 &&<Link to={`/cat/${res.category_id+66546+"svgh"}/${(res.name.replace(/\s/g,'_')).toLowerCase()}/${res.category_id}`} class="box">
                                    <div class="img">
                                        <img  class="load_place_horiz" src={res.thumburl_new} alt="" />
                                    </div>
                                    <div class="caption">
                                        <p>{res.name}</p>
                                    </div>
                                </Link>*/}
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
      return (
        <div class="inner_wrap top_div">
            {Data}
            <div class="clearfix"></div>
        </div>)
        }
        else {
          return(<Loader/>)
        }
}
}
export default Authenticator(TabContent);
