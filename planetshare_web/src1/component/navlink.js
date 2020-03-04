import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
class NavLink extends Component {
  state={
    nav_child:[]
  }
  componentDidMount()
  {
    this.setState({nav_child:this.props.child});
  }

    render() {
      if(this.props.child!=null)
      {
      return (
        <li class="dropdown justify-content-center nav-item">
              <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" style={{color:this.props.navLink_color,fontWeight:'1000'}}><b>{this.props.name}</b></a>
              <ul class="dropdown-menu rounded mt-3">
              {this.state.nav_child.map((result,key)=>{
                  {/*return (<Link to={`/web/${result.url.toLowerCase()}_service`}><li onClick={() => this.props.clicked()}><a href="#" class="nav-link2 nav-link"><img src={result.icons} class="fa-icons"/>&nbsp;&nbsp;<span style={{marginLeft:'20px',marginTop:'-3px',position:'absolute'}}>{result.name}</span></a></li></Link>)*/}
                    return (<Link to={`/web/${result.url.toLowerCase()}_service`}><li onClick={() => this.props.clicked()}><a href="#" class=" nav-link"><i class={`${result.icons}`}></i>&nbsp;{result.name}</a></li></Link>)
              })}
              </ul>
          </li>
      );
    }
          else {
          return (
            <Link to={`/web/${this.props.url}`}>
            <li class="nav-item"  onClick={() => this.props.clicked()}>
              <a href="#" class=" nav-link" style={{color:this.props.navLink_color}}><b>{this.props.name}</b></a></li>
              </Link>
          );
        }
    }
    }
export default NavLink;
