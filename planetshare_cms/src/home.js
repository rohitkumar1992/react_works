import React,{Component} from 'react';
import axios from 'axios';
import {HOME} from './url.js';
import Card from './component/card/card';
import { Bar, Pie,Doughnut} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

// import '@coreui/icons/css/coreui-icons.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'simple-line-icons/css/simple-line-icons.css';
class Home extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      list:[],
      cardActive:false,
      active:13,
      inactive:15,
      bargraph:[]
}
  }
  componentDidMount()
  {
      axios.post(HOME, {
      })
      .then(response=>{
      this.setState({list:response.data.dash,bargraph:response.data.data,active:response.data.dash[1].count,inactive:response.data.dash[2].count});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render()
  {
    const pie = {
      labels: [
      `${this.state.active} Active`,
        `${this.state.inactive} Inactive`,
      ],
      datasets: [
        {
          data: [this.state.active, this.state.inactive],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
          ]
        }],
    };
    const bar ={
      labels:this.state.bargraph.map((result,index)=>{
        return result.uploaded_on
      }),
       datasets: [
        {
          label: `Weekly Uploaded Videos`,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data:this.state.bargraph.map((result,index)=>{
            return result.Total
          })
        },
      ]
    };
    const options = {
      tooltips: {
        enabled: true,
      },
      maintainAspectRatio:true,
    }
    console.log(this.state.bargraph);
    const cards= this.state.list.map((result,key)=>{
        return(<Card name={result.name} count={result.count}/>);
    });
  return (<div> <div class="row">
          {cards}
        </div>
        <div class="row">
        <div className="chart-wrapper col-md-6">
          <Bar data={bar} options={options} width={100} height={50}/>
        </div>
        <div className="chart-wrapper col-md-6">
          <Doughnut data={pie} width={100} height={50} options={options} />
        </div></div>
        </div>)
  }
}
export default Home;
