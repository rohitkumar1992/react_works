import React,{Component} from 'react'
import {SELLER_SERVICE_COUNT} from '../../../../url.js';
import axios from 'axios';
import {Link} from "react-router-dom";
class LandingPage extends Component{
  state={
    serviceCount:true,
    data:[],
    staticdata:[{value:0,head:'Total Registered Services'},{value:0,head:'Total Pending Jobs'},{value:0,head:'Total Earnings'}]
  }
  componentDidMount()
  {
    axios.post(SELLER_SERVICE_COUNT, {
      user_id:localStorage.getItem('userid')
    })
  .then(response=>{
    if(response.data.success==2 || response.data.success=="2")
    {
      this.setState({serviceCount:false ,data:response.data.data});
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
  render()
  {
    const serviceList=(this.state.data==''?<center><div>No records Found</div></center>:this.state.data.map((result,key)=>{
      return (<div class="col-xl-4 col-md-4 mb-4 top_div" style={{marginTop:'20px'}}>
                              <div class="seller_list_card border-left-primary shadow h-100 py-2">
                              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>{result.head}</div>
                                <div class="card-body" ><h4>{result.value}</h4>

                                </div>
                  </div>
              </div>)
    }))
    const serviceList1=(this.state.staticdata.map((result,key)=>{
      return (<div class="col-xl-4 col-md-4 mb-4 top_div" style={{marginTop:'20px'}}>
                              <div class="seller_list_card border-left-primary shadow h-100 py-2">
                              <div style={{fontSize:'18px',color:'black',padding:'15px'}}>{result.head}</div>
                                <div class="card-body" ><h4>{result.value}</h4>

                                </div>
                  </div>
              </div>)
    }))
    if(this.state.serviceCount)
    {
    return(
<body>
  <div class="container-scroller">
    <div class="page-body-wrapper" style={{backgroundColor:'white'}}>
       <div class="col-12 col-md-12">
       <div><h4 style={{fontSize:'17px'}}>You are almost ready to sell your content</h4>
       <p>Please Add Your Content</p></div>
       <Link to="/dashboard/seller/upload"><button  type="button"style={{cursor:'pointer'}}  class="btn btn-lg btn-primary" >Add Content Now</button></Link>
       </div>
       <div class="gap wrapper">
     <div class="row" >
       {serviceList1}
                </div>
                </div>
       </div>
      </div>

</body>
)
}
else {
  return(
    <div style={{marginTop:'80px',minHeight:'500px'}}>
    <div class="gap wrapper">
  <div class="row" >
    {serviceList}
             </div>
             </div>
            </div>
)
}
}
}
export default LandingPage;
