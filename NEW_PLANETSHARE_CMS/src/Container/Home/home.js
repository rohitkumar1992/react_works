import React, { Component } from 'react';
import Authentication from '../../Container/Authentication/Authentication';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import {DASHBOARDHOME,HEADER} from '../../url';
import BreadCrumb from '../../Component/breadcrumb';
import Loader from '../../Component/Loader/loader';
import axios from 'axios';
class Home extends Component {
  state={isLoading:false,homeData:[]}
  componentDidMount()
  {
    this.getData()
  }
  getData=(page)=>{
    axios.get(`${DASHBOARDHOME}`,HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data;
          this.setState({homeData:response.data});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
    }).catch((error)=>{

    })
  }
  render() {
    const {isLoading,homeData}=this.state
    if(isLoading)
    {
      const cardsData=homeData.length>0 && homeData.map((res,key)=>{
        return(<div class="col-xl-4 col-lg-4 col-sm-6" key={key}>
            <div class="card clr1">
              <div class="icon">
                <i class={res.icon} aria-hidden="true"></i>
              </div>
              <div class="number">
                <span>{res.total}</span>
              </div>
              <div class="ttl">
                <p>{res.name}</p>
              </div>
              <div class="buttons">
                <button class="btndefault act">Active:{res.active}</button>
                <button class="btndefault inact">Inactive:{res.inactive}</button>
              </div>
            </div>
          </div>)
      })
      return (
        <div id="content">
          <div class="content_area">
            <BreadCrumb name="Dashboard"/>

            {/*========total cards===========*/}
            <div class="ttl_cards">
              <div class="row">
                {cardsData }
              </div>
              <div class="clearfix"></div>
            </div>

            {/*========table===========*/}

          </div>

        </div>
      );
    }
    else
     {
      return(<Loader/>)
     }
  }
}

export default Authentication(Home);
