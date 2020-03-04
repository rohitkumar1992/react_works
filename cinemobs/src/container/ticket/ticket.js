import React from 'react'
import axios from 'axios';
import {COUNTRYCODE,PARTNER_ID,USERID,TICKET_HISTORY} from '../../url';
import {  toast,cssTransition} from 'react-toastify';
import TTLoader from '../../component/loader/ttloader'
import 'react-toastify/dist/ReactToastify.css';
import Authenticator from '../Authentication/Authentication'
const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Ticket extends React.Component{
  state={isLoading:false,ticket_history:[]}
componentDidMount()
{
  this.getData()
}
getData=async()=>{
  var formData=new FormData();
  formData.append('userid',localStorage.getItem('userid'));
  formData.append('countrycode',COUNTRYCODE);
  formData.append('partnerid',PARTNER_ID);
  let response= await axios.post(TICKET_HISTORY,formData,{headers:{'token':localStorage.getItem('token')}});
    if(response.status=='200')
    {
        var result=response.data;
        this.setState({ticket_history:result.Ticket_history})
        setTimeout(()=>this.setState({isLoading:true}),1000)
        //  toast(result.Msg,{ transition: Zoom,});
    }
    else {
    }
}
  render()
  {
    if(this.state.isLoading)
    {
      const {ticket_history}=this.state
      const ticket_list=(ticket_history.length>0?(ticket_history.map((res,key)=>{
        return(<ul key={key}><li>
                          <div class="table_row">
                            <div class="table_col">
                              <p>{res.ticket}</p>
                            </div>
                            <div class="table_col">
                              <p>{res.subject}</p>
                            </div>
                          </div>
                          <div class="table_row">
                            <div class="table_col">
                              <p>{res.date}</p>
                            </div>
                            <div class="table_col">
                              <p>{res.status}</p>
                            </div>
                          </div>
                        </li></ul>)
      })):<center><h4>No Result Found</h4></center>)
    return(
      <div>
        <div class="inner_wrap">
          <div class="container">
            <h2 class="text-center">Ticket History</h2>
            <div class="ticket_list">
              {ticket_list}
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    )
  }
  else {
    return(<TTLoader/>)
  }
  }
}
export default Authenticator(Ticket);
