import React, { Component } from 'react';
import '../list_jobs/list_jobs.css';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
import './payment_overview.css';
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
      return (<div class="col-xl-4 col-md-6 mb-6 top_div" style={{marginTop:'50px'}}>
                              <div class="seller_card border-left-primary shadow h-100 py-2">
                              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>{result.head}</div>
                                <div class="card-body" ><p>{result.content}</p>

<h4>Rs.{result.price}</h4>

                                </div>
                  </div>
              </div>)
    }))
    return(
      <div style={{marginTop:'80px',minHeight:'500px'}}>
       <ChildNavbar head="Payment Overview"/>
        <div class="gap wrapper payment_box" style={{marginTop:'0'}}>
         <div class="row" >
          {serviceList}


            <div class="col-xl-4 col-md-6 mb-6 top_div  report_section" style={{marginTop:'50px'}}>
              <div class="seller_card border-left-primary shadow h-100 py-2">
              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>FY Report</div>
                <div class="card-body" ><p>Payments dashboard shows data only for current financial year. Refer to these annual reports for older data.</p>

                <h6>FY 2015-16 </h6>
                <Link to="#" onClick={()=>alert('Coming Soon')}> FY 2017-18.zip</Link>

                            </div>
                  </div>
              </div>

              <div class="col-xl-4 col-md-6 mb-6 top_div report_section" style={{marginTop:'50px'}}>
              <div class="seller_card border-left-primary shadow h-100 py-2">
              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>Business Report</div>
                <div class="card-body" ><p>Reports for tracking sales for Sales Tax computation and reconciling payments, for any time period.</p>


                <Link to="#" onClick={()=>alert('Coming Soon')}> View</Link>
                 </div>
                  </div>
              </div>

              <div class="col-xl-4 col-md-6 mb-6 top_div report_section" style={{marginTop:'50px'}}>
              <div class="seller_card border-left-primary shadow h-100 py-2">
              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>Commision Invoice</div>
                <div class="card-body" ><p>Download a summary of all transactions done during a month and the TDS computation for it.</p>
                  <Link to="#" onClick={()=>alert('Coming Soon')}> Download</Link>
                 </div>
                  </div>
              </div>

              <div class="col-xl-4 col-md-6 mb-6 top_div" style={{marginTop:'50px'}}>
              <div class="seller_card border-left-primary shadow h-100 py-2">
              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>When will I receive payment?</div>
                <div class="card-body" ><p>You will get your payment within 7 working days.</p>


                 </div>
                  </div>
              </div>

               </div>
               </div>
              </div>
       );
}
}
export default VendorServiceList;
