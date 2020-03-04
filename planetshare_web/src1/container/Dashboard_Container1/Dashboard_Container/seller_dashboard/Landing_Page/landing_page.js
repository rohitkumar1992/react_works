import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
class LandingPage extends Component{
  render()
  {
    return(
<body>
  <div class="container-scroller">
    <div class="page-body-wrapper" style={{backgroundColor:'white'}}>
       <div class="col-12 col-md-12">
       <div><h4 style={{fontSize:'17px'}}>You are almost ready to start getting jobs</h4>
       <p >Please Add The Services</p></div>
       </div>
      </div>
  </div>
</body>
)
}
}
export default LandingPage;
