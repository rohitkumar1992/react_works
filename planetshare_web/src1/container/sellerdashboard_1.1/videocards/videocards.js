import React, { Component } from 'react';
const VideoCards = (props) =>{
  return(

   <div class="col-md-3">
            <div class="card  mx-sm-1 p-1">
                <div class="text-info text-center "><h6  style={{color:'rgb(57, 73, 89)'}}>{props.content}</h6></div>
                <div class="text-info text-center mt-0 pt-0"><h6 class="card-lin-height">{props.value}</h6></div>
            </div>
        </div>

  );
}
export default VideoCards;
