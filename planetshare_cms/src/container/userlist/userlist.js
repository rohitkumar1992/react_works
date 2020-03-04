import React, { Component } from 'react';
import './userlist.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch,HashRouter,Link,withRouter} from "react-router-dom";
import SearchBar from '../../component/searchbar/searchbar';
import {Button} from 'primereact/button';
import {USERLIST,CHANGESTATUS,DELETE} from '../../url.js';
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
        axios.post(`${USERLIST}?page=${pageNumber}`, {
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
      status(status,id)
      {
        var content=status=='1'?<button className=" btn-success" id={`status_${id}`} onClick={(e)=>this.statusAlert(id,e.target.value)}  value="1" style={{cursor:'pointer',width:'68px',backgroundColor:'#27a9e3',border:'1px solid #27a9e3'}}>Active</button>:<button className="inactive_button btn-danger"  id={`status_${id}`} value="0" onClick={(e)=>this.statusAlert(id,e.target.value)} style={{cursor:'pointer',maxWidth:'68px',width:'68px'}}>Inactive</button>
        return content;
      }
      statusAlert(id,status)
      {
        this.setState({show:true,id:id,status,status});
      }
      changeStatus(id,status)
      {
          axios.post(CHANGESTATUS, {
          user_id:id,
          status:status
          })
        .then(response=>{
            if(response.data.success)
            {
              this.setState({show:false})
                if(response.data.status=='1')
                {
                   $('#status_'+id).removeClass("btn-danger");
                   $('#status_'+id).addClass("btn-success");
                  document.getElementById('status_'+id).innerHTML="Active";
                  document.getElementById('status_'+id).value="1";
                }
                else if(response.data.status=='0') {
                  $('#status_'+id).removeClass("btn-success");
                  $('#status_'+id).addClass("btn-danger");
                 document.getElementById('status_'+id).innerHTML="Inactive";
                   document.getElementById('status_'+id).value="0";
                }
          }
        })
        .catch(function (error) {
          console.log(error);
      });
      }
      deleteHandler(id)
      {
        axios.post(DELETE, {
        user_id:id
        })
      .then(response=>{
        if(response.data.success)
        {
          $( "#delete_"+id ).remove();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      }
      action(id) {
       return (
         <div style={{textAlign:'center'}}>
               <i className="fa fa-trash " style={{marginRight: '.5em',width:'2em',height:'2em',cursor:'pointer',color:'#d9534f'}} onClick={this.deleteHandler.bind(this,id)}></i>
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
      <tr id={`delete_${result.id}`}>
      <td ><Link to={`/user/details/${result.id}`}><a href="#" class="link_col">{result.AccountId}</a></Link></td>
      <td>{result.name}</td>
      <td>{result.email}</td>
      <td>{result.created_at}</td>
      <td>{this.status(result.status,result.id)}</td>
      <td>{this.action(result.id)}</td>
    </tr>)
  }));
  if(this.state.loader)
  {
    return <Loader content="User List"/>
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
      <h2 >User List</h2>
  {this.state.tableshow && <table class="table">
    <thead>
      <tr>
        <th scope="col">Account Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Registered On</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    { this.state.list.length
        ? userlist
        : <center><div style={{marginLeft:'400px',position:'absolute',fontSize:'18px'}}>No result Found</div></center>
      }
    </tbody>
  </table>}
  <SweetAlert
  warning
  showCancel
  show={this.state.show}
  confirmBtnText="Confirm !"
  confirmBtnBsStyle="danger"
  cancelBtnBsStyle="default"
  title="Are you sure?"
  hideOverlay="true"
  onConfirm={()=>this.changeStatus(this.state.id,this.state.status)}
  onCancel={() => this.setState({ show: false })}
  >

</SweetAlert>
</div>
<div className="d-flex justify-content-end">
<Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
          itemClass='page-item'
          linkClass="page-link bold"
        /></div>
</div>

)}
  }
}
export default withRouter(UserList);
