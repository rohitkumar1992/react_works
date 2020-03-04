import React, { Component } from 'react';
import './dashboard.css';
import Navbar from '../navbar/navbar';
import Sidebar from '../childnavbar/childnavbar';
import routes from "../routes";
import $ from 'jquery';
import VendorForm from '../vendor_dashboard/basic_info/basic_info';
import SellerForm from '../seller_dashboard/basic_info/basic_info';
import { ThemeProvider } from 'styled-components';
import Footer from '../../../component/footer/footer_dashboard'
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
      return( <div><nav class="navbar navbar-expand-md navbar-light fixed-top "  style={{backgroundColor:'rgb(202, 52, 100)'}}>
    	<div class="container" style={{height:'55px'}}>
    		<a class="navbar-brand" href="#" class="img-responsive" style={{width: "14%"}}><img src="img/logo.png"/></a>
    		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    			 <span class="navbar-toggler-icon"></span>
    		</button>
        <ul class="nav  navbar-right nav-dropdown ml-auto  dropdown-menu-center">
        <Link to="/web"><li style={{marginRight:'-20px'}}>
          <button class="btn btn-default btn-lg btn-link" style={{fontSize:"36px",color:'white',marginTop:'0px'}}>
            <span class="fa fa-arrow-left"></span>
          </button>
          </li></Link></ul>
    		</div>
      </nav>
      {this.props.match.params.role=="vendordetails" && <VendorForm {...this.props}/>}
      {this.props.match.params.role=="sellerdetails" && <SellerForm {...this.props}/>}</div>);
    }
    else {
    return(

  <div class="container-scroller">
<Navbar role={this.props.match.params.role}/>
{/*<Navbar tag="down"/>*/}
        {/*<Sidebar/>*/}
       <div class="col-12 col-md-12" style={{minHeight:'calc(100vh - 63px)'}}>
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
      <Footer/>
      {/*<ThemeProvider theme={otherFontTheme}>
      <ChatBot steps={steps} floating="true" asMessage="true" placeholder="type the mesage"/>
  </ThemeProvider>*/}
    </div>
)}
}
else {
  return (<Redirect to="/" />);
}
}
}
export default SellerDashboard;
