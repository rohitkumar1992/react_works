import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import { ToastContainer, toast,cssTransition} from 'react-toastify';
import routes from './routes.js';
import axios from 'axios';
import {COUNTRYCODE,PARTNER_ID,USERID,LEFTMENU} from './url';
import Authenticator from './container/Authentication/Authentication'
class App extends React.Component {
  state={keyword:'',leftMenu:[]}
  componentDidMount()
  {

    if(localStorage.getItem('token')!==null)
    {
    this.getData();
    }
  }
  getData=async()=>{
    const token={headers:{token:USERID}}
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    let response=await axios.post(LEFTMENU,formData,{headers:{'token':localStorage.getItem('token')}})
          if(response.status==200)
          {
            this.setState({leftMenu:response.data.leftMenu})
          }
          else {

          }
  }
  render()
  {
  return (
    <div >
    <ToastContainer autoClose={2000}/>
    <Header {...this.props} leftMenu={this.state.leftMenu}/>
    <div style={{minHeight:'400px'}}>
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
      <Footer />
    </div>
  );
}
}
export default Authenticator(App);
