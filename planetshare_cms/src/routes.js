import React from 'react';
import Loadable from 'react-loadable';
import DASHBOARD from './container/dashboard';

function Loading() {
  return <div>Loading...</div>;
}
const USERLIST = Loadable({
  loader: () => import('./container/userlist/userlist'),
  loading: Loading,
});
const HOME = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});
const UPLOAD = Loadable({
  loader: () => import('./component/chunkupload/resumable'),
  loading: Loading,
});
const VIDEOLIST = Loadable({
  loader: () => import('./container/videolist/videolist'),
  loading: Loading,
});
const DESCRIPTION = Loadable({
  loader: () => import('./component/videoDescription/videoDescription'),
  loading: Loading,
});
const Error = Loadable({
  loader: () => import('./component/Error_404/error_404'),
  loading: Loading,
});
const LOGIN = Loadable({
  loader: () => import('./container/Login/login.js'),
  loading: Loading,
});
const REQUEST = Loadable({
  loader: () => import('./container/Request/Request.js'),
  loading: Loading,
});
const TRANSCODEREQUEST = Loadable({
  loader: () => import('./container/Request/transcoding_request.js'),
  loading: Loading,
});
const SERVICE_DETAILS = Loadable({
  loader: () => import('./component/service_details/service_details.js'),
  loading: Loading,
});
const USER_DETAILS = Loadable({
  loader: () => import('./component/user_details/user_details.js'),
  loading: Loading,
});
const CONTACT_USER_DETAILS = Loadable({
  loader: () => import('./component/contact_user_details/contact_user_details.js'),
  loading: Loading,
});
const VIDEO_DETAILS = Loadable({
  loader: () => import('./component/video_details/video_details.js'),
  loading: Loading,
});
const SUBTITLEREQUEST = Loadable({
  loader: () => import('./container/Request/subtitle_request.js'),
  loading: Loading,
});
const TAGGINGREQUEST = Loadable({
  loader: () => import('./container/Request/tagging_request.js'),
  loading: Loading,
});
const VENDOR_LIST = Loadable({
  loader: () => import('./container/vendorlist/vendorlist.js'),
  loading: Loading,
});
const VENDOR_DETAILS = Loadable({
  loader: () => import('./component/vendor_details/vendor_details.js'),
  loading: Loading,
});
const VENDOR_SERVICE_DETAILS = Loadable({
  loader: () => import('./component/vendor_service_details/vendor_service_details.js'),
  loading: Loading,
});
const ASSIGN_TASK_TO_VENDOR = Loadable({
  loader: () => import('./container/assign_to_list/assign_to_list.js'),
  loading: Loading,
});
const VENDOR_PAYMENT = Loadable({
  loader: () => import('./container/Payment/payment.js'),
  loading: Loading,
});
const USERQUERY = Loadable({
  loader: () => import('./container/userQuery/userQuery.js'),
  loading: Loading,
});
const SELLER_LIST = Loadable({
  loader: () => import('./container/sellerlist/sellerlist.js'),
  loading: Loading,
});
const SELLER_DETAILS = Loadable({
  loader: () => import('./component/seller_details/seller_details.js'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
       { path: '/', exact: true, name: 'Home', component: DASHBOARD },
       { path: '/dashboard', name: 'Dashboard', component: HOME },
       { path: '/login', name: 'Login', component: LOGIN },
       { path: '/userlist', name: 'userlist', component: USERLIST},
       { path: '/userquery',name: 'userQuery', component: USERQUERY},
       { path: '/querydetails/:id',name: 'querydetails', component: CONTACT_USER_DETAILS},
      { path: '/upload', exact:true,name: 'upload', component: UPLOAD },
      { path: '/videolist', name: 'upload', component: VIDEOLIST },
      { path: '/upload/description/:id', name: 'upload', component: DESCRIPTION },
      { path: '/services/dubbing',exact:true, name: 'transcoding', component: REQUEST },
      { path: '/services/transcoding',exact:true, name: 'transcoding', component: TRANSCODEREQUEST },
      { path: '/services/subtitle',exact:true, name: 'transcoding', component: SUBTITLEREQUEST },
      { path: '/services/tagging',exact:true, name: 'tagging', component: TAGGINGREQUEST },
      { path: '/user/details/:id', name: 'user_details', component: USER_DETAILS },
      { path: '/video/details/:id', name: 'video_details', component: VIDEO_DETAILS },
      { path: '/services/:sname/details/:id', name: 'transcoding', component: SERVICE_DETAILS },
      { path: '/services/:sname/details:id', name: 'dubbing', component: SERVICE_DETAILS },
      { path: '/services/:sname/details:id', name: 'tagging', component: SERVICE_DETAILS },
      { path: '/vendor/list', name: 'vendor_list', component: VENDOR_LIST },
      { path: '/vendor/details/:id', exact:true,name: 'vendor_details', component: VENDOR_DETAILS },
      { path: '/vendor/details/:service/:id', name: 'vendor_service_details', component: VENDOR_SERVICE_DETAILS },
      { path: '/blog', name: 'Dashboard', component: HOME },
      //---------------------- Assign Task to Vendor-----------------------//
      {path:'/assign/:service_name/:id',name: 'assign task to vendor', component: ASSIGN_TASK_TO_VENDOR },
      {path:'/vendor/service/payment/:id',name: 'pay vendor', component: VENDOR_PAYMENT },

      // --------------- SELLER -------------------
      { path: '/seller/list', name: 'seller_list', component: SELLER_LIST },
      { path: '/seller/details/:id', exact:true,name: 'seller_details', component: SELLER_DETAILS },
      // { path: '*', name: 'Error', component: Error },
];

export default routes;
