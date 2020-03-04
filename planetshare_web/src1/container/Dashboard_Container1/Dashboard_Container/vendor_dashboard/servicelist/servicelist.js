import React, { Component } from 'react';
import '../list_jobs/list_jobs.css';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
import {VENDOR_SERVICE_LIST,CHANGE_VENDOR_STATUS} from '../../../../url';
import SearchBar from '../../../../component/searchbar/searchbar';
import Pagination from "react-js-pagination";
import Action from '../../../../component/Action/action.js';
import ChildNavbar from '../childnavbar/childnavbar';
class VendorServiceList extends Component {
  state={
    myorders:[],
  }
  componentDidMount()
  {
    this.getData('1');
  }
  getData=(pageNumber,searchKeyword)=>{
    axios.post(`${VENDOR_SERVICE_LIST}`,{
      vendor_id:localStorage.getItem('userid'),
      searchKeyword:searchKeyword,
    })
  .then(response=>{
    var result=response.data;
    if(result.success==1)
    {
      this.setState({myorders:result.data
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  action = (id,serviceid,status,file_name,job_type)=>{
      return ( <div>
                 <Link to={`/dashboard/vendor/${job_type}/singlejob/${id}`}><i style={{width:'2em',height:'2em',cursor:'pointer',color:'green'}} class="fa fa-eye"></i></Link>
              </div>);
 // tag="services_dubb" file_name={file_name} status={payment_status}  id={dubb_id} status_change={this.statuschange.bind(this)} download_video={this.downloadVideo.bind(this)}
  }
  statuschange(status,id,service_id,job_type)
  {
       this.setState({status_change_loader:true})
    axios.post(CHANGE_VENDOR_STATUS, {
        assigned_task_id:id,
        status:status,
        job_type:job_type,
        service_id:service_id
        })
      .then(response=>{
        this.setState({statusMessage:'Status Updated',status_change_loader:false});
        this.getData(this.state.pageNumber);
      })
      .catch(function (error) {
        console.log(error);
    });
  }
  status(status)
  {
    var content='';
    if(status=='1' || status==1)
    {
      content=<b class="font-weight-bold text-primary" style={{width:'2em',height:'2em',cursor:'pointer'}} >Assigned</b>;
    }
    if(status=='2' || status==2)
    {
        content=<b class="font-weight-bold text-success" style={{width:'2em',height:'2em',cursor:'pointer'}} >Completed</b>;
    }
    if(status=='3' || status==3)
    {
        content=<b class="font-weight-bold text-warning" style={{width:'2em',height:'2em',cursor:'pointer'}} >In Progress</b>;
    }
    if(status=='4' || status==4)
    {
        content=<b class="font-weight-bold text-danger" style={{width:'2em',height:'2em',cursor:'pointer'}} >Rejected</b>;
    }
    return content;
  }
  render()
  {
    const serviceList=(this.state.myorders==''?<center><div>No records Found</div></center>:this.state.myorders.map((result,key)=>{
      return (<div class="col-xl-4 col-md-4 mb-4 top_div" style={{marginTop:'50px'}}>
                              <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body" >
                                <div class="row no-gutters align-items-center">
                                    <div class="col md-12">
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Service Name:</div><div class="col-md-4 text-uppercase"  style={{fontSize:'12px',color:'black'}}>{result.services}</div>
                                    </div>
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Service Option:</div><div class="col-md-6"  style={{fontSize:'12px',color:'black'}}>{result.serviceoption}</div></div>
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Service Price:</div><div class="col-md-6"  style={{fontSize:'12px',color:'black'}}>{result.rates}</div></div>
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Created At:</div><div class="col-md-6"  style={{fontSize:'12px',color:'black'}}>{result.created_at}</div></div>
                                    <div class="float-right"  style={{fontSize:'12px',marginTop:'20px'}}><button class="btn btn-success">Edit&nbsp;<i class="fa fa-edit"></i></button></div>
                                    </div>
                                  </div>
                                </div>
                  </div>
              </div>)
    }))
    return(
      <div style={{marginTop:'80px',minHeight:'500px'}}>
      <ChildNavbar head="Your Services"/>
      <div class="gap wrapper">
    <div class="row" >
      {serviceList}
               </div>
               </div>
              </div>
       );
}
}
export default VendorServiceList;
