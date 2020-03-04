import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import {MOVIES_DATA,COUNTRYCODE,PARTNER_ID,USERID} from '../../url'
import Authenticator from '../Authentication/Authentication'
class Movies extends React.Component
{
  state={movieData:[],isLoading:false,cat_id:'',hasMore:true}
  componentDidMount()
  {
    this.setState({cat_id:this.props.match.params.id},function(){
      this.getData();
    })
  }
   getData=async ()=>{
     if(this.props.match.params.menu_name=='home')
     {
       this.props.history.push('/')
     }
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('limit',8);
    formData.append('page',0);
    formData.append('categoryid',this.state.cat_id);
    let response= await axios.post(MOVIES_DATA,formData,{headers:{'token':localStorage.getItem('token')}});
      if(response.status=='200')
      {
          var result=response.data;
          this.setState({movieData:result.category_subdata})
          setTimeout(()=>this.setState({isLoading:true}),1000)
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
    const {movieData}=this.state
    const route_name=this.props.location.pathname.split('/')[1]
    const MovieData=(movieData.length>0?movieData.map((result,key)=>{
      if(result.search_tag.length>0)
      {
          return(localStorage.getItem('vertical_image')==this.state.cat_id?<Vertical_Banner result={result} onScrollData={this.getData} route_name={route_name}/>:<Horizontal_Banner result={result} onScrollData={this.getData} route_name={route_name} {...this.props}/>)
        }
        }):(<center>No Result Found</center>))
          if(this.state.isLoading)
          {
    return(
      <div class="inner_wrap top_div">
          {MovieData}
          <div class="clearfix"></div>
      </div>
    );
  }
  else {
    return(<Loader/>)
  }
  }
}
export default Authenticator(Movies);
