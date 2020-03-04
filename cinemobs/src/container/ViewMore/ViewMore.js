import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/category_loader';
import Loader_Vert from '../../component/loader/category_vert_loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import Duration from '../../component/duration'
import {VIEW_MORE,COUNTRYCODE,PARTNER_ID,USERID} from '../../url'
import $ from 'jquery';
import LinesEllipsis from 'react-lines-ellipsis'
import InfiniteScroll from 'react-infinite-scroller';
import Authenticator from '../Authentication/Authentication'
class Category_list extends React.Component
{
  state={categoryData:[],isLoading:false,cat_id:'',totalData:0,totalPages:0,currentPage:0,hasMore:false,title:'',imageType:'h'}
  componentDidMount()
  {
    var imageType=this.props.location.pathname.split('/')[2];
      if(imageType=='collectionv')
      {
        this.setState({imageType:'v'})
      }
      if(imageType=='collectionh')
      {
        this.setState({imageType:'h'})
      }
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
    formData.append('limit',this.state.imageType=='v'?12:10);
    formData.append('page',this.state.currentPage);
    formData.append('categoryid',this.state.cat_id);
    let response= await axios.post(VIEW_MORE,formData,{headers:{'token':localStorage.getItem('token')}});
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
          setTimeout(()=>this.setState({isLoading:true}),500)
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
      setTimeout(()=>this.getData(),100)
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
          (categoryData.length>0?<section class={`cat_gal cat_tabin ${this.state.imageType=='v'?'cat_vertabin':''}`}>
                  <article class="container">
                      <div class="horz_cat cat_slides">
                          <div class="slider_box o_data">
                          <div class="row">
                            {  categoryData.map((res,key)=>{return(<div class="item col-md-3 col-sm-3">
                                        <Link to={`/video/${(res.name.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g,'')).toLowerCase()}/${res.entryid}`} class="box">
                                          <div class="img">
                                              <img  class={this.state.imageType=='v'?'load_place_vert_more':'load_place_horiz_cat'} src={this.state.imageType=='v'?res.thumburl.v_thumburl:res.thumburl.h_thumburl} alt="" />
                                              {/*res.thumburl.v_thumburl!=null && <img  class="load_place_vert" src={res.thumburl.v_thumburl} alt="" />*/}
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
    return(this.state.imageType=="v"?<Loader_Vert />:<Loader/>)
  }
  }
}
export default Authenticator(Category_list);
