import React, { Component } from 'react';
import './myorders.css';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
import {TRANSCODE_ORDERS,DUBBED_VIDEO_DOWNLOAD} from '../../../../url';
import SearchBar from '../../../../component/searchbar/searchbar';
import Pagination from "react-js-pagination";
class DubbingOrders extends Component {
  state={
    myorders:[],
    activePage:1,
    itemsCountPerPage:1,
    totalItemsCount:1,
    pageRangeDisplayed:3,
    pageNumber:'1',
  }
  componentDidMount()
  {
    this.getData('1');
  }
  getData=(pageNumber,searchKeyword)=>{
    axios.post(`${TRANSCODE_ORDERS}?page=${pageNumber}`,{
      user_id:localStorage.getItem('userid'),
      searchKeyword:searchKeyword,
    })
  .then(response=>{
    var result=response.data;
    if(result.success==1)
    {
      this.setState({myorders:result.data.data,
        activePage:result.data.current_page,
        itemsCountPerPage:result.data.per_page,
        totalItemsCount:result.data.total,
        pageNumber:pageNumber,
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  action = (transcode_id,payment_id,status,title)=>{
    if(payment_id==null)
    {
      return(<div><Link to={`/dashboard/buyer/service/transcoding/preview/${transcode_id}`}><b style={{width:'2em',height:'2em',cursor:'pointer',color:'green'}} >Make Payment</b></Link></div>);
    }
    else
    {
      return ( status=='2'?<div>
                 <Link to={`/dashboard/buyer/service/transcoding/myorders/preview/${transcode_id}`}>
                 <i style={{width:'2em',height:'2em',cursor:'pointer',color:'black'}} class="fa fa-eye"></i></Link>
              </div>:<div>
               <i style={{width:'2em',height:'2em',cursor:'pointer',color:'red'}} class="fa fa-ban"></i></div>);
    }
  }

  searchHandler(e)
  {
    this.setState({search:e.target.value});
    this.getData('1',e.target.value);
  }
  render()
  {
    const table=(this.state.myorders==''?<tr class="table_content"><td class="width_set">No Records Found</td></tr>:this.state.myorders.map((result,key)=>{
      return (<tr class="table_content">
                <td><center><img src={`http://192.168.24.132/${result.thumbnail}`} class="table_img"/></center></td>
                <td>{result.transcode_id}</td>
                <td>{result.preset}</td>
                {result.payment_id==null && result.status=='0' && <td>Payment Pending</td>}
                {result.payment_id!=null && result.status=='0' && <td>Queued</td>}
                {result.status=='1' && <td>In Progress</td>}
                {result.status=='2' && <td>Completed</td>}
                <td>{result.created_at}</td>
                <td>{this.action(result.id,result.payment_id,result.status,result.file_name)}</td>
       </tr>)
    }))
    return(
      <div style={{marginTop:'20px'}}>
      <div class="row" >
          <div class="col-sm-12 col-md-12 ">
              <SearchBar placeholder="Search By Name,Id Or Title" clicked={this.searchHandler.bind(this)} />
          </div>
      </div>
   <div class="row">
   <div class="col-sm-12 mx-auto  col-md-12">
           <div class="table-responsive" style={{background:'white'}}>
               <table class="table table-bordered">
                 <thead style={{background:'white'}}>
                 <tr>
                 <th>Thumbnail</th>
                 <th>Transcoding Id</th>
                 <th>Preset</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Action</th>
              </tr>
       </thead>
       <tbody>
        {table}
            </tbody>
           </table>
               </div>
               </div>
               </div>

               <div class="row">
               <div class="col-lg-2 col-md-2">
               </div>
            <div class="col-lg-6 col-md-5 col-sm-12 ">

             {this.state.totalItemsCount>5 && <div class="show_entity mt-1 " style={{color:'black'}}>
               Total Records Found :&nbsp;{this.state.totalItemsCount}
             </div>}

            </div>
            <div class="col-lg-2 col-md-2 ml-4 mt-2">
            {this.state.totalItemsCount>5 && <div className="d-flex justify-content-end">
            <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.getData}
                      itemClass='page-item'
                      linkClass="page-link bold"
                    /></div>}
            </div>
            <div class="col-lg-2 col-md-3"></div>
          </div>

              </div>
       );
}
}
export default DubbingOrders;
