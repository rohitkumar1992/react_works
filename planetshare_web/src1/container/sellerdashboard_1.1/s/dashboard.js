
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
// sidebar nav config
import navigation from './_nav';
import php_link from '../global.js';
// // routes config
import routes from './routes';
// import DefaultAside from './DefaultAside';
// import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import Sidecomponent from './Sidecomponent';
import register from '../register';
import login from '../login';
import DefaultAside from './DefaultAside';
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';

// import DefaultFooter from './DefaultFooter';
// const routes1 = [
//   { path: '/', exact: true, name: 'Home', component: register},
//   { path: '/register', exact: true, name: 'Theme', component: register },
//     { path: '/register', exact: true, name: 'Theme', component: register },
//       { path: '/register', exact: true, name: 'Theme', component: register },
// ];
class DefaultLayout extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      redirect:false,
      re:false,
      s:{},
      items:[]
    }
  }
  componentDidMount()
  {
    if(localStorage.getItem('email')){
      console.log('value set');
    }
    else
      {
        this.setState({redirect:true});
    }
    this.func();
  }
  func()
  {
        var formData = new FormData();
    formData.append("action","sidebar");
        formData.append("parent_id",'0');
    fetch(php_link, {
     method: 'POST',
     body: formData
   }).then((res) => res.json())
      .then((result) =>  {
              this.setState({items:result,re:true});

     }).catch((err)=>console.log(err))
  }
  render() {
    if(this.state.redirect)
    {
    return <Redirect to='/login'/>
    }
    else {
if(this.state.re)
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
  <AppSidebarNav  navConfig={this.state.items} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
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
            </Container>
          </main>
          <AppAside fixed hidden>

          </AppAside>
        </div>
        <AppFooter   className="footer-background">
      <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
else{
  return this.func.bind(this);
}
}
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
