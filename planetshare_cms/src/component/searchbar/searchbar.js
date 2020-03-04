import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
      <div class="main" >
      <div class="form-group has-search">
  <span class="fa fa-search form-control-feedback"></span>
  <input type="text" class="form-control" placeholder={this.props.placeholder} onChange={this.props.clicked} />
</div>
</div>
    );
  }
}
export default Search;
