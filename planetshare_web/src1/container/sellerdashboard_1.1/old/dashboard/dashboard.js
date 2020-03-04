import React, { Component } from 'react';
import './dashboard.css';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import routes from "../routes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
class SellerDashboard extends Component {
  render()
  {
    return(
<body>
  <div class="container-scroller">
<Navbar/>
    <div class="container-fluid page-body-wrapper">
        <Sidebar/>
      <div class="main-panel">
       <div class="col-12 col-md-12">
       <Switch>
         {routes.map((route, idx) => {
             return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                 <route.component {...props} />
               )} />)
               : (null);
           },
         )}

       </Switch>
       </div>
      </div>
    </div>
  </div>
</body>
)
}
}
export default SellerDashboard;
