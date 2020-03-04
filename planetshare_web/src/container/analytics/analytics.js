import React, { Component } from 'react';
import { Bar, Pie,Doughnut,Chart} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import axios from 'axios';
class LANDINGPAGE extends Component{
  state={
    total:0,completed:0,queued:0,inprogress:0
}
componentDidMount()
{
  axios.post(this.props.api, {
    user_id:localStorage.getItem('userid')
  })
 .then(response=>{

  if(response.data.success)
  {
 var result=response.data;
 this.setState({
              total:result.total_record,
              completed:result.total_completed,
              queued:result.total_queued_record,
              inprogress:result.total_in_progress
              });
            }
 })
 .catch(function (error) {
  console.log(error);
 });
}
  render()
  {
    const pie = {
      labels: [
      `${this.state.completed} Completed`,
      `${this.state.inprogress} Inprogress`,
      `${this.state.queued} Queued`,
      ],
      datasets: [
        {
          data: [this.state.completed,this.state.inprogress,this.state.queued],
          backgroundColor: [

            '#36A2EB',
            '#2f4a64',
            '#FF6384',
            '#4bc7cf',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
          ]
        }],
    };
    const pie1 = {
      labels: [
      `0 Completed`,
      `0 Inprogress`,
      `0 Queued`,
      `No Record Found`
      ],
      datasets: [
        {
          data: [0,0,0,1],
          backgroundColor: [

            '#36A2EB',
            '#2f4a64',
            '#FF6384',
            '#4bc7cf',
          ],
          hoverBackgroundColor: [
            '#36A2EB',
            '#36A2EB',
          ]
        }],
    };
    const options = {
      tooltips: {
        enabled: true,
      },
      maintainAspectRatio:true,
    }

  return(
<div class="col-md-6">
{this.state.total!=0 && <div><h6>{this.props.heading}</h6>
{this.state.total>0 &&
  <Doughnut data={pie} width={150} height={50} options={options} />}
</div>}
{this.state.total==0 && <div><h6>{this.props.heading}</h6>
  <Doughnut data={pie1} width={150} height={50} />
</div>}
</div>
);
}
}
export default LANDINGPAGE;
