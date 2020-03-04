import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import routes from './routes.js';
class App extends React.Component {
  render()
  {
  return (
    <div >
    <Header {...this.props}/>
    <div style={{minHeight:'500px'}}>
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
      <Footer />
    </div>
  );
}
}
export default App;
