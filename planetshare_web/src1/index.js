import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Upload from './component/chunkupload/resumable.js';
import Payment from './container/Payment/payment';
import BuyerPayment from './container/Buyer_Payment/payment';
import VIDEOHOMEPAGE from './component/innerpage/innerpage';
import Seller from './container/Dashboard_Container/dashboard/dashboard.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
// import TermsCondition from './component/terms_conditions/terms_condition';
// import PrivacyPolicy from './component/privacy_policy/privacy_policy';
import Player from './testPlayer';
const Result = ()=>{
  return (
    <HashRouter >
    <Switch >
    <Route path="/web"  component={App}/>
    <Route path="/" exact={true} component={App}>
    <Redirect from="/" to="/web"/>
    </Route>
    <Route path="/checkout"  component={Payment}/>
    <Route path="/videocheckout"  component={BuyerPayment}/>
    <Route path="/dashboard/:role" component={Seller}/>
        <Route path="/player" component={Player}/>
    </Switch>
    </HashRouter>
  )
}
ReactDOM.render(<Result />, document.getElementById('root'));
// serviceWorker.unregister();
      // <Route path="/upload"  component={Upload}/>
