import React from 'react'
import axios from 'axios';
import {COUNTRYCODE,PARTNER_ID,USERID,TRANSCATION} from '../../url';
import Loader from '../../component/loader/ttloader';
import Authenticator from '../Authentication/Authentication'
class Transaction extends React.Component{
  state={isLoading:false,transactionData:''}
  componentDidMount()
  {
    this.getData();
  }
    getData=async ()=>{
     var formData=new FormData();
     formData.append('userid',localStorage.getItem('userid'));
     formData.append('countrycode',COUNTRYCODE);
     formData.append('partnerid',PARTNER_ID);
     let response= await axios.post(TRANSCATION,formData,{headers:{'token':localStorage.getItem('token')}});
       if(response.status=='200')
       {
           var result=response.data;

             this.setState({transactionData:result.Result})
             setTimeout(()=>this.setState({isLoading:true}),1000)
        }
       else {
         this.setState({not_found:true})
       }
   }
  render()
  {
    if(this.state.isLoading)
    {
      const {transactionData}=this.state;
      const transactionList=(transactionData.length>0?(transactionData.map((res,key)=>{
        return(  <li>
            <div class="table_row head">
              <div class="table_col">
                <p>Transaction Date</p>
              </div>
              <div class="table_col">
                <p>Order ID</p>
              </div>
              <div class="table_col">
                <p>Plan Name</p>
              </div>
            </div>
            <div class="table_row">
              <div class="table_col">
                <p>14 Nov 2019</p>
              </div>
              <div class="table_col">
                <p>435093589389034859</p>
              </div>
              <div class="table_col">
                <p>Trial pack</p>
              </div>
            </div>
            <div class="table_row head">
              <div class="table_col">
                <p>Payable Amount</p>
              </div>
              <div class="table_col">
                <p>Order Status</p>
              </div>
              <div class="table_col">
                <p>Expiry Date</p>
              </div>
            </div>
            <div class="table_row">
              <div class="table_col">
                <p>9</p>
              </div>
              <div class="table_col">
                <p>Success</p>
              </div>
              <div class="table_col">
                <p>14 Dec 2019</p>
              </div>
            </div>
          </li>)
      })):<center><h4>No Result Found</h4></center>)
    return(
      <div>
        <div class="inner_wrap">
          <div class="container">
            <h2 class="text-center">Transactions</h2>
            <div class="ticket_list">
              <ul class="transactions">
                <li>
                  <div class="table_row head">
                    <div class="table_col">
                      <p>Transaction Date</p>
                    </div>
                    <div class="table_col">
                      <p>Order ID</p>
                    </div>
                    <div class="table_col">
                      <p>Plan Name</p>
                    </div>
                  </div>
                  <div class="table_row">
                    <div class="table_col">
                      <p>14 Nov 2019</p>
                    </div>
                    <div class="table_col">
                      <p>435093589389034859</p>
                    </div>
                    <div class="table_col">
                      <p>Trial pack</p>
                    </div>
                  </div>
                  <div class="table_row head">
                    <div class="table_col">
                      <p>Payable Amount</p>
                    </div>
                    <div class="table_col">
                      <p>Order Status</p>
                    </div>
                    <div class="table_col">
                      <p>Expiry Date</p>
                    </div>
                  </div>
                  <div class="table_row">
                    <div class="table_col">
                      <p>9</p>
                    </div>
                    <div class="table_col">
                      <p>Success</p>
                    </div>
                    <div class="table_col">
                      <p>14 Dec 2019</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    )
  }
  else {
      return(<Loader />)
  }
}
}
export default Authenticator(Transaction);
