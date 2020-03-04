import React, { Component } from 'react';
import './listing_cards.css';
const Data =(props)=>{
  if(props.tag=="list")
  {
  return(

  <div class="col-md-2 col-xl-2">
            <div class="card bx-shdw-srch-img">
              <img src={`${props.img_url}`} class="card-img-top"  alt="Card image" />
			    <div class="card-body p-2">
			      <h4 class="card-title card-title-1 font-sm" >{props.title}</h4>
			      <p class="card-text mb-1">Hi all welcome to planetshare..</p>
			        {props.status=="1"?<img src="img/active.png" style={{width: '85%',cursor:'poi'}} onClick={()=>props.clicked(props.video_id,props.status)}/>:<img src="img/inactive .png" style={{width: '85%',cursor:'pointer'}} onClick={()=>props.clicked(props.video_id,props.status)}/>}
			    </div>
			  </div>
			  </div>
  );
}
  else
  {
    return(
              <div class="col-md-2 col-xl-2">
                  <div class="card  bx-shdw-srch-img">
                  <img src={`${props.img_url}`} class="card-img-top" />
                      <div class="card-body p-2">
                         <h4 class="card-title card-title-1 font-sm">{props.title}</h4>
                          <p class="card-text mb-1">Hi all welcome to planetshare..</p>
                          <div class="col-md-12">
                          {props.status=="1" || props.status=="0"?<img src="img/approve.png" style={{width: '85%'}}/>:''}
                          {props.status=="2" && <img src="img/Pending.png" style={{width: '85%'}}/>}
                          {props.status=="3" && <img src="img/Rejected.png" style={{width: '85%'}}/>}
                          </div>

                      </div>
                  </div>
              </div>
    );
  }
}
export default Data;
