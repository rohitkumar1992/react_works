import React from 'react';
import Loadable from 'react-loadable';
import DASHBOARD from './dashboard/dashboard';

function Loading() {
  return <div>Loading...</div>;
}
const LANDINGPAGE = Loadable({
  loader: () => import('./landingpage/landingpage.js'),
  loading: Loading,
});
const APPROVAL_REQUEST = Loadable({
  loader: () => import('./approvalrequest/approvalrequest.js'),
  loading: Loading,
});
const UPLOAD = Loadable({
  loader: () => import('./chunkupload/resumable.js'),
  loading: Loading,
});
const TRANSCODING = Loadable({
  loader: () => import('./transcoding/transcoding.js'),
  loading: Loading,
});
const SELLERDASHBOARD = Loadable({
  loader: () => import('./seller_account/seller_account.js'),
  loading: Loading,
});
const LISTING = Loadable({
  loader: () => import('./mylisting/mylisting.js'),
  loading: Loading,
});
const EDITLISTING = Loadable({
  loader: () => import('./mylisting/editList.js'),
  loading: Loading,
});
const APPROVALREQUEST = Loadable({
  loader: () => import('./approvalrequest/approvalrequest.js'),
  loading: Loading,
});
const SELLERHOMEDATA = Loadable({
  loader: () => import('./homedashboard/homedashboard.js'),
  loading: Loading,
});
const DUBBINGGPAGE = Loadable({
  loader: () => import('./dubbing/dubbing.js'),
  loading: Loading,
});
const TRANSCODINGPAGE = Loadable({
  loader: () => import('./transcoding_service/transcoding.js'),
  loading: Loading,
});
const SUBTITLINGGPAGE = Loadable({
  loader: () => import('./subtitling_service/subtitling.js'),
  loading: Loading,
});
const ARCHIEVINGPAGE = Loadable({
  loader: () => import('./archieving_service/archieving_service.js'),
  loading: Loading,
});
const TAGGINGPAGE = Loadable({
  loader: () => import('./tagging_service/tagging_service.js'),
  loading: Loading,
});
const STREAMINGSERVICE = Loadable({
  loader: () => import('./streaming_service/archieving_service.js'),
  loading: Loading,
});
const SYNDICATIONPAGE = Loadable({
  loader: () => import('./syndication_service/syndication_service.js'),
  loading: Loading,
});
const VENDORLANDINGPAGE = Loadable({
  loader: () => import('./vendor_dashboard/Landing_Page/landing_page.js'),
  loading: Loading,
});
const ADDVENDORSERVICE = Loadable({
  loader: () => import('./vendor_dashboard/add_service/add_service.js'),
  loading: Loading,
});
const VENDORJOBS = Loadable({
  loader: () => import('./vendor_dashboard/list_jobs/list_jobs.js'),
  loading: Loading,
});
const VENDORSINGLEJOB = Loadable({
  loader: () => import('./vendor_dashboard/list_jobs/preview_page/preview_page.js'),
  loading: Loading,
});
const VENDORSERVICELIST = Loadable({
  loader: () => import('./vendor_dashboard/servicelist/servicelist.js'),
  loading: Loading,
});
const VENDORPROFILE = Loadable({
  loader: () => import('./vendor_dashboard/profile/profile.js'),
  loading: Loading,
});
const VENDOREDITPROFILE = Loadable({
  loader: () => import('./vendor_dashboard/profile/editProfile.js'),
  loading: Loading,
});
const VENDORPAYMENTOVERVIEW = Loadable({
  loader: () => import('./vendor_dashboard/payment_folder/payment_overview.js'),
  loading: Loading,
});
const SELLERLANDINGPAGE = Loadable({
  loader: () => import('./seller_dashboard/Landing_Page/landing_page'),
  loading: Loading,
});
const SELLERUPLOAD = Loadable({
  loader: () => import('./seller_dashboard/chunkupload/resumable'),
  loading: Loading,
});
const SELLERUPLOADDETAILS = Loadable({
  loader: () => import('./seller_dashboard/chunkupload/videodescription'),
  loading: Loading,
});
const SELLERPROFILE = Loadable({
  loader: () => import('./seller_dashboard/profile/profile.js'),
  loading: Loading,
});
const SELLEREDITPROFILE = Loadable({
  loader: () => import('./seller_dashboard/profile/editProfile.js'),
  loading: Loading,
});
const VENDORSINGLEJOBDETAILS = Loadable({
  loader: () => import('./vendor_dashboard/servicelist/vendor_service_details.js'),
  loading: Loading,
});
const VENDORADDBANK = Loadable({
  loader: () => import('./vendor_dashboard/bank_info/bank_info.js'),
  loading: Loading,
});
const SELLERADDBANK = Loadable({
  loader: () => import('./seller_dashboard/bank_info/bank_info.js'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
   { path:'/dashboard/buyer',exact:true,name: 'Home',  component: LANDINGPAGE },
    { path:'/dashboard/buyer/service',exact:true,name: 'Home',  component: LANDINGPAGE },
   { path:'/dashboard/buyer/service/transcoding',name: 'Home',  component: TRANSCODINGPAGE },
   { path:'/dashboard/buyer/service/tagging',name: 'Home',  component: TAGGINGPAGE },
    { path:'/dashboard/buyer/service/streaming',name: 'Home',  component: STREAMINGSERVICE },
   { path:'/dashboard/buyer/service/dubbing',name: 'Home',  component: DUBBINGGPAGE },
   { path:'/dashboard/buyer/service/subtitling',name: 'Home',  component: SUBTITLINGGPAGE },
   { path:'/dashboard/buyer/service/archieving',name: 'Home',  component: ARCHIEVINGPAGE },
   { path:'/dashboard/buyer/service/captioning',name: 'Home',  component: STREAMINGSERVICE },
   { path:'/dashboard/buyer/service/syndication',name: 'Home',  component: STREAMINGSERVICE },
   { path:'/dashboard/seller',exact:true,name: 'Home',  component: SELLERLANDINGPAGE },
   { path:'/dashboard/seller/mylist',name: 'sellerlist',  component: LISTING },
   { path:'/dashboard/seller/edit/:type/:id',name: 'sellerlist',  component: EDITLISTING },
    { path:'/dashboard/seller/edit/:type/:id',name: 'sellerlist',  component: EDITLISTING },
   { path:'/dashboard/seller/approvalrequest',name: 'Home',  component: APPROVALREQUEST },
   { path:'/dashboard/seller/upload',name: 'SellerUpload',  component: SELLERUPLOAD },
   { path:'/dashboard/seller/uploadDetails/:id',name: 'SellerUpload',  component: SELLERUPLOADDETAILS },
   { path:'/dashboard/vendor',exact:true,name: 'Home',  component: VENDORLANDINGPAGE },
   { path:'/dashboard/vendor/addservice',exact:true,name: 'Home',  component: ADDVENDORSERVICE },
   { path:'/dashboard/vendor/listservice',exact:true,name: 'Home',  component: VENDORLANDINGPAGE },
   { path:'/dashboard/vendor/listjobs',exact:true,name: 'ListJobs',  component: VENDORJOBS },
   { path:'/dashboard/vendor/servicelist',exact:true,name: 'servicelist',  component: VENDORSERVICELIST },
   { path:'/dashboard/vendor/profile',exact:true,name: 'Profile',  component: VENDORPROFILE },
   { path:'/dashboard/vendor/editprofile',exact:true,name: 'EditProfile',  component: VENDOREDITPROFILE },
   { path:'/dashboard/vendor/addbankdetails',exact:true,name: 'EditProfile',  component: VENDORADDBANK },
   { path:'/dashboard/seller/profile',exact:true,name: 'Profile',  component: SELLERPROFILE },
   { path:'/dashboard/seller/editprofile',exact:true,name: 'Profile',  component: SELLEREDITPROFILE },
    { path:'/dashboard/seller/addbankdetails',exact:true,name: 'BANKDETAILS',  component: SELLERADDBANK },
   { path:'/dashboard/vendor/payment_overview',exact:true,name: 'Payment Overview',  component: VENDORPAYMENTOVERVIEW },
   { path:'/dashboard/vendor/:jobType/details/',exact:true,name: 'SingleJobDetails',  component: VENDORSINGLEJOBDETAILS },
   { path:'/dashboard/vendor/:jobType/singlejob/:id',exact:true,name: 'ListSingleJobs',  component: VENDORSINGLEJOB },
];

export default routes;
