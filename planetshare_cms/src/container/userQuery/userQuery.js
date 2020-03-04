import React, { Component } from 'react';
import './userQuery.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch,HashRouter,Link,withRouter} from "react-router-dom";
import SearchBar from '../../component/searchbar/searchbar';
import {Button} from 'primereact/button';
import {USERQUERYLIST} from '../../url.js';
import $ from 'jquery';
import SweetAlert from 'react-bootstrap-sweetalert';
import Pagination from "react-js-pagination";
import Loader from '../../component/loader/loader.js';
class UserList extends Component {
  state={
    list:[],
    activePage:1,
    itemsCountPerPage:1,
    totalItemsCount:1,
    pageRangeDisplayed:3,
    show:false,
    tableshow:false,
    id:0,
    status:0,
    search:'',
    loader:true
  }
  componentWillReceiveProps(nextProps){
this.handlePageChange('1');
}
      componentDidMount()
      {
        this.handlePageChange('1');
      }
      handlePageChange=(pageNumber,searchKeyword)=> {
      var email=localStorage.getItem('email');
        axios.post(`${USERQUERYLIST}?page=${pageNumber}`, {
          email:email,
          searchKeyword:searchKeyword
        })
      .then(response=>{
      var result=response.data.data;
      setTimeout(()=>{this.setState({
                    activePage:result.current_page,
                    itemsCountPerPage:result.per_page,
                    totalItemsCount:result.total,
                    list:result.data,
                    tableshow:true,
                    loader:false
                  });},1000);
      })
      .catch(function (error) {
        console.log(error);
      });
        }
        action() {
         return (
           <div style={{textAlign:'center'}}>
                 <i className="fa fa-trash " style={{marginRight: '.5em',width:'2em',height:'2em',cursor:'pointer',color:'#d9534f'}} ></i>
          </div>);
     }
   searchHandler(e)
   {
     this.setState({search:e.target.value});
     this.handlePageChange('1',e.target.value);
   }
  render()
  {
    const userlist=(this.state.list.map((result,key)=>{
    return (
      <tr>
      <td ><Link to={`/querydetails/${result.id}`}><a href="#" class="link_col">{result.name}</a></Link></td>
      <td>{result.mobile}</td>
      <td>{result.email}</td>
      <td>{result.subject}</td>
      <td>{result.created_at}</td>
    </tr>)
  }));
  if(this.state.loader)
  {
    return <Loader content="Query List"/>
  }
  else {
    return (
      <div >
      <Link to={{
                pathname:'/blog',
                item: {
                    okay:this.state.list
                }}}>Ideas</Link>
      <div class="table-responsive">
      <SearchBar placeholder="Search By Name Or Email" clicked={this.searchHandler.bind(this)} />
      <h2 >Query List</h2>
  {this.state.tableshow && <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Mobile</th>
        <th scope="col">Email</th>
        <th scope="col">Subject</th>
        <th scope="col">Requested At</th>
      </tr>
    </thead>
    <tbody>
    { this.state.list.length
        ? userlist
        : <center><div style={{marginLeft:'400px',position:'absolute',fontSize:'18px'}}>No result Found</div></center>
      }
    </tbody>
  </table>}
</div>
{this.state.list.length >0 && <div className="d-flex justify-content-end">
<Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
          itemClass='page-item'
          linkClass="page-link bold"
        /></div>}
</div>

)}
  }
}
export default withRouter(UserList);
