import React from 'react';
import Login from "../Login/login.js"
const Auth=(OldComponent)=>{
  class NewComponent extends React.Component{
    render()
    {
      if(localStorage.getItem('token')!==null)
      {
      return(<OldComponent {...this.props}/>)
      }
      else {
        return(<center><h4>Not Found</h4></center>)
      }
    }
  }
  return NewComponent;
}

export default Auth;
