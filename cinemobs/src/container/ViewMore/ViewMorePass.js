import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/category_loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import Duration from '../../component/duration'
import {VIEW_MORE_CATEGORY_DATA,COUNTRYCODE,PARTNER_ID,USERID} from '../../url'
import $ from 'jquery';
import LinesEllipsis from 'react-lines-ellipsis'
import InfiniteScroll from 'react-infinite-scroller';
import Authenticator from '../Authentication/Authentication'
class Category_list extends React.Component
{
  state={categoryData:[],isLoading:false,cat_id:'',totalData:0,totalPages:0,currentPage:0,hasMore:false,title:''}
  componentDidMount()
  {
    var title=this.props.match.params.cat_name.split('_');
    var title_final=''
    for(var i=0;i<title.length;i++)
    {
           title_final+=" "+title[i].charAt(0).toUpperCase()+title[i].slice(1)
    }
    this.setState({cat_id:this.props.match.params.catId,title:title_final},function(){
      this.getData();
    })
  }
   getData=async ()=>{
     var formData=new FormData();
     formData.append('userid',localStorage.getItem('userid'));
     formData.append('countrycode',COUNTRYCODE);
     formData.append('partnerid',PARTNER_ID);
     formData.append('limit',8);
     formData.append('page',0);
     formData.append('categoryid',this.state.cat_id);
     let response= await axios.post(VIEW_MORE_CATEGORY_DATA,formData,{headers:{'token':localStorage.getItem('token')}});
       if(response.status=='200')
       {
           var result=response.data;
           this.setState({categoryData:result.category_info})
           setTimeout(()=>this.setState({isLoading:true}),1000)
       }
  }
  componentDidUpdate()
  {
    if(this.state.cat_id!=this.props.match.params.catId)
    {
      this.setState({cat_id:this.props.match.params.catId,isLoading:false},function(){
          this.getData();
      })
    }
  }
loadFunc=(e)=>{
  if(this.state.totalPages>e)
  {
      setTimeout(()=>this.getData(),500)
    }
    else {
    //  console.log('hi');
      this.setState({hasMore:false})
    }
}
  render()
  {
    const {categoryData}=this.state
    const route_name=this.props.location.pathname.split('/')[1]
    const CategoryData=
          (categoryData.length>0?<section class="cat_gal cat_tabin">
                  <article class="container">
                      <div class="horz_cat cat_slides">
                          <div class="slider_box o_data">
                          <div class="row">

                            {  categoryData.map((res,key)=>{return(<div class="item col-md-3 col-sm-3">

                            {<Link to={res.sub_count==null?`/cat/${route_name}/${(res.Parent_name.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g,'_')).toLowerCase()}/${res.Parent_id}`:`/season/${(res.Parent_name.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g,'')).toLowerCase()}/${res.Parent_id}`}>
                              <div class="img">
                                  <img  class="load_place_horiz_cat" src={res.t_custom_url} alt=""  />
                              </div>
                              <div class="caption">
                                  <p>{res.Parent_name}</p>
                              </div>
                          </Link>}


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
      <center><h2 class="h2">{this.state.title}</h2></center>
          <InfiniteScroll
        pageStart={0}
        loadMore={this.loadFunc}
        hasMore={this.state.hasMore}
        loader={<div className="loader" key={0} style={{marginTop:'-100px'}}><Loader/></div>}
        useWindow={false}
        threshold={100}

    >
        {CategoryData}
    </InfiniteScroll>
          <div class="clearfix"></div>
      </div>
    );
  }
  else {
    return(<Loader/>)
  }
  }
}
export default withRouter(Authenticator(Category_list));
