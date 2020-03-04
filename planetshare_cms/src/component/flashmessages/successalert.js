import React, { Component } from 'react';
const success = (props)=>{

  if(props.title!='')
  {
  return (
  <div class="alert alert-primary alert-dismissible fade show" role="alert">
      <strong>{props.title}</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
      </button>
  </div>
    );
  }
  else {
    return (
    <div>
    </div>  )
  }
}
export default success;
