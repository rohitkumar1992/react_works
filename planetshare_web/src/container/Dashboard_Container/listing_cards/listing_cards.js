import React, { Component } from 'react';
import './listing_cards.css';
import {Link} from 'react-router-dom';
const Data =(props)=>{
  if(props.tag=="mylist")
  {
  return(
           <div class="col-md-4 col-sm-6 col-xl-3">
            {(props.status=="1" || props.status=="0" ) && <div>
            <div class="seller_list_card">
              <div class="card-body text-center">
                <div class="justify-content-center align-items-center d-center">
                  <img class="d-block img-fluid card-img-top" src={`${props.img_url}`} alt="card image" style={{height:"150px"}}/>
                </div>
                <h4 class="card-title">{props.title}</h4>
                <a  class="card-link float-left text-sm">
                  {props.status=="1" && <button class="btn btn-default-card btn-sm font-weight-bold" style={{cursor:'pointer',backgroundColor:'rgba(0,0,0,0.6)',color:'white'}} onClick={()=>props.clicked(props.video_id,props.status)}>Active</button>}
                  {props.status=="0" && <button  class="btn btn-default-card btn-sm font-weight-bold" style={{cursor:'pointer',backgroundColor:'rgba(0,0,0,0.6)',color:'white'}} onClick={()=>props.clicked(props.video_id,props.status)}>Inactive</button>}
                </a>
                <Link to={`/dashboard/seller/edit/mylist/${props.video_id}`}><button  class="btn btn-edit" ><i class="fa fa-pencil" aria-hidden="true"></i></button></Link>
              </div>
            </div>
            </div>}
          </div>
  );
}
  else
  {
    return(
      <div class="col-md-4 col-sm-6 col-xl-3">
        <div class="seller_list_card" >
          <div class="card-body text-center">
            <div class="justify-content-center align-items-center d-center">
              <img class="d-block img-fluid card-img-top" src={`${props.img_url}`} alt="card image" style={{height:"150px"}}/>
            </div>
            <h4 class="card-title">{props.title}</h4>
            {/*<div class="border-bottom mb-16 mt-16 "></div>*/}
            {/*<a  class="card-link float-left text-sm ml-4">  {props.status=="1" || props.status=="0"?<img src="img/approve.png" style={{width: '55%'}}/>:''}
              {props.status=="2" && <img src="img/Pending.png" style={{width: '55%'}}/>}
              {props.status=="3" && <img src="img/Rejected.png" style={{width: '55%'}}/>}</a>*/}
            <a  class="card-link float-left text-sm">
               {(props.status=="0" || props.status=="1" )&& <button  class="btn btn-success btn-default-card btn-sm font-weight-bold" disabled>Approved</button>}
               {props.status=="2" && <button  class="btn btn-primary btn-default-card btn-sm font-weight-bold" disabled>Pending</button>}
               {props.status=="3" && <button  class="btn btn-danger btn-default-card btn-sm font-weight-bold" disabled>Rejected</button>}
            </a>
            <Link to={`/dashboard/seller/edit/approvallist/${props.video_id}`}>
              <button  class="btn btn-edit" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Data;
