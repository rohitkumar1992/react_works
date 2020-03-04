import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import {withRouter} from 'react-router-dom';
import routes from "../routes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
class DashboardContent extends Component {
  render()
  {
    return(
<body>
    <div class="container-fluid page-body-wrapper">
        <Sidebar />
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
</body>
)
}
}
export default withRouter(DashboardContent);
