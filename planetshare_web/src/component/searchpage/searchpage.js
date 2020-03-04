import React, { Component } from 'react';
import VideoList from '../../component/videolist/videolist';
import Banner from '../../container/banner/banner';
import axios from 'axios';
import {BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import {VIDEO_SEARCH,VIDEOS} from '../../url.js';
import './search_page.css';
class SEARCHPAGE extends Component
{
  state={
    searchList:[],
    keyword:'',
    banner_img:'',
    searchShow:false,list:[]
  }
  componentDidMount()
  {
        // console.log(this.props.location.item);
      this.searchResult(this.props.match.params.keyword,this.getData);

  }

  getData=()=>{
    axios.post(VIDEOS,{
      page_limit:'50',
      request_coming_from:'web'
    })
  .then(response=>{
    if(response.data.data!='')

    var result=this.state.searchList.concat(response.data.data.data);
    this.setState({list:result,loader:true});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  searchResult=(searchKeyword,callback)=>
  {
    var keyword=searchKeyword;
    this.setState({keyword:keyword});
  if(keyword=='')
  {
    this.props.history.push('/');
    return false;
  }
  axios.post(VIDEO_SEARCH,{
    searchKeyword:keyword
  })
.then(response=>{
  if(response.data.success=='1')
  {
    this.setState({searchList:response.data.data})
  }
  if(response.data.success=='0')
  {
    this.setState({searchList:[]})
  }
  callback();
})
.catch(function (error) {
  console.log(error);
});
  }
  searchForm=(e)=>{
    e.preventDefault();
    var search_key=e.target.search_bar.value;
    this.setState({keyword:search_key})
    this.props.history.push(`/web/search/${search_key}`)
  }
  componentDidUpdate()
  {
    if(this.state.keyword!=this.props.match.params.keyword)
    {
      this.setState({keyword:this.props.match.params.keyword},()=>{
            this.searchResult(this.props.match.params.keyword,()=>this.getData());
      })

    }
  }
  render()
  {
    const videolist = ((this.state.list.length>0  )&& this.state.list.map((result,index)=>{
      return <VideoList video_id={result.video_id} tag="buyer_video_list" img_url={`${result.thumbnail}`} host_url={result.host_url} title={result.title} description={result.description} video_tag={result.Premium=='0'?'Free':'Premium'} price={result.Premium=='0'?'0':result.Price}/>
    }));
    return (
<div class="top_div" id="buyer_search_list">
<div class="searchbox">
    <form onSubmit={this.searchForm}>
        <div class="inputbox">
            <input type="text" placeholder="Search Photos and Videos" Value={this.state.keyword} name="search_bar"/>
            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <div class="clearfix"></div>
    </form>
    <div class="clearfix"></div>
</div>
          <div class="features-wrap">
            {videolist}
             </div>

</div>
      );
    }
}
export default SEARCHPAGE;
