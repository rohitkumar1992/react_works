import React from 'react';
import Loadable from 'react-loadable';
import DASHBOARD from './dashboard/dashboard';

function Loading() {
  return <div>Loading...</div>;
}
const DATA = Loadable({
  loader: () => import('./test.js'),
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
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
   { path:'/selleraccount',exact:true,name: 'Home',  component: DATA },
   { path:'/selleraccount/list',exact:true,name: 'Home',  component: LISTING },
   { path:'/selleraccount/approvalrequest',exact:true,name: 'Home',  component: APPROVAL_REQUEST },
   { path:'/selleraccount/upload',exact:true,name: 'Home',  component: UPLOAD }
];

export default routes;
