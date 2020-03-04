import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Loader from '../../component/loader/loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Vertical_Banner from '../../component/vertical_banner/vertical_banner';
import {MOVIES_DATA} from '../../url'

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
    formData.append('userid',0);
    formData.append('countrycode','IN');
    formData.append('partnerid','ott357');
    formData.append('limit',8);
    formData.append('page',0);
    formData.append('categoryid',this.state.cat_id);
    let response= await axios.post(MOVIES_DATA,formData);
      if(response.status=='200')
      {
          var result=response.data;
          setTimeout(()=>this.setState({movieData:result.category_subdata,isLoading:true}),1000)
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
    const MovieData=movieData.map((result,key)=>{
          return(result.image_type=='v'?<Vertical_Banner result={result} onScrollData={this.getData} route_name={route_name}/>:<Horizontal_Banner result={result} onScrollData={this.getData} route_name={route_name}/>)
        })
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
export default Movies;
