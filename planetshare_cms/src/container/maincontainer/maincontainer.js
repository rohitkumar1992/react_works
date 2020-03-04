import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
import routes from "../../routes";
class MainContainer extends Component {
  render() {
    return (
      <div class="page-wrapper" style={{minHeight:'500px',background:'white' }}>
           <div class="page-breadcrumb" style={{background:'white'}}>
                  <div class="col-12 d-flex no-block align-items-center">
                      <h4 class="page-title"></h4>
                      <div class="ml-auto text-right">
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                              </ol>
                          </nav>
                      </div>
                  </div>
                  <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                            <route.component {...props} />
                          )} />)
                          : (null);
                      },
                    )}
                    <Redirect from="/" to="/dashboard" />
                  </Switch>
              </div>

      </div>
    );
    }
  }
  export default MainContainer;
            //
