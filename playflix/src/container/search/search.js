import React from 'react';
import Authenticator from '../Authentication/Authentication'
class SearchComponent extends  React.Component
{
  state={keyword:''}

   getSearchData=async (e)=>{
     e.preventDefault();
     if(e.target.keyword.value.trim()=='' || e.target.keyword.value.trim()=="/" || e.target.keyword.value.trim()=="?")
     {
       return false;
     }
     this.props.history.push(`/playflix_search/search_keyword=/playflix@521/${e.target.keyword.value}`)
  }


  render()
  {
    return(<li class="h_search">
    <div class="search_mob" style={{display:'none'}}><i class="fa fa-search" aria-hidden="true"></i></div>
        <form  class="search_f" onSubmit={this.getSearchData}>
        <div class="icon_close" style={{display:'none'}}>X</div>
            <div class="inputbox">
                <input type="text" placeholder="Search" name="keyword" value={this.state.keyword} onChange={(value)=>{this.setState({keyword:this.value})}}/>
                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
            <div class="clearfix"></div>
        </form>
    </li>)
  }
}
export default Authenticator(SearchComponent);
