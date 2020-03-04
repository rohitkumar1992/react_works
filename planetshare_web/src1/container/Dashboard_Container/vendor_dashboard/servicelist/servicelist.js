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
          request_coming_from:'web'
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
  render()
  {
    const service_list_details=(this.state.myorders!='' && this.state.myorders .map((result,key)=>{
      return(
        <div class="col-xl-4 col-md-4" >
                            <Link to={`/dashboard/vendor/${result.services}/details`}>  <div class=" border-left-primary shadow h-100 py-2">
                          <a href="#"><div class="card-body m-4">
                                <div class="row no-gutters align-items-center">
                                  <div class="col mr-2">
                                      <div class="mb-0  text-uppercase" style={{color:'black'}}>{result.services}</div>

                                  </div>
                                  <div class="col-auto">
                                    <i class="fa fa-eye fa-2x text-gray-300" style={{color:"#27a9e3"}}></i>
                                  </div>
                                </div>
                              </div></a>
                            </div></Link>
                          </div>)
    }))

    return(
      <div style={{marginTop:'60px',minHeight:'500px'}}>
      <ChildNavbar head="Your Services"/>
      <div class="gap wrapper" style={{marginTop:'20px'}}>
    <div class="row" >
      {service_list_details}
               </div>
               {this.state.myorders.length<=0 && <center><div class="no_record_function">
                       <h4>No Record Found</h4>
                        </div></center>}
               </div>
              </div>
       );
}
}
export default VendorServiceList;
