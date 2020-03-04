import React, { Component } from 'react';
import '../list_jobs/list_jobs.css';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
import {VENDOR_PAYMENT_PAGE} from '../../../../url';
import Action from '../../../../component/Action/action.js';
import ChildNavbar from '../childnavbar/childnavbar';
class VendorServiceList extends Component {
  state={
    mypayments:[],
  }
  componentDidMount()
  {
    this.getData();
  }
  getData=()=>{
    axios.post(`${VENDOR_PAYMENT_PAGE}`,{
      vendor_id:localStorage.getItem('userid')
    })
  .then(response=>{
    var result=response.data;
    if(result.success==1)
    {
      this.setState({mypayments:result.data
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render()
  {
    const serviceList=(this.state.mypayments==''?<center><div>No records Found</div></center>:this.state.mypayments.map((result,key)=>{
      return (<div class="col-xl-4 col-md-4 mb-4 top_div" style={{marginTop:'50px'}}>
                              <div class="card border-left-primary shadow h-100 py-2">
                              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>{result.head}</div>
                                <div class="card-body" ><h4>Rs.{result.price}</h4>

                                </div>
                  </div>
              </div>)
    }))
    return(
      <div style={{marginTop:'80px',minHeight:'500px'}}>
       <ChildNavbar head="Payment Overview"/>
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
