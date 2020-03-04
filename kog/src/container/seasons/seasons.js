import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loader from '../../component/loader/home_loading';
import Content_Loader from '../../component/loader/loader';
import Horizontal_Banner from '../../component/horizontal_banner/horizontal_banner';
import Duration from '../../component/duration'
import {SEASON_DATA,COUNTRYCODE,PARTNER_ID,USERID} from '../../url';
import Authenticator from '../Authentication/Authentication'
class Seasons extends React.Component{
    state={seasonData:[],isLoading:false,cat_id:''}
    componentDidMount()
    {
      this.setState({cat_id:this.props.match.params.season_id},function(){
        this.getData();
      })
    }
     getData=async()=>{
      var formData=new FormData();
      formData.append('userid',USERID);
      formData.append('countrycode',COUNTRYCODE);
      formData.append('partnerid',PARTNER_ID);
      formData.append('limit',8);
      formData.append('page',0);
      formData.append('categoryid',this.state.cat_id);
      let response=await axios.post(SEASON_DATA,formData,{headers:{'token':localStorage.getItem('token')}})
        if(response.status==200)
        {
            var result=response.data;
            //console.log(result.series_subdata);
            this.setState({seasonData:result.series_subdata,isLoading:true})
            setTimeout(()=>this.setState({isLoading:true}),1000)
        }
      else {

      }
    }
    componentDidUpdate()
    {
      if(this.state.cat_id!=this.props.match.params.season_id)
      {
        this.setState({cat_id:this.props.match.params.season_id,isLoading:false},function(){
            this.getData();
        })
      }
    }
  render()
  {
    const {seasonData}=this.state
    // const SeasonData=(seasonData.length>0?<div>{seasonData.map((result,key)=>{
    //       return(<Horizontal_Banner result={result} uniqId="season_list"/>)
    //     })}</div>:<div><center><h4>No Result Found</h4></center></div>)
        if(this.state.isLoading)
        {
    return(
      <div class="inner_wrap">
        <div class="container">
      {seasonData.length>0?seasonData.map((result,key)=>{
        if(result.search_tag.length>0)
        {
            return(<Horizontal_Banner result={result} uniqId="season_list" route_name="Home"/>)
        }  }):<center><h4>No Result Found</h4></center>}
      </div>
      </div>
    )
  }
  else {
    return(<Content_Loader />)
  }
}
}
export default Authenticator(Seasons);
{/*<section class="inner_banner">
  <div class="item">
    <img src="images/home_banner1.jpg" alt="" />
    <div class="caption">
      <div class="container">
        <div class="b_title">

            <h2>The Crown (season 1)</h2>
            <p><span></span>Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use,</p>
        </div>
      </div>
    </div>
  </div>
</section>*/}
