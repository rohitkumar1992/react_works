import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './container/Navbar/navbar';
import Services from './container/services/services';
import Banner from './container/banner/banner';
import Footer from './component/footer/footer';
// import Features from './component/features/features';
import Service_url from './container/service_url/service_url';
import Login_Signup_Modal from './container/login_signup/login_signup';
import {USER_CART} from './url';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
import routes from './routes.js';
import Seller from './container/Dashboard_Container/dashboard/dashboard.js';
class App extends Component {
  state={
    cartvalue:0,
    showBagButton:false
  }
  componentDidMount()
  {
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    var value=localStorage.getItem('cartvalue');
    this.setState({cartvalue:value});
  }
  cart(dubb,tag,trans,video_id)
  {
    var arr=[];
    arr[0]=dubb;
    arr[1]=tag;
    arr[2]=trans;
    console.log(JSON.stringify(arr));
        // console.log(tag);
    var statevalue=+this.state.cartvalue + +1;
    localStorage.setItem('cartvalue',statevalue);
    var x=localStorage.getItem('cartvalue');
    this.setState({cartvalue:x,showBagButton:true})
    axios.post(USER_CART,{
      desc:JSON.stringify(arr),
      video_id:video_id,
      user_id:'5'
    })
  .then(response=>{
      console.log(response);
    })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    return (
      <body class="has-animations top_div">
          <Navbar title={localStorage.getItem('username')} cartvalue={this.state.cartvalue}/>

          <Switch>
            {routes.map((route, idx) => {
                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} click={this.cart.bind(this)} showBagButton={this.state.showBagButton}/>
                  )} />)
                  : (null);
              },
            )}
          </Switch>
          <Login_Signup_Modal />
          <Footer />
      </body>
    );
  }
}

export default App;
// is-revealing
                  //
                  // <div class="row  p-3 mb-2 mt-4 shadow-top-bottom">
  							  //   <div class="feature-extended">
  								// <div class="col-12 col-md-6 col-lg-6">
  								// <div class="feature-extended-image is-revealing " data-sr-id="9"style={{visibility:"visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s"}}>
  								// 	<img src="img/all-img/feature-extended-02.svg" alt="Feature extended 02" />
  								// </div>
  								// </div>
  								// <div class="col-12 col-md-6 col-lg-6">
  								// <div class=" is-revealing" data-sr-id="12" style={{visibility:"visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s"}}>
  								//      <h3 class="mt-0 features-heading">Streaming Services</h3>
  								// 	 <h5 class="mt-0 features-sub-heading">Live streaming without limits, Reach your audience everywhere</h5>
  								// 	 <p class="mb-0 features-para">Nisi porta lorem mollis aliquam ut. Ac tincidunt vitae semper quis lectus nulla at volutpat. Est ultricies integer quis auctor elit sed.</p>
  								//      <div class="row">
  	              //                    <div class="col-sm-3 offset-md-3 mt-4 ">
  								//        <button type="button" class="btn btn-warning  btn-banner btn-blue-features box-shadow">Get started</button>
  							  //    	 </div>
  							  //    	 </div>
  							  //   </div>
  							  //   </div>
                  //
  								// </div>
  							  //   </div>
