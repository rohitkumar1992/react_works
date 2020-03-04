import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,BIDIDDATA,USERID,HEADER,MAKEOFFERLIST,toUpperCaseFilter} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import Loader from '../../Component/Loader/loader';
import ReactJWPlayer from 'react-jw-player';
import Pagination from "react-js-pagination";
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
import axios from 'axios';
import Moment from 'react-moment';
import $ from 'jquery';
class VendorInfo extends Component {
  state={
    isLoading:false,bid_list:[],
    currentPage:1,
       total:1,itemsCountPerPage:10,pageRangeDisplayed:3,
    bid_id:0,bid_info:[],isLoading:false,language_list:[]
}
  componentDidMount()
  {
    this.setState({bid_id:this.props.match.params.bid_id},function(){  this.getData(1,'');});
  }
  getIdData=()=>{
    axios.post(BIDIDDATA,{
      'tag':'dash',
      'user_id':USERID,
      'bid_id':this.state.bid_id,
      'status_type':"dash"
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data;
          this.setState({bid_info:response.data,language_list:response.language});
        }
    }).catch((error)=>{

    })
  }
  getData=(page,keyword)=>{
    axios.post(`${MAKEOFFERLIST}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'user_id':USERID,
      'searchKeyword':keyword,
      'bid_id':this.state.bid_id
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.getIdData();
          this.setState({currentPage:response.current_page,total:response.total,bid_list:response.data});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
    }).catch((error)=>{

    })
  }
  componentDidUpdate()
  {
    if(this.state.bid_id!=this.props.match.params.bid_id)
    {
      this.setState({bid_id:this.props.match.params.bid_id,isLoading:false},function()
    {
      this.getIdData();
    })
    }
  }
  status=(Id,status)=>{
    var name="";
    if(status==1)
    {
      name="Accepted";
    }
    if(status==2)
    {
      name="Rejected";
    }
    if(status==0)
    {
      name="Pending";
    }
      return( <div class="status_btn">
              <button type="button" className={`btn ${status==1?'btn-success':'btn-danger'} btn-sm`}>{name}</button>
            </div>);
  }
  render() {
    const {bid_info,isLoading,language_list,bid_list}=this.state;
    const tableContent=(bid_list.length>0?bid_list.map((res,key)=>{
      return(<tr key={key} ><td>{res.request_id}</td>
                <td>{res.user_price}</td>
                <td>{res.base_price}</td>
                <td>{res.l_period.type}</td>
                <td>{res.rights.type}</td>
                <td><Moment filter={toUpperCaseFilter} element="span"  format="DD/MM/YYYY HH:mm" add={{hours:5.5}}>{res.created_at}</Moment></td>
                <td>{this.status(res.id,res.status)}</td></tr>)
    }):<tr>
        <td colspan="6"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="Bid Content Information"/>
          <div class="vd_info_desc">
            <div class="box l">
              <div class="img_box">
                <img src={bid_info.poster_url} alt="" />
              </div>
              <div class="vd_b">
                <ReactJWPlayer
                style={{backgroundColor:'grey'}}
                ref={(ref) => { this.player = ref }}
                playerId='jw-player'
                image={`${bid_info.poster_url}`}
                playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                file={bid_info.video_url}
                aspectRatio="16:9"
                isAutoPlay={true}
                controls={true}
                repeat="true"
                  customProps={{
                    controls: true,
                    repeat: true,
                    stretching: 'fill',
                    preload: 'auto',
                    volume: 100,
                    width: '100%',
                    height: '100%',
                }}
                />
              </div>
            </div>
            <div class="box r">
              <ul class="vd_info_list">
                <li>
                  <p><span>Title :</span> <span class="vl">{bid_info.main_title.title}</span></p>
                </li>
                <li>
                  <p><span>Seller name :</span> <span class="vl">{bid_info.get_sellerdata.display_name}</span></p>
                </li>
                <li>
                  <p><span>Production Studio :</span> <span class="vl">{bid_info.production_studios}</span></p>
                </li>
                {bid_info.alternate_title[0].title!=null && <li>
                <p >
                <span >Alternate Title :</span>
                {bid_info.alternate_title.map((res,key)=>{
                  return( <span class="vl" key={key}>{res.title}</span>)
                })}
                  </p>
                </li>}
                <li>
                  <p><span>Censorship Rating :</span>
                  <span class="vl">{bid_info.censorship_rating}
                  </span></p>
                </li>
                <li>
                  <p><span>Type</span> <span class="vl">{bid_info.bid_type.type}</span></p>
                </li>
                <li>
                  <p><span>Duration(in minutes) :</span> <span class="vl">{bid_info.bid_type.run_time}</span></p>
                </li>
                <li>
                  <p><span>Quality :</span>
                  {bid_info.bid_type.quality.map((res,key)=>{
                    return(<span class="vl">{res}</span>)
                  })}</p>
                </li>
                <li>
                  <p><span>Episodes :</span> <span class="vl">{bid_info.bid_type.episodes}</span></p>
                </li>
                <li>
                  <p><span>Seasons :</span> <span class="vl">{bid_info.bid_type.seasons}</span></p>
                </li>
                {bid_info.dubbing_languages!=null && <li>
                  <p><span>Dubbing Languages :</span>
                  {bid_info.dubbing_languages.split(',').map((res,key)=>{
                    let data=language_list.filter((data)=>{return data.id==res})
                    return(
                      <span class="vl" key={key}>{data[0].lang_name}</span>)
                  })}
                  </p>
                </li>}
                {bid_info.subtitle_languages!=null && <li>
                  <p><span>Subtitling Languages :</span>
                  {bid_info.subtitle_languages.split(',').map((res,key)=>{
                    let data=language_list.filter((data)=>{return data.id==res})
                    return(
                      <span class="vl" key={key}>{data[0].lang_name}</span>)
                  })}
                  </p>
                </li>}
                {bid_info.languages!=null && <li>
                  <p><span>Languages :</span>
                  {bid_info.languages.split(',').map((res,key)=>{
                    let data=language_list.filter((data)=>{return data.id==res})
                    return(
                      <span class="vl" key={key}>{data[0].lang_name}</span>)
                  })}
                  </p>
                </li>}
                {bid_info.box_office_price!=null && <li>
                  <p><span>Box Office Price :</span> <span class="vl"><i className={bid_info.box_office_price.currency=="USD"?"fa fa-usd":"fa fa-inr"}></i>&nbsp;{bid_info.box_office_price.price}</span></p>
                </li>}
                <li class="fw">
                <p >
                <span >Synopsis :</span>
                {bid_info.synopsis.map((res,key)=>{
                  return( <span class="vl" key={key}>{res.title}</span>)
                })}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <br/>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Offer Id</th>
                  <th>Price</th>
                  <th>Base Price</th>
                  <th>License Period</th>
                  <th>Rights</th>
                  <th>Created At</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {tableContent}

              </tbody>
            </table>
            <Pagination
                      activePage={this.state.currentPage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.total}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.getData}
                      itemClass='page-item'
                      linkClass="page-link bold"
                    />
          </div>
        </div>
      </div>
    );
  }
  else {
    return(<div id="content"><Loader/></div>);
  }
  }
}

export default Authentication(VendorInfo);
