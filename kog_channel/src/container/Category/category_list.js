import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import {CATEGORY_DATA} from '../../url'
function convertTime(sec1) {
    var sec=sec1/1000
    var hours = Math.floor(sec/3600);
    (hours >= 1) ? sec = sec - (hours*3600) : hours = '00';
    var min = Math.floor(sec/60);
    (min >= 1) ? sec = sec - (min*60) : min = '00';
    (sec < 1) ? sec='00' : void 0;

    (min.toString().length == 1) ? min = '0'+min : void 0;
    (sec.toString().length == 1) ? sec = '0'+sec : void 0;

    return hours+':'+min+':'+sec;
}
class Category_list extends React.Component
{
  state={categoryData:[],isLoading:false,cat_id:'',hasMore:true}
  componentDidMount()
  {
    this.setState({cat_id:this.props.match.params.id},function(){
      this.getData();
    })
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',0);
    formData.append('countrycode','IN');
    formData.append('partnerid','ott357');
    formData.append('limit',8);
    formData.append('page',0);
    formData.append('categoryid',this.state.cat_id);
    let response= await axios.post(CATEGORY_DATA,formData);
      if(response.status=='200')
      {
          var result=response.data;
          setTimeout(()=>this.setState({categoryData:result.Category_data,isLoading:true}),1000)
      }
  }
  componentDidUpdate()
  {
    if(this.state.cat_id!=this.props.match.params.id)
    {
      this.setState({cat_id:this.props.match.params.id,isLoading:false},function(){
          this.getData();
      })
    }
  }
  render()
  {
    const {categoryData}=this.state
    const route_name=this.props.location.pathname.split('/')[1]
    const CategoryData=
          (categoryData.length>0?<section class="cat_gal">
                  <article class="container">
                      <div class="horz_cat cat_slides">
                          <div class="slider_box o_data">
                          <div class="row">
                            {  categoryData.map((res,key)=>{return(<div class="item col-md-3 col-sm-3">
                                        <Link to={`/video/${res.name}/${res.entryid}`} class="box">
                                          <div class="img">
                                              <img  class="load_place_horiz" src={res.thumburl.h_thumburl} alt="" />
                                              <p class="duration">{convertTime(res.duration)}</p>
                                          </div>
                                          <div class="caption">
                                              <p>{res.name}</p>
                                          </div>
                                      </Link>
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
    return(
      <div class="inner_wrap top_div">
          {CategoryData}
          <div class="clearfix"></div>
      </div>
    );
  }
  else {
    return(<Loader/>)
  }
  }
}
export default Category_list;
