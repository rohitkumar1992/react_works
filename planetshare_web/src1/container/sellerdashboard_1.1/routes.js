import React from 'react';
import Loadable from 'react-loadable';
import DASHBOARD from './dashboard/dashboard';

function Loading() {
  return <div>Loading...</div>;
}
const DATA = Loadable({
  loader: () => import('./homedashboard/homedashboard.js'),
  loading: Loading,
});
const LISTING = Loadable({
  loader: () => import('./mylisting/mylisting.js'),
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
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
   { path:'/dashboard',exact:true,name: 'Home',  component: DATA },
   { path:'/dashboard/seller/list',name: 'Home',  component: LISTING },
   { path:'/dashboard/seller/approvalrequest',exact:true,name: 'Home',  component: APPROVAL_REQUEST },
   { path:'/dashboard/seller/upload',exact:true,name: 'Home',  component: UPLOAD },
   { path:'/dashboard/vendor/transcoding',exact:true,name: 'Home',  component: TRANSCODING },
   { path:'/dashboard/vendor/dubbing',exact:true,name: 'Home',  component: APPROVAL_REQUEST },
   { path:'/dashboard/vendor/converter',exact:true,name: 'Home',  component: UPLOAD }
];

export default routes;
