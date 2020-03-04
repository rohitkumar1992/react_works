import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import axios from 'axios';
import {MENU_DATA,PARTNER_ID,COUNTRYCODE,USERID,LOGOUT,UUID,GET_TOKEN} from '../../url';
import Search from '../../container/search/search';
import Modal from '../../container/modal/modal';
import Authenticator from '../../container/Authentication/Authentication';
import { ToastContainer, toast,cssTransition} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Header extends React.Component
{
  state={
    menuItems:[],keyword:''
  }
  componentDidMount()
  {
    //console.log(UUID);
    this.getData();

  }
  getData=async()=>{
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    let response=await axios.post(MENU_DATA,formData,{headers:{'token':localStorage.getItem('token')}})
      if(response.status=='200')
      {
          var result=response.data;
          //localStorage.setItem('vertical_image',result.Menu.filter((data)=>data.view_type==4)[0].catID);
          this.setState({menuItems:result.Menu})
      }
      else {

      }
  }
  getToken=()=>{
    var formData1=new FormData();
    formData1.append('partnerid',PARTNER_ID);
    axios.post(GET_TOKEN,formData1).then((response)=>{
        if(response.status=='200'){
          localStorage.setItem('token',response.data.Token)
            setTimeout(()=>this.props.history.push('/'),1000)
        }
        else{
        }
      }).catch((error)=>{
        console.log(error);
      })
  }
  logOut=()=>{
    //return false;
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('countrycode',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('uuid',UUID);
    axios.post(LOGOUT,formData,{headers:{'token':localStorage.getItem('token')}}).then((response)=>{
      // if(response.data.status==0)
      // {
      toast('Logging Out Please wait',{ transition: Zoom,})
        localStorage.clear();
        this.getToken()
        setTimeout(()=>this.props.history.push('/'),1000)
      //}
    }).catch((error)=>{
      console.log(error);
    })
  }
  render()
  {
    const route_name=this.props.location.pathname.split('/')[1]
    const {menuItems}=this.state;
    // console.log(this.props);
    const MenuItems=menuItems.map((result,key)=>{
      return(<li class={`nav-item ${(route_name.length==0 && result.catName=='HOME')?'active':result.catName.replace(/\s/g,'').toLowerCase()==route_name?'active':''}`}>
          <Link to={`/${(result.catName.replace(/\s/g,'')).toLowerCase()}/${result.catID}`}  class="nav-link" >{result.catName.charAt(0).toUpperCase() + result.catName.slice(1).toLowerCase()} </Link>
      </li>);
    })
    return(<header class="home_header">
          <div class="header-top">
              <div class="row">
              <div class="col-md-3 col-lg-2 col-sm-4">
                  <div class="logo">
                      <Link to="/"><img src="images/logo.png" alt="" /></Link>
                  </div>
              </div>
              <div class="col-md-9 col-lg-10 col-sm-8">
                  <nav class="navbar navbar-expand-lg">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                          <span class="navbar-toggler-icon"></span>
                          <span class="navbar-toggler-icon"></span>
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="menu_div">
                          <ul class="navbar-nav f collapse navbar-collapse" id="collapsibleNavbar">
                                  {/* <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="Javascript:;" data-toggle="dropdown">Images</a>
                                      <div class="dropdown-menu">
                                          <a class="dropdown-item" href="javascript:;">Photos</a>
                                          <a class="dropdown-item" href="javascript:;">Vendor</a>
                                      </div>
                                  </li>*/}
                                  {MenuItems}

                              </ul>
                              <ul class="navbar-nav float-right">
                               <Search {...this.props} />
                               {localStorage.getItem('userid')==null && <li class="nav-item">
                                  <Modal  modalIsOpen="true" openUrl="loginModal" />
                                   {/*<a class="nav-link" data-toggle="modal" data-target="#login_form" href="javascript:;">Login</a>*/}
                               </li>}
                               {localStorage.getItem('userid')!=null && <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle" href="Javascript:;" data-toggle="dropdown"><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                   <div class="dropdown-menu">
                                      {this.props.leftMenu.length>0 && this.props.leftMenu.map((result,key)=>{
                                        return(<Link to={`/${(result.catName.replace(/\s/g,'')).toLowerCase()}`}><a class="dropdown-item" href="javascript:;" ><img src={result.menu_icon} />{result.catName.charAt(0).toUpperCase() + result.catName.slice(1).toLowerCase()}</a></Link>)
                                      })}
                                       <a class="dropdown-item" href="javascript:;" onClick={()=>{this.props.history.push(`/kog_user/profile/user${USERID}`)}}><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
                                      <a class="dropdown-item" href="javascript:;" onClick={()=>{this.props.history.push('/collection')}}><i class="fa fa-hand-lizard-o" aria-hidden="true"></i> My Collection</a>
                                       <a class="dropdown-item" href="javascript:;" onClick={()=>this.logOut()}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                                   </div>
                               </li>}
                           </ul>

                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}
export default Authenticator(Header);
