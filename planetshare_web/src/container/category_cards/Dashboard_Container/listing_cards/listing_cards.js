import React, { Component } from 'react';
import './listing_cards.css';
const Data =(props)=>{
  if(props.tag=="mylist")
  {
  return(
           <div class="col-md-3 col-xl-3 p-1">
           {(props.status=="1" || props.status=="0" ) && <div>
              <div class="seller_list_card">
                                <div class="card-body text-center">
                                    <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid card-img-top" src={`${props.img_url}`} alt="card image" style={{borderRadius:'50%',width:'100px'}}/></div>
                                    <h4 class="card-title">{props.title}</h4>
                                    {props.premium=='1'?<p class="card-text font-weight-bold text-success" >Premium</p>:<p class="card-text font-weight-bold" style={{color:'#2255a4'}}>Free</p>}
                                    <div class="border-bottom mb-16 mt-16"></div>
                                    <a  class="card-link float-left text-sm">
                                          {props.status=="1" && <button class="btn btn-default-card btn-sm font-weight-bold" style={{cursor:'pointer',backgroundColor:'rgba(0,0,0,0.6)',color:'white'}} onClick={()=>props.clicked(props.video_id,props.status)}>Active</button>}
                                          {props.status=="0" && <button  class="btn btn-default-card btn-sm font-weight-bold" style={{cursor:'pointer',backgroundColor:'rgba(0,0,0,0.6)',color:'white'}} onClick={()=>props.clicked(props.video_id,props.status)}>Inactive</button>}
                                    </a>
                                    <button  class="btn btn-danger btn-default-card btn-sm float-right" onClick={()=>{alert('In Maintenance Mode')}}>Edit</button>
                                </div>
                            </div>
            </div>}</div>
  );
}
  else
  {
    return(
      <div class="col-md-3 col-xl-3 p-2">
        <div class="seller_list_card" >
                          <div class="card-body text-center">
                              <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid card-img-top" src={`${props.img_url}`} alt="card image" style={{borderRadius:'50%',width:'100px'}}/></div>
                              <h4 class="card-title">{props.title}</h4>
                              {props.premium=='1'?<p class="card-text font-weight-bold " style={{color:'#ffb848'}}>Premium</p>:<p class="card-text font-weight-bold" style={{color:'#2255a4'}}>Free</p>}
                              <div class="border-bottom mb-16 mt-16 "></div>
                              {/*<a  class="card-link float-left text-sm ml-4">  {props.status=="1" || props.status=="0"?<img src="img/approve.png" style={{width: '55%'}}/>:''}
                                {props.status=="2" && <img src="img/Pending.png" style={{width: '55%'}}/>}
                                {props.status=="3" && <img src="img/Rejected.png" style={{width: '55%'}}/>}</a>*/}
                                 {(props.status=="0" || props.status=="1" )&& <button  class="btn btn-success btn-default-card btn-sm ">Approved</button>}
                                 {props.status=="2" && <button  class="btn btn-primary btn-default-card btn-sm ">Pending</button>}
                                 {props.status=="3" && <button  class="btn btn-danger btn-default-card btn-sm ">Rejected</button>}
                          </div>
                      </div>
      </div>
    );
  }
}
export default Data;
