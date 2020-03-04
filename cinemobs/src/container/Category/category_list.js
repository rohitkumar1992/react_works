import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/category_loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import Duration from '../../component/duration'
import {CATEGORY_DATA,COUNTRYCODE,PARTNER_ID} from '../../url';
import InfiniteScroll from 'react-infinite-scroller';
import LinesEllipsis from 'react-lines-ellipsis'
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
    this.setState({cat_id:this.props.match.params.id,title:title_final},function(){
      this.getData();
    })
  }
   getData=async ()=>{
    var formData=new FormData();
    formData.append('userid',localStorage.getItem('userid'));
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('limit',10);
    formData.append('page',this.state.currentPage);
    formData.append('categoryid',this.state.cat_id);
    let response= await axios.post(CATEGORY_DATA,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status=='200')
      {
          var result=response.data;
          var totalPages=Math.ceil(result.total_video/8);
          if(totalPages>=this.state.currentPage)
          {
            this.setState({totalPages:totalPages,currentPage:this.state.currentPage+1,hasMore:true})
          }
          else {
            this.setState({hasMore:false})
          }
          var output=this.state.categoryData.concat(result.Category_data)
          this.setState({categoryData:output,totalData:result.total_video,totalPages:totalPages})
          setTimeout(()=>this.setState({isLoading:true}),1000)
      }
  }
  loadFunc=(e)=>{
    if(this.state.totalPages>e)
    {
        setTimeout(()=>this.getData(),500)
      }
      else {
        this.setState({hasMore:false})
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
          (categoryData.length>0?<section class="cat_gal cat_tabin">
                  <article class="container">
                      <div class="horz_cat cat_slides">
                          <div class="slider_box o_data">
                          <div class="row">
                            {  categoryData.map((res,key)=>{return(<div class="item col-md-3 col-sm-3">
                                        <Link to={`/video/${(res.name.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g,'')).toLowerCase()}/${res.entryid}`} class="box">
                                          <div class="img">
                                              <img  class="load_place_horiz_cat" src={res.thumburl.h_thumburl} alt="" />
                                               <p class="duration"><Duration sec1={res.duration}/></p>
                                          </div>
                                          <div class="caption">
                                              <p><LinesEllipsis
                                               text={res.name}
                                               maxLine='1'
                                               ellipsis='...'
                                               trimRight
                                               basedOn='words'
                                             /></p>
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
      <center><h2 class="h2">{this.state.title}</h2></center>
          <InfiniteScroll
        pageStart={0}
        loadMore={this.loadFunc}
        hasMore={this.state.hasMore}
        loader={<div className="loader" key={0} style={{marginTop:'-100px'}}>Loading..</div>}
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
export default Category_list;
