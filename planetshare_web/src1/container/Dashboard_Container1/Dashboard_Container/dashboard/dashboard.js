import React, { Component } from 'react';
import './dashboard.css';
import Navbar from '../navbar/navbar';
import Sidebar from '../childnavbar/childnavbar';
import routes from "../routes";
import $ from 'jquery';
import VendorForm from '../vendor_dashboard/vendor_form.js';
import SellerForm from '../seller_dashboard/seller_form.js';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
import ChatBot from 'react-simple-chatbot';
const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};
const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];
class SellerDashboard extends Component {
  componentDidMount()
  {
    $( ".rsc-input " ).prop( "disabled", false );
    $( ".rsc-submit-button" ).prop( "disabled", false );
  }
  render()
  {
    if(localStorage.getItem('userid')!=null)
    {
    if(this.props.match.params.role=="vendordetails" || this.props.match.params.role=="sellerdetails")
    {
      return( <div><nav class="navbar navbar-expand-md navbar-light fixed-top "  style={{background:'#0c78ce'}}>
    	<div class="container" style={{height:'55px'}}>
    		<a class="navbar-brand" href="#" class="img-responsive" style={{width: "14%"}}><img src="img/PLANETSHARE-LOGO.png"/></a>
    		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    			 <span class="navbar-toggler-icon"></span>
    		</button>
    		</div>
      </nav>
      {this.props.match.params.role=="vendordetails" && <VendorForm />}
      {this.props.match.params.role=="sellerdetails" && <SellerForm />}</div>);
    }
    else {
    return(
<body>
  <div class="container-scroller">
<Navbar role={this.props.match.params.role}/>
{/*<Navbar tag="down"/>*/}
    <div class="">
        {/*<Sidebar/>*/}
       <div class="col-12 col-md-12">
       <Switch>
         {routes.map((route, idx) => {
             return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                 <route.component {...props} />
               )} />)
               : (null);
           },
         )}

       </Switch>
      </div>
      {/*<ThemeProvider theme={otherFontTheme}>
      <ChatBot steps={steps} floating="true" asMessage="true" placeholder="type the mesage"/>
  </ThemeProvider>*/}
    </div>
  </div>
</body>
)}
}
else {
  return (<Redirect to="/" />);
}
}
}
export default SellerDashboard;
