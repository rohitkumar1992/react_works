import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Home from './container/Home/home';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import Movies from './container/Movies/movies';
class App extends React.Component {
  render()
  {
  return (
    <div>
    <Header />
        <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/movies"  component={Movies} />
        </Switch>
      <Footer />
    </div>
  );
}
}
export default App;
