import React from 'react';
import axios from 'axios';
import {CATEGORY_DATA,COUNTRYCODE,PARTNER_ID,USERID,PLAYLIST_VIEW,PLAYLIST_METADATA,PLAYLIST} from '../../url';
import { toast,cssTransition} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ccavenue from 'ccavenue';
 const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Category_list extends React.Component
{
  state={playlistData:[],isLoading:false,not_found:false}
//     componentDidMount()
//   {
//     this.getData()
//   }
//   getData=async()=>{
//     ccavenue.setMerchant("217500");
// ccavenue.setWorkingKey("Working Key");
// ccavenue.setOrderId("Order Id");
// ccavenue.setRedirectUrl("Redirect Url");
// ccavenue.setOrderAmount("Order Amount");
// var formData=new FormData();
// formData.append('userid',USERID);
// formData.append('countrycode',COUNTRYCODE);
// formData.append('partnerid',PARTNER_ID);
// formData.append('tag','web');
// let response= await axios.post('https://secure.ccavenue.com/',{
//   merchant_id:217500,
//   access_code:'AVAV85GE46BP54VAPB',
//   RSAKeyUrl:"http://cmspublisher.planetcast.in/ccavenue/GetRSA.php",
//   currency:'INR',
//   order_id:1023,
//   amount:1,
//   redirect_url:'http://otm.planetcast.in/app_payment',
//   cancel_url:'http://otm.planetcast.in/app_payment'
// });
//   if(response.status=='200')
//   {
//     var result=response.data;
//       // if(result.UserView.length==0)
//       // {
//       //   this.setState({not_found:true})
//       // }
//       this.setState({playlistData:result.UserView})
//       setTimeout(()=>this.setState({isLoading:true}),1000)
//   }
//   else {
//     this.setState({not_found:true})
//   }

// server.get('/make-payment', function(req, res) {
//   ccavenue.makePayment(res);
// });
//  }
  render()
  {
    return(
      <div class="inner_wrap top_div">
          shanatnu
      </div>
    );
  }
}
export default Category_list;
