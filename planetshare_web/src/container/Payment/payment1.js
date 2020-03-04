import React from 'react';
import Razorpay from 'razorpay';
import axios from 'axios';
import  {Redirect} from 'react-router-dom';
import {PAYMENT} from '../../url'
class Checkout extends React.Component{
  state = {
    payment_id:'',
    order_id:'',amount:0,
    id:''
  };

  constructor(props) {
    super(props)
    this.changeAmount = this.changeAmount.bind(this);
    this.openCheckout = this.openCheckout.bind(this);
    this.getdetails = this.getdetails.bind(this);
  }
  componentDidMount()
  {
    var data=this.props.location.data;
    if(data==null)
    {
        this.props.history.push('/dashboard/buyer/service/dubbing/myorders');
    }
    else {
    var amount=data.price;
    var redirect=data.link;
    this.setState({amount:amount,id:data.id});
    if(redirect=="dubbing")
    {
      this.openCheckout(amount,data.id,'dubbing','/dashboard/buyer/service/dubbing/myorders');
    }
    if(redirect=="transcoding")
    {
      this.openCheckout(amount,data.id,'transcoding','/dashboard/buyer/service/transcoding/myorders');
    }
    if(redirect=="subtitling")
    {
      this.openCheckout(amount,data.id,'subtitling','/dashboard/buyer/service/subtitling/myorders');
    }
    if(redirect=="tagging")
    {
      this.openCheckout(amount,data.id,'tagging','/dashboard/buyer/service/tagging/myorders');
    }
    }
  }
  getdetails=(id)=>
  {
    axios.post(`https://api.razorpay.com/v1/payments/:${id}`,{
    })
  .then(response=>{
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  changeAmount(e) {
    this.setState({amount: e.target.value})
  }
  sendPaymentId=(paymentId)=>{
    alert(paymentId);
  }
  openCheckout=(amount,req_id,tag,redirect_url)=>{
    // var amounts=Math.round(amount)*100;
    // alert(amounts);
  var x=this.state.amount;
    let options = {
      "key": "rzp_test_hgYa6e7RNnPSJf",
      "amount": Math.round(amount*100), // 2000 paise = INR 20, amount in paisa
      "currency": "INR",
      "name": "Shantanu",
      "description": "Purchase Description",
      "image": "/your_logo.png",
      "handler": function(response){
        console.log(response.razorpay_payment_id);
          axios.post(PAYMENT,
        {id:req_id,tag:tag,payment_id:response.razorpay_payment_id})
        .then(response=>{
          if(response.data.success==1)
          {
            window.location.href='#'+redirect_url+'';
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        // window.location.href='/';
        let data = {
          "key": "rzp_test_hgYa6e7RNnPSJf",
          "amount":"500", // 2000 paise = INR 20, amount in paisa
          "hostUrl":`https://api.razorpay.com/v1/payments/${response.razorpay_payment_id}/capture`
        }
      //   axios.post(`https://api.razorpay.com/v1/payments/${response.razorpay_payment_id}/capture`,
      // {key_id:'rzp_test_hgYa6e7RNnPSJf',amount:x,checkcookie:1})
      // .then(response=>{
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
            },
      "prefill": {
        "name": "Shantanu Gupta",
        "email": "shaang616@gmail.com",
        "contact":"9654636775"
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#3583D2"
      }
    };

    let rzp =new window.Razorpay(options); rzp.open();
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default Checkout
// <input type='text' onChange={
//    this.changeAmount
//   } />
