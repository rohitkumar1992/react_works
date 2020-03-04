import React, { Component } from 'react';
import './listing_cards.css';
const Data =(props)=>{
  if(props.tag=="list")
  {
  return(

            <div class="col-md-4 col-xl-4">
              <div class="card">
                                <div class="card-body text-center">
                                    <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid card-img-top" src={`${props.img_url}`} alt="card image" style={{borderRadius:'50%',width:'100px'}}/></div>
                                    <h4 class="card-title">{props.title}</h4>
                                    <p class="card-text text-sm">Hi all welcome to planetshare..</p>
                                    <div class="border-bottom mb-16 mt-16"></div>
                                    <a  class="card-link float-left text-sm">{props.status=="1"?<img src="img/active.png" style={{width: '55%',cursor:'pointer'}} onClick={()=>props.clicked(props.video_id,props.status)}/>:<img src="img/inactive .png" style={{width: '55%',cursor:'pointer'}} onClick={()=>props.clicked(props.video_id,props.status)}/>}</a>
                                    <a  class="btn btn-primary btn-default-card btn-sm float-right">Edit</a>
                                </div>
                            </div>
            </div>
  );
}
  else
  {
    return(
      <div class="col-md-4 col-xl-4">
        <div class="card">
                          <div class="card-body text-center">
                              <div class="row  justify-content-center align-items-center d-center"><img class="d-block img-fluid card-img-top" src={`${props.img_url}`} alt="card image" style={{borderRadius:'50%',width:'100px'}}/></div>
                              <h4 class="card-title">{props.title}</h4>
                              <p class="card-text text-sm">Hi all welcome to planetshare..</p>
                              <div class="border-bottom mb-16 mt-16"></div>
                              <a  class="card-link float-left text-sm">  {props.status=="1" || props.status=="0"?<img src="img/approve.png" style={{width: '55%'}}/>:''}
                                {props.status=="2" && <img src="img/Pending.png" style={{width: '55%'}}/>}
                                {props.status=="3" && <img src="img/Rejected.png" style={{width: '55%'}}/>}</a>
                              <a  class="btn btn-primary btn-default-card btn-sm float-right">Edit</a>
                          </div>
                      </div>
      </div>
    );
  }
}
export default Data;
