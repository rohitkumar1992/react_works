import React, { Component } from 'react';
const VideoCards = (props) =>{
  return(

   <div class="col-md-4">
            <div class="card  border-primary mx-sm-1 p-1">
                <div class="card  border-primary shadow text-primary p-3 my-card" ><span class="fa fa-eye" aria-hidden="true"></span></div>
                <div class="text-info text-center pt-2 mt-2"><h6>{props.content}</h6></div>
                <div class="text-info text-center mt-0 pt-0"><h6 class="card-lin-height">{props.value}</h6></div>
            </div>
        </div>

  );
}
export default VideoCards;
