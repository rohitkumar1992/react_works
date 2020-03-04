import React from 'react';
import Loadable from 'react-loadable';
function Loading() {
  return <div>Loading...</div>;
}
const HOME = Loadable({
  loader: () => import('./container/Home/home.js'),
  loading: Loading,
});
const VIDEO_DATA = Loadable({
  loader: () => import('./container/Movies/movies.js'),
  loading: Loading,
});
const CATEGORY_DATA = Loadable({
  loader: () => import('./container/Category/category_list.js'),
  loading: Loading,
});
const VIDEO_INFO = Loadable({
  loader: () => import('./container/video_info/video_info.js'),
  loading: Loading,
});
const NOT_FOUND = Loadable({
  loader: () => import('./component/not_found/not_found.js'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

    { path:'/',exact:true,name: 'Home',  component: HOME },
    // { path:'/home/:id',exact:true,name: 'Home',  component: HOME },
   { path:'/:menu_name/:id',exact:true,name: 'Cat_Page',  component: VIDEO_DATA },
   { path:'/cat/:menu_name/:cat_name/:id',exact:true,name: 'Cat_Page',  component: CATEGORY_DATA },
   { path:'/video/:video_name/:video_id',exact:true,name: 'Video',  component: VIDEO_INFO },
   { path:'/not_found',exact:true,name: 'Not Found',  component: NOT_FOUND },
   { path:'*',exact:true,name: 'Not Found',  component: NOT_FOUND },
];

export default routes;
