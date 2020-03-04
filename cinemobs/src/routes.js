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
const SEARCH_PAGE = Loadable({
  loader: () => import('./container/search_result/search_result.js'),
  loading: Loading,
});
const COLLECTION_DATA=Loadable({
  loader: () => import('./component/Tabs/tabs.js'),
  loading: Loading,
});
const VIEW_MORE = Loadable({
  loader: () => import('./container/ViewMore/ViewMore.js'),
  loading: Loading,
});
const PLAYLIST_DATA = Loadable({
  loader: () => import('./container/Playlist/playlist.js'),
  loading: Loading,
});
const PLAYLIST_VIDEOS = Loadable({
  loader: () => import('./container/Playlist/playlist_video.js'),
  loading: Loading,
});
const USER_PROFILE=Loadable({
  loader: () => import('./container/profile/profile.js'),
  loading: Loading,
});
const SEASON_EPISODES=Loadable({
  loader: () => import('./container/seasons/seasons.js'),
  loading: Loading,
});
const TICKET=Loadable({
  loader: () => import('./container/ticket/ticket.js'),
  loading: Loading,
});
const TRANSCATION=Loadable({
  loader: () => import('./container/transaction/transaction.js'),
  loading: Loading,
});
const CONTACTUS=Loadable({
  loader: () => import('./container/contactus/contactus.js'),
  loading: Loading,
});
const PAYMENT=Loadable({
  loader: () => import('./container/payment/payment.js'),
  loading: Loading,
});
const LIVE_TV=Loadable({
  loader: () => import('./container/LiveTv/LiveTv.js'),
  loading: Loading,
});
const VIEWMOREPASS=Loadable({  loader: () => import('./container/ViewMore/ViewMorePass.js'),
  loading: Loading,})
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

    { path:'/',exact:true,name: 'Home',  component: HOME },
  //  { path:'/home/:id',exact:true,name: 'Home',  component: HOME },
   { path:'/:menu_name/:id',exact:true,name: 'Cat_Page',  component: VIDEO_DATA },
   { path:'/cat/:menu_name/:cat_name/:id',exact:true,name: 'Cat_Page',  component: CATEGORY_DATA },
   { path:'/video/:video_name/:video_id',exact:true,name: 'Video',  component: VIDEO_INFO },
   {path:'/cinemobs_search/search_keyword=/cinemobs@521/:word' ,exact:true,name:'Search',component:SEARCH_PAGE},
   { path:'/:menu_name/collectionh/:cat_name/:catId',exact:true,name: 'Collection',  component: VIEW_MORE },
   { path:'/:menu_name/collectionv/:cat_name/:catId',exact:true,name: 'Collection',  component: VIEW_MORE },
   { path:'/:menu_name/collection/season/:cat_name/:catId',exact:true,name: 'Collection',  component: VIEWMOREPASS },
   { path:'/collection',exact:true,name: 'Collection',  component: COLLECTION_DATA },
   { path:'/playlist',exact:true,name: 'Playlist',  component: PLAYLIST_DATA },
   { path:'/season/:season_name/:season_id',exact:true,name: 'Seasons',  component: SEASON_EPISODES },
   { path:'/playlist/:name/:id',exact:true,name: 'Playlist',  component: PLAYLIST_VIDEOS },
    { path:'/cinemobs_user/profile/:user_id',exact:true,name: 'UserProfile',  component: USER_PROFILE },
    {path:'/:menu_name/kog_livetv/:id' ,exact:true,name:'LiveTv',component:LIVE_TV},
    { path:'/contactus',exact:true,name: 'Playlist',  component: CONTACTUS },
    { path:'/aboutus',exact:true,name: 'aboutus',  component: CONTACTUS },
    { path:'/ticket',exact:true,name: 'ticket',  component: TICKET },
    { path:'/transaction',exact:true,name: 'transcation',  component: TRANSCATION },

    { path:'/payment',exact:true,name: 'transcation',  component: PAYMENT },

    { path:'*',exact:true,name: 'Not Found',  component: NOT_FOUND },
];

export default routes;
