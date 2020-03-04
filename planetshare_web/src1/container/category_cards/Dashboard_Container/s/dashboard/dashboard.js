
import React, { Component } from 'react';
import { Redirect, Route, Switch,withRouter} from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from '@coreui/react';
import routes from '../routes';
import nav from '../_nav.js';
import DefaultHeader from '../navbar/DefaultHeader';
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import DefaultFooter from './DefaultFooter';
class DefaultLayout extends Component {
  constructor(props)
  {
    super(props);
    this.state={
    }
  }
  render()
  {
    return (
      <div className="app">
      <AppHeader fixed>
        <DefaultHeader />
      </AppHeader>
      <div className="app-body">
        <AppSidebar display="lg" fixed className="main-sidebar">
          <AppSidebarHeader />
          <AppSidebarForm />
          
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <Container fluid>
            <Switch>
              {routes.map((route, idx) => {
                  return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                      <route.component {...props} />
                    )} />)
                    : (null);
                },
              )}
  <Redirect from="/" to="/selleraccount" />
            </Switch>
          </Container>
        </main>
      </div>
      <AppFooter   className="footer-background">

      </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
// if(localStorage.getItem('email')){
// console.log('value set');
// }
// else
// {
//   this.setState({redirect:true});
// }
