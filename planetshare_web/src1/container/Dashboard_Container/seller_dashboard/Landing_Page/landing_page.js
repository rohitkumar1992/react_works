import React,{Component} from 'react'
import {SELLER_SERVICE_COUNT,SELLER_SERVICE_REQUEST_ANALYTICS} from '../../../../url.js';
import axios from 'axios';
import {Link,Redirect} from "react-router-dom";
import './landing_page.css'
import {Chart,Doghnut} from 'primereact/chart';
import GoogleMapReact from 'google-map-react';
class LandingPage extends Component{
  state={
    data:[],
      data:[],
      center: {
        lat: 59.95,
        lng: 30.33,seller_bank:0
      },
      zoom: 11,
      req_jobs_value:[0,0,0,1],req_jobs_labels:["Total Uploaded Videos","Total Active Videos","Total Inactive Videos","No Record Found"],
    staticdata:[{value:0,head:'Total uploaded Videos'},{value:0,head:'Total Active Videos'},{value:0,head:'Total Inactive Videos'}]
  }
  componentDidMount()
  {
    axios.post(SELLER_SERVICE_COUNT, {
      user_id:localStorage.getItem('userid')
    })
  .then(response=>{
    if(response.data.success==1 || response.data.success=="1")
    {
      this.setState({seller_bank:response.data.seller_bank});
    }
    if(response.data.success==2 || response.data.success=="2")
    {
      this.setState({staticdata:response.data.data,seller_bank:response.data.seller_bank});
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  axios.post(SELLER_SERVICE_REQUEST_ANALYTICS, {
    seller_id:localStorage.getItem('userid')
  })
.then(response=>{
  if(response.data.success==1 || response.data.success=="1")
  {
    if(response.data.value[0]>0 || response.data.value[1]>0 || response.data.value[2]>0)
    {
        this.setState({req_jobs_value:response.data.value ,req_jobs_labels:response.data.label});
    }
  }
})
.catch(function (error) {
  console.log(error);
});
}
  render()
  {
      const data = {
                labels:this.state.req_jobs_labels,
                datasets: [
                    {
                        data:this.state.req_jobs_value,
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            '#4bc7cf',
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            '#4bc7cf',
                        ]
                    }]
                };

                  const serviceList1=(this.state.staticdata.map((result,key)=>{
                    return (<div class="card_list">
                            <h6>{result.head}</h6>
                            <h4>{result.value}</h4>

                            </div>)
                  }))
                  const default_name="Guest"
                  const fullName = localStorage.getItem('Name')==null?default_name:localStorage.getItem('Name').split(' ');
                    const firstName = localStorage.getItem('Name')==null?default_name:fullName[0];
                    if(localStorage.getItem('seller_status')!=null)
                    {
                    return(
                <body>
                  <div class="container-scroller">
                    <div class="page-body-wrapper" style={{backgroundColor:'white'}}>
                       <div class="col-12 col-md-12 ">

                       <div class="gap wrapper">
                {localStorage.getItem('seller_status')==1 && <div class="alert alert-primary" role="alert">
                    Please Upload Your Bank Details &nbsp;<Link to="/dashboard/seller/addbankdetails"  class="alert-link">Click here</Link>
                  </div>}
                {/*
                     <div class="row" >
                     <div class="col-md-4 col-sm-4 mb-4 top_div" style={{marginTop:'20px'}}>
                       <div class="seller_list_card border-left-primary shadow h-100 py-2">
                       <div  class="row">
                        <div class="col-md-6 card-body " style={{textAlign:'center'}}>
                        <img src="img/user.png" style=
              {{height:"50px",width:'50px',padding:'5px',marginLeft:'35%'}} /><h7>Hi Shantanu</h7>
              </div>
                          <div class="col-md-6">
                          <div class="card-body" >
                          <div class="clearfix">
                            <div class="c100 p100 small">
                                <span>100%</span>
                                <div class="slice">
                                    <div class="bar"></div>
                                    <div class="fill"></div>
                                </div>
                            </div>
                        </div>
                        <h4 style={{fontSize:'12px'}}> Profile  percentage</h4>
                          </div>
                          </div>
                          </div>
                                 </div>
                             </div>
                       {serviceList1}
                                </div>
              */}
              <div class="row card_section">
              <div class="col-md-6 col-sm-12 col-lg-6 col-xl-3 left_card">

              {serviceList1}



              </div>

              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 right_card">
              <div class="card_list start_service">
              <div class="add_ser_now"><h4 style={{fontSize:'17px'}}>You are almost ready
     to upload your content</h4>
           <Link to="/dashboard/seller/upload"><button  type="button"style=
     {{cursor:'pointer'}}  class="btn btn-lg btn-primary" >Upload Now</button>
     </Link>
              </div>
              </div>
              <div class="card_list circle_list ">
                            <div class="c100 p100 large ">
                                {localStorage.getItem('seller_status')==0 && <span>100%</span>}
                                {localStorage.getItem('seller_status')==1 && <span>80%</span>}
                                <div class="slice">
                                    <div class="bar"></div>
                                    <div class="fill"></div>
                                </div>
                                <h4>Profile Percentage </h4>
                            </div>

                        <div class="user_list">
                         <i class="fa fa-user-circle-o"></i>
                          <p>Hi  {firstName}  </p>


                            <ul>
                            <li> <i class="fa fa-building-o" aria-hidden="true"></i> Company info
              </li>
                            <li><i class="fa fa-university" aria-hidden="true"></i>  Bank Details
              </li>
                            <li> <i class="fa fa-files-o" aria-hidden="true"></i> Billing Details
              </li>
                            </ul>
              </div>
               </div>




              </div>


              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5 right_card">

              <div class="card_list vendor_analytics_card">
              <Chart type="pie" data={data} />
              </div>



              </div>



              </div>




                 </div>



                       </div>
                      </div>

                          </div>
                </body>
                )
              }
              else {
                return (<Redirect to="/dashboard/sellerdetails"/>)
              }

  }
  }
  export default LandingPage;
