import React, { Component } from 'react';
import './list_jobs.css';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
import {LIST_VENDOR_JOBS,VENDOR_VIDEO_DOWNLOAD,CHANGE_VENDOR_STATUS} from '../../../../url';
import SearchBar from '../../../../component/searchbar/searchbar';
import Pagination from "react-js-pagination";
import Action from '../../../../component/Action/action.js';
class VendorJobList extends Component {
  state={
    myorders:[],
    activePage:1,
    itemsCountPerPage:1,
    totalItemsCount:1,
    pageRangeDisplayed:3,
    pageNumber:'1',
    textArea:'',
    id:'',
serviceid:'',
job_type:''
  }
  componentDidMount()
  {
    this.getData('1');
  }
  openNav=(status,id,serviceid,jobtype)=> {
  document.getElementById("myNav").style.height = "30%";
  this.setState({id:id,serviceid:serviceid,job_type:jobtype});
  }

  closeNav=()=> {
  document.getElementById("myNav").style.height = "0%";
  }
  getData=(pageNumber,searchKeyword)=>{
    axios.post(`${LIST_VENDOR_JOBS}?page=${pageNumber}`,{
      vendor_id:localStorage.getItem('userid'),
      searchKeyword:searchKeyword,
    })
  .then(response=>{
    var result=response.data;
    if(result.success==1)
    {
      this.setState({myorders:result.data,
        activePage:result.current_page,
        itemsCountPerPage:result.per_page,
        totalItemsCount:result.total,
        pageNumber:pageNumber,
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  action = (id,serviceid,status,file_name,job_type)=>{
      return ( <div>
                 {job_type!="transcoding" && <Link to={`/dashboard/vendor/${job_type}/singlejob/${id}`}><i style={{width:'2em',height:'2em',cursor:'pointer',color:'green'}} class="fa fa-eye"></i></Link>}
                    {job_type!="transcoding" && <i style={{marginTop:'-7px',position:'absolute'}}><Action tag="vendor_services" id={id} job_type={job_type} file_name={file_name} serviceid={serviceid} status={status} download_video={this.downloadVideo.bind(this)}  status_change={this.statuschange.bind(this)} openNav={this.openNav.bind(this)} closeNav={this.closeNav.bind(this)}/></i>}
                    {job_type=="transcoding" && <i style={{marginTop:'-10px',position:'absolute'}}><Action tag="vendor_services" id={id} job_type={job_type} file_name={file_name} serviceid={serviceid} status={status} download_video={this.downloadVideo.bind(this)}  status_change={this.statuschange.bind(this)}/></i>}
              </div>);
 // tag="services_dubb" file_name={file_name} status={payment_status}  id={dubb_id} status_change={this.statuschange.bind(this)} download_video={this.downloadVideo.bind(this)}
  }
  downloadVideo=(service_id,title,job_type)=>
  {
    axios({
      url: VENDOR_VIDEO_DOWNLOAD, //your url
      method: 'POST',
      responseType: 'blob', // important
      data:{service_id:service_id,job_type:job_type},
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', title); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }
  statuschange(status,id,service_id,job_type,reason)
  {
    console.log('hi');
       this.setState({status_change_loader:true})
    axios.post(CHANGE_VENDOR_STATUS, {
        assigned_task_id:id,
        status:status,
        job_type:job_type,
        reason:reason,
        service_id:service_id
        })
      .then(response=>{
        this.setState({statusMessage:'Status Updated',status_change_loader:false});
        this.getData(this.state.pageNumber);
        document.getElementById("myNav").style.height = "0%";
      })
      .catch(function (error) {
        console.log(error);
    });
  }
  searchHandler(e)
  {
    this.setState({search:e.target.value});
    this.getData('1',e.target.value);
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
    //console.log(this.state.textArea);
    const table=(this.state.myorders==''?<tr><td colspan="5"> No Jobs Found</td></tr>:this.state.myorders.map((result,key)=>{
      return (<tr class="table_content">
                <td>{result.jobid}</td>
                <td class="text-uppercase">{result.job_type}</td>
                <td>{this.status(result.status)}</td>
                <td>{result.created_at}</td>
                <td>{this.action(result.id,result.serviceId,result.status,result.file_name,result.job_type)}</td>
       </tr>)
    }))
    return(
      <div  class="list_jobs" style={{marginTop:'80px',minHeight:'500px'}}>
        <div class="container">
          <div class="row" >
              {/*<div class="col-sm-12 col-md-12 ">
                  <SearchBar placeholder="Search By Name,Id Or Title" clicked={this.searchHandler.bind(this)} />
              </div>*/}
          </div>
          <div class="row">
            <div id="myNav" class="overlay">
              <a href="javascript:void(0)" class="closebtn" onClick={()=>this.closeNav()}>&times;</a>
              <div class="overlay-content1">
                 <div class="form-group">
                   <h6 for="comment">Justify The Reason For Rejection:</h6>
                   <textarea class="form-control" rows="5" id="comment" name="reason" onChange={(e)=>this.setState({textArea:e.target.value})}></textarea>
                 </div>
                 <button type="button" class="btn btn-primary" onClick={()=>this.statuschange('4',this.state.id,this.state.serviceid,this.state.job_type,this.state.textArea)}>Submit</button>
              </div>
            </div >
            <div class="col-sm-12 mx-auto  col-md-12">
             <div class="table-responsive" style={{background:'white'}}>
                 <table class="table table-bordered">
                   <thead style={{background:'white'}}>
                    <tr>
                      <th>Job Id</th>
                      <th>Job Type</th>
                      <th>Status</th>
                      <th>Assigned At</th>
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
            <div class="col-lg-2 col-md-2"></div>
              <div class="col-lg-6 col-md-5 col-sm-12 ">
                {this.state.totalItemsCount>5 && <div class="show_entity mt-1 " style={{color:'black'}}>
                 Total Records Found :&nbsp;{this.state.totalItemsCount}
                 </div>}
              </div>
              <div class="col-lg-2 col-md-2 ml-4 mt-2">
                <div className="d-flex justify-content-end">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.getData}
                    itemClass='page-item'
                    linkClass="page-link bold"
                  />
                </div>
              </div>
              <div class="col-lg-2 col-md-3"></div>
          </div>
        </div>
      </div>
       );
}
}
export default VendorJobList;
