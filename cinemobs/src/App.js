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
import {COUNTRYCODE,PARTNER_ID,LEFTMENU} from './url';
import Authenticator from './container/Authentication/Authentication';
import  nacl from 'tweetnacl'
import utils from'tweetnacl-util'
class App extends React.Component {
  state={keyword:'',leftMenu:[]}
  componentDidMount()
  {
//     const encodeBase64 = utils.encodeBase64
// // Our nonce must be a 24 bytes Buffer (or Uint8Array)
// const nonce = nacl.randomBytes(24)
// // Our secret key must be a 32 bytes Buffer (or Uint8Array)
// const secretKey = Buffer.from('useonlymysecretkeyonplanetcast17', 'utf8')
// // Make sure your data is also a Buffer of Uint8Array
// const secretData = Buffer.from('Shantanu12', 'utf8')
// const encrypted = nacl.secretbox(secretData, nonce, secretKey)
// // We can now store our encrypted result and our nonce somewhere
// const result = `${encodeBase64(nonce)}:${encodeBase64(encrypted)}`
// console.log(result);
    if(localStorage.getItem('token')!==null)
    {
  //  this.getData();
    }
  }
  getData=async()=>{
    var formData=new FormData();
    formData.append('userid',localStorage.getItem('userid'));
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
