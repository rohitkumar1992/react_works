import React, { Component } from 'react';
import './searchbar.css'
class Search extends Component {
  render() {
    return (
      <div class="float-right search_bar">
        <div id="debug_searchbar" class="form-group has-search" >
          <span class="fa fa-search form-control-feedback" style={{marginTop:'10px',zIndex:'10000',marginLeft:'1px',position:'absolute'}}></span>
          <input type="text" class="form-control" placeholder={this.props.placeholder} onChange={this.props.clicked} />
        </div>
      </div>
    );
  }
}
export default Search;
