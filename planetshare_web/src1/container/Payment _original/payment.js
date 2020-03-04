import React from 'react';
import Razorpay from 'razorpay';
import axios from 'axios';
class Checkout extends React.Component{
  state = {
    payment_id:'',
    order_id:'',amount:0
  };

  constructor(props) {
    super(props)
    this.changeAmount = this.changeAmount.bind(this);
    this.openCheckout = this.openCheckout.bind(this);
    this.getdetails = this.getdetails.bind(this);
  }
  componentDidMount()
  {
    var amount=this.props.match.params.id;
    this.setState({amount:amount});
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

  openCheckout() {
  //   axios.post("https://api.razorpay.com/v1/orders",{"amount":this.state.amount/100,
  //   "currency" : 'INR',
  //   "receipt": 'Receipt20',
  //   })
  // .then(response=>{
  //   console.log(response);
  //
  //   return false;
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  var x=this.state.amount;
    let options = {
      "key": "rzp_test_hgYa6e7RNnPSJf",
      "amount": this.state.amount*100, // 2000 paise = INR 20, amount in paisa
      "currency": "INR",
      "name": "Shantanu",
      "description": "Purchase Description",
      "image": "/your_logo.png",
      "handler": function(response){
        console.log(response.razorpay_payment_id);
        alert("payment successfully");
        window.location.href='/';
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
        <button class="btn btn-success" onClick={this.openCheckout}>Pay Rs. {this.state.amount}</button>
      </div>
    )
  }
}

export default Checkout
// <input type='text' onChange={
//    this.changeAmount
//   } />
