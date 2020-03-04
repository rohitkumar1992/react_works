import React, { Component } from 'react';
import NavLink from '../../component/navlink';
import Modal from '../../component/modal/modal';
import axios from 'axios';
import {BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import {VIDEO_SEARCH,LOGOUT} from '../../url.js';
import $ from 'jquery';
import LoadingBar from 'react-top-loading-bar'
import './navbar.css';
import Login from '../login_signup/login';
import Signup from '../login_signup/signup';
class Navbar extends Component {
  state={
    show:false,
    searchList:[],
    searchShow:false,
    searchKeyword:'',
    hideSearch:true,
     loadingBarProgress: 0,
     links:[
       {
         name:"Services",
         child:[{
           name:"Transcoding",
           url:"transcoding",
            icons:'fa fa-video-camera'
         },{
           name:"Dubbing",
           url:"dubbing",
            icons:'fa fa-microphone'
         },
         {
           name:"Auto Tagging",
           url:"tagging",
            icons:'fa fa-tag'
         },{
           name:"Subtitling & Caption",
           url:"subtitling",
            icons:'fa fa-vcard-o'
         },{
           name:"Streaming",
           url:"streaming",
           icons:'fa fa-film'
         },
         {
           name:"Archiving",
           url:"archieving",
            icons:'fa fa-archive'
         }]
       },
     ]
   }
  componentDidMount()
  {
$('ul.nav li.dropdown').click(function(){
     $(this).parents('.dropdown-menu').stop(true,
true).delay(200).fadeOut(500);
});

  }
  openNav=()=> {
document.getElementById("myNav").style.height = "100%";
}

closeNav=()=> {
document.getElementById("myNav").style.height = "0%";
}

  complete = () => {
    this.setState({ loadingBarProgress: 100 });
  }
  openmodal=()=>
  {
    this.setState({show:true});
  }
  logout=()=>
  {
    axios.post(LOGOUT,{

    })
  .then(response=>{
    if(response.data.success=="1" || response.data.success==1){
      localStorage.clear();
      // this.props.history.push('/web');
        window.location.href="/"
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  searchresult=()=>{
    // alert('hi');
  }
  searchResult=(e)=>{
    var keyword=e.target.value;
    axios.post(VIDEO_SEARCH,{
      searchKeyword:keyword
    })
  .then(response=>{
    if(response.data.success=='1')
    {
      this.setState({searchShow:true,searchList:response.data.data,searchKeyword:keyword})
    }
    if(response.data.success=='0')
    {
      this.setState({searchShow:false,searchList:''})
    }
    //       console.log(response.data.data);
    //       var data=response.data.data;
    //       console.log(data.length);
    //       var html='<div><ul>';
    //       for(var i=0;i<2;i++)
    //       {
    //         var s=i+1;
    //         html+='<li style="background-color:white; list-style: none; cursor:pointer" class="p-2" onclick="searchresult()"><div class="row"><div class="col-md-5"><img src="/img/all-img/test'+s+'.jpg" width="150px" height="220px" class="bx-shdw-srch-img"></div><div class="col-md-7 pt-0 border-bottom right8"> <h6 class="p-0 mt-1" style="line-height:0">Heading Title</h6><p class="pt-1">'+data[i].title+'</p></div></div></li>'
    //       }
    //       html+='</ul></div>';
    //       $('#search_data').html(html);
    // }
    // if(response.data.success=='0')
    // {
    //   $('#search_data').html('');
    // }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  onLoaderFinished = () => {
   this.setState({ loadingBarProgress: 0 })
 }
// ss=()=>{
//   $('html, body').animate({
//           scrollTop: $("#scroll_div").offset().top
//       }, 1000);
// }
  render() {

    const route_data=this.props.location.pathname.split('/');
    var navLink_color="white"
    var header="fixed-top"
    var header_color='rgba(202,52,100,1)'
    if(route_data.length==2 && route_data[1]=='web')
    {
       navLink_color="white"
       // header='';
       header_color=''
    }
    const Links=this.state.links.map((result)=>{
      return (result.child==''?<NavLink name={result.name} url={result.url} clicked={this.complete} navLink_color={navLink_color} />:<NavLink name={result.name} url={result.url} child={result.child} clicked={this.complete} navLink_color={navLink_color}/>
    );})
    return (
    <nav class={`navbar navbar-expand-lg navbar-dark fixed-top`} id="banner" style={{backgroundColor:header_color}}>
      <LoadingBar
         progress={this.state.loadingBarProgress}
         height={3}
         color="red"
         onLoaderFinished={() => this.onLoaderFinished()}
       />
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onClick={()=>this.closeNav()}>&times;</a>
      <div >
      <form onSubmit={this.signupHandler}>
        <div class="row" style={{background:'white'}}>
          <div class="col-md-5">
            <img src="img/all-img/loginbg.png"  style={{height:'100%'}}/>
          </div>
          <div clas="col-md-7" style={{marginTop:'50px',marginLeft:'180px'}}>
            <Signup role="vendor" loader_content="register"/>
          </div>
        </div>
      </form>
    </div>
  </div>

    <div class="container" >
      <a class="navbar-brand" href="#" class="img-responsive img_banner" style={{width: "14%"}}><img src="img/logo.png"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-2 main_nav " id="collapsibleNavbar" >
          <ul class="nav navigation  nav-dropdown  dropdown-menu-center nav_banner">
            {Links}
            <Link to="/web/vendor_registration">
              <li class="nav-item"  >
                <a href="#" class=" nav-link" style={{color:navLink_color}}><b>Partner with us</b></a>
              </li>
            </Link>
            <Link to="/web/seller_registration">
              <li class="nav-item"  >
                <a href="#" class=" nav-link" style={{color:navLink_color}}><b>Sell on Planetshare</b></a>
              </li>
            </Link>
            <Link to="/web/categories">
              <li class="nav-item"  >
                <a href="#" class=" nav-link" style={{color:navLink_color}}><b>category</b></a>
              </li>
            </Link>
          </ul>

          {/*       <button onClick={()=>this.ss()}>Generate</button>
           <ul class="nav navbar-nav mr-auto justify-content-end">
                     <li class=""><div class="container-search">
                     <input type="text" placeholder="Search" style={{width:'280px',height:'15px',color:'black',top:'10px',left: '0%'}} onChange={(e)=>this.searchResult(e)}/>
                      <div class="search"></div>
                      </div>
                     {this.state.searchShow && <div id="search_data" style={{position: "absolute", width: "311px"}}><ul>
                      {this.state.searchList.slice(0,5).map((data,key)=>{
                        return (<Link to={`/web/video_land/${data.video_id}`} onClick={()=>this.setState({searchList:[],hideSearch:false})}><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer'}} class="p-2"><div class="row"><div class="col-md-5"><img src={`/img/all-img/test1.jpg`} width="150px" height="220px" class="bx-shdw-srch-img"/></div><div class="col-md-7 pt-0 border-bottom right8"> <h6 class="p-0 mt-1" style={{lineHeight:'0'}}></h6><p class="pt-1">{data.title}</p></div></div></li></Link>
                       )
                     })}
                        {this.state.hideSearch && <Link to={{
                              pathname:`/web/search/${this.state.searchKeyword}`,
                              item:this.state.searchList
                        }} onClick={()=>this.setState({searchList:[],hideSearch:false})}><li style={{backgroundColor:'white', listStyle: 'none' ,cursor:'pointer',textAlign:'center'}} class="p-2">See More Result</li></Link>}
                        </ul></div>}

                     </li>
                   </ul>*/}

          {this.props.title && <ul class="nav navbar-nav  navbar-right nav-dropdown ml-auto  dropdown-menu-center first_login_user">
            <li class="dropdown mr-8 justify-content-center">
            {localStorage.getItem('Name')==null?<a href="#" class="dropdown-toggle" data-toggle="dropdown"><div class="btn btn-login"><img src="img/user.png" width="40px" height="40px" /></div><b class="caret"></b></a>:<a href="#" class="dropdown-toggle user_btn" data-toggle="dropdown" style=
{{color:'white'}}><div class="btn" ><b>
{localStorage.getItem('Name').charAt(0).toUpperCase()}</b></div><b class="caret"></b>
</a>}
              <ul class="dropdown-menu rounded"    style={{marginLeft:'-70px',marginTop:'10px'}}>
                {/**/}
                <Link to="/dashboard/buyer" class=" nav-link"><li><i class="fa fa-gear pr-2"></i>&nbsp;My Orders</li></Link>
                <Link to="/dashboard/sellerdetails" class=" nav-link"><li><i class="fa fa-users pr-2"></i>&nbsp;Your Seller Account</li></Link>
                <Link to="/dashboard/vendordetails" class=" nav-link"><li><i class="fa fa-user-plus pr-2"></i>&nbsp;Your Vendor Account</li></Link>
                <li><a href="#" class=" nav-link" onClick={this.logout}><i class="fa fa-sign-out pr-2"></i>&nbsp;Logout</a></li>
                <li class="divider"></li>
              </ul> </li>
              {/*<li style={{marginRight:'-20px'}}>
                <button class="btn btn-default btn-lg btn-link" style={{fontSize:"36px",color:'white',marginTop:'10px'}}>
                  <span class="fa fa-shopping-cart"></span>
                </button>
                <span class="badge badge-notify">{this.props.cartvalue}</span>
                </li>*/}
                <li class="cart">
                   <Link to="#" class=" nav-link"><i class="fa fa-shopping-cart pr-2"></i> <span class="item_count">0</span></Link>
                  </li>
          </ul>||
         <ul class="nav navbar-nav navbar-right ml-auto">
           {/*<li class="dropdown mr-8">
          <Link to="/web/vendor_registration"><span class="nav-link text-white"  style={{fontWeight:'bold',cursor:'pointer'}} >Vendor</span></Link>
        <Modal modalIsOpen="true" account="vendor" openUrl="signUpModal"/>
        </li>*/}
        {/*<li class="dropdown mr-8">
           <Link to="/web/seller_registration"><span class="nav-link text-white"  style={{fontWeight:'bold',cursor:'pointer'}} >Sell Content</span></Link>
        </li>*/}
        {/*<li class="dropdown mr-8">
           <Link to="#"><span class="nav-link text-white"  style={{fontWeight:'bold',cursor:'pointer'}} >Pricing</span></Link>
        </li>*/}
        <li class="dropdown mr-8 log_banner">
          <Modal modalIsOpen="true" openUrl="loginModal"/>
         </li>
         <li class="cart">
                  <Link to="#" class=" nav-link"><i class="fa fa-shopping-cart pr-2"></i> <span class="item_count">0</span></Link>
                 </li>
                          </ul>}



          </div>
 </div>
    </nav>
 );
}
}

export default withRouter(Navbar);
// <li class="dropdown mr-8">
// <a href="#login" class="" id=" " >
//    <button type="button" id="dropdownMenu1"  data-toggle="modal" data-target="#myModal" class="btn btn-white btn-login dropdown-toggle">Login  </button>
// </a>
// </li>
// <li class=" ">
//     <a href="#signup"  >
//       <button type="button" id="dropdownMenu1"  data-toggle="modal" data-target="#myModal" class="btn btn-white btn-login dropdown-toggle">  Sign Up </button></a>
//     </li>





// {this.props.title && <ul class="nav navbar-nav navbar-right ml-auto">
// <li class="dropdown mr-8">  <button type="button" class="btn btn-white btn-login dropdown-toggle">{this.props.title}</button></li>
// <li class="dropdown mr-8">  <button type="button" class="btn btn-white btn-login dropdown-toggle" onClick={this.logout}>Logout</button></li>
// </ul> ||
// <ul class="nav navbar-nav navbar-right ml-auto">
// <Link to="/upload"><li class="dropdown mr-8"> <button type="button" class="btn btn-white btn-login ">Upload</button></li></Link>
// <li class="dropdown mr-8">
// <Modal modalIsOpen="true"/>
// </li>
//             </ul>
//          }



// {!this.props.title && <Link to="/web/vendor_registration">
// <li class="nav-item"  >
// <a href="#" class=" nav-link" style={{color:navLink_color}}><b>Vendor</b></a></li>
// </Link>}
// {!this.props.title &&<Link to="/web/seller_registration">
// <li class="nav-item"  >
// <a href="#" class=" nav-link" style={{color:navLink_color}}><b>Seller</b></a></li>
// </Link>}
// {this.props.title && <Link to="/dashboard/vendordetails">
// <li class="nav-item"  >
// <a href="#" class=" nav-link" style={{color:navLink_color}}><b>Vendor</b></a></li>
// </Link>}
// {this.props.title &&<Link to="/dashboard/sellerdetails">
// <li class="nav-item"  >
// <a href="#" class=" nav-link" style={{color:navLink_color}}><b>Seller</b></a></li>
// </Link>}
