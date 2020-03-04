import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Redirect,Switch,HashRouter} from "react-router-dom";
import {Paginator} from 'primereact/paginator';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
class Paging extends Component {
  render() {
    return (
      <div>
      <Paginator first={this.props.first} rows={this.props.rows} totalRecords={this.props.total} rowsPerPageOptions={[5,10,20,30]} onPageChange={(e) =>{
        this.props.clicked(e.page+1,e.first,e.rows,this.props.search)
      }}></Paginator>
      </div>
    );
  }
}
export default Paging;
