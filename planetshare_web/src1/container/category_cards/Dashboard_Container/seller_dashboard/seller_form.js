import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import StepZilla from "react-stepzilla";
import './vendor_form.css'
import Bank_Details from './bank_info/bank_info';
import Address_Details from './address_info/address_info';
import {CHECK_SELLER_STATUS} from '../../../url';
import axios from 'axios';
import Basic from './basic_info/basic_info';
const steps =
    [
      {name: 'Comapny Info', component: <Basic />},
      {name: 'Bank Details', component: <Bank_Details />},
      {name: 'Billing Details', component: <Address_Details />},
    ]
class VendorForm extends Component{
  state={
    code:null
  }
  componentDidMount()
  {
    this.getStatus();
  }
  getStatus=()=>{
    axios.post(CHECK_SELLER_STATUS,{
      user_id:localStorage.getItem('userid'),
    })
  .then(response=>{
    this.setState({code:response.data.code});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render()
  {
    if(this.state.code!=null)
    {
      if(this.state.code==0)
      {
return(
    <center><div style={{marginTop:'80px'}}>
    <div className='step-progress'>
           <StepZilla steps={steps} stepsNavigation={false} prevBtn={false} startAtStep={0}/>
       </div>
       </div></center>
     )}
     if(this.state.code==1)
     {
return(
   <center><div style={{marginTop:'80px'}}>
   <div className='step-progress'>
          <StepZilla steps={steps} stepsNavigation={false} prevBtn={false} startAtStep={1}/>
      </div>
      </div></center>
    )}
    if(this.state.code==3)
    {
return(
  <Redirect to="/dashboard/seller" />
   )}
    if(this.state.code==2)
    {
return(
  <center><div style={{marginTop:'80px'}}>
  <div className='step-progress'>
         <StepZilla steps={steps} stepsNavigation={false} prevBtn={false} startAtStep={2}/>
     </div>
     </div></center>
   )}
   }
     else {
       return(()=>this.getStatus())
     }
  }
}
export default VendorForm;
