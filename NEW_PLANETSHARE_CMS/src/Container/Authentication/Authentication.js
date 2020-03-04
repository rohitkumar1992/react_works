import React from 'react';
import Login from "../Login/login.js"
const Auth=(OldComponent)=>{
  class NewComponent extends React.Component{
    render()
    {
      if(localStorage.getItem('planetshare_token')!==null)
      {
      return(<OldComponent {...this.props}/>)
      }
      else {
        return(<Login {...this.props}/>)
      }
    }
  }
  return NewComponent;
}

export default Auth;
