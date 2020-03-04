import React, { Component } from 'react';
class StepExampleOrdered extends Component {
  isValidated()
  {
    return true;
  }
  render()
  {
  return(
    <div style={{marginTop:'80px'}}>
      <form onSubmit={this.isValidated}>
      <input type="text" name="shantanu"/>
      </form>
       </div>
)
}
}
export default StepExampleOrdered;
