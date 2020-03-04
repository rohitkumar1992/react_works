import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import routes from './routes.js';
import axios from 'axios';
import Login from './container/Login/login';
import Authenticator from './container/Authentication/Authentication'
import {COUNTRYCODE,PARTNER_ID,USERID,LEFTMENU} from './url';
import { ToastContainer, toast,cssTransition} from 'react-toastify';
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
    <div style={{minHeight:'500px'}}>
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
// const HomeData=homeData.map((result,key)=>{
//   if(result.search_tag.length>0)
//   {
//       return(result.image_type=='v'?<Vertical_Banner result={result} route_name="Home" img_disp="v"/>:<Horizontal_Banner result={result} route_name="Home" img_disp="h"/>)
//     }
//     })
