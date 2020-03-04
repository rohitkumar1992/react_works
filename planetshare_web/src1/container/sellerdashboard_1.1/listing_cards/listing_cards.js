import React, { Component } from 'react';
import './listing_cards.css';
const Data =(props)=>{
  if(props.tag=="list")
  {
  return(
            <div class="col-md-2 col-xl-2">
                <div class="card  order-card">
                <img src={`${props.img_url}`} class="img_list" />
                    <div class="card-block ">
                        <div class="col-md-12" onClick={()=>props.clicked(props.video_id,!props.status)} style={{cursor:'pointer'}}>
                        {props.status=="1"?<img src="img/active.png"/>:<img src="img/inactive .png" />}
                        </div>
                        <div class="row"><p class="col-md-12 col-sm-12 font_l">{props.title}</p></div>
                        <p class="font-sm">Hi all welcome to planetshare..</p>
                    </div>
                </div>
            </div>
  );
}
  else
  {
    return(
              <div class="col-md-2 col-xl-2">
                  <div class="card  order-card">
                  <img src={props.img_url} class="img_list" />
                      <div class="card-block ">
                          <div class="col-md-12">
                          {props.status=="1" || props.status=="0"?<img src="img/approve.png"/>:''}
                          {props.status=="2" && <img src="img/Pending.png"/>}
                          {props.status=="3" && <img src="img/Rejected.png"/>}
                          </div>
                          <div class="row"><p class="col-md-12 col-sm-12 font_l">{props.title}</p></div>
                          <p class="font-sm">Hi all welcome to planetshare..</p>
                      </div>
                  </div>
              </div>
    );
  }
}
export default Data;
