import React from 'react';
import Loadable from 'react-loadable';
import WEBSITE from './component/Website_home_container/website_home_container';
import Seller from './container/Dashboard_Container/dashboard/dashboard.js';
function Loading() {
  return <div>Loading...</div>;
}
const VIDEOHOMEPAGE = Loadable({
  loader: () => import('./component/innerpage/innerpage.js'),
  loading: Loading,
});
const SEARCHPAGE = Loadable({
  loader: () => import('./component/searchpage/searchpage.js'),
  loading: Loading,
});
const TranscodingService = Loadable({
  loader: () => import('./component/transcoding_service/transcoding_service.js'),
  loading: Loading,
});
const DubbingService = Loadable({
  loader: () => import('./component/dubbing_service/dubbing_service.js'),
  loading: Loading,
});
const TaggingService = Loadable({
  loader: () => import('./component/tagging_service/tagging_service.js'),
  loading: Loading,
});
const StreamingService = Loadable({
  loader: () => import('./component/streaming_service/streaming_service.js'),
  loading: Loading,
});
const ArchievingService = Loadable({
  loader: () => import('./component/archieving_service/archieving_service.js'),
  loading: Loading,
});
const SubtitlingService = Loadable({
  loader: () => import('./component/subtitling_service/subtitling_service.js'),
  loading: Loading,
});
const SyndicationService = Loadable({
  loader: () => import('./component/syndication_service/syndication_service.js'),
  loading: Loading,
});
const CaptioningService = Loadable({
  loader: () => import('./component/captioning_service/captioning_service.js'),
  loading: Loading,
});
const CATEGORY_COMPONENT = Loadable({
  loader: () => import('./component/category_component/category_component.js'),
  loading: Loading,
});
const SELLERREGISTER = Loadable({
  loader: () => import('./component/seller_register/seller_register.js'),
  loading: Loading,
});
const VENDORREGISTER = Loadable({
  loader: () => import('./component/vendor_register/vendor_register.js'),
  loading: Loading,
});
const ABOUTUS = Loadable({
  loader: () => import('./component/Aboutus/aboutus.js'),
  loading: Loading,
});
const CONTACTUS = Loadable({
  loader: () => import('./component/Contactus/contactus.js'),
  loading: Loading,
});
const PRIVACY = Loadable({
  loader: () => import('./component/privacy_policy/privacy_policy.js'),
  loading: Loading,
});
const TERMS = Loadable({
  loader: () => import('./component/terms_conditions/terms_condition.js'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

    { path:'/web',exact:true,name: 'Home',  component: WEBSITE },
    { path:'/web/category/:cat_name',name: 'Home',  component: CATEGORY_COMPONENT },
   { path:'/web/video_land/:id',exact:true,name: 'Home',  component: VIDEOHOMEPAGE },
    // { path:'/web/search/:id',exact:true,name: 'Home',  component: VIDEOHOMEPAGE },
   { path:'/web/search/:keyword',exact:true,name: 'Search',  component: SEARCHPAGE },
   { path:'/web/seller_registration',exact:true,name: 'Search',  component: SELLERREGISTER },
   { path:'/web/vendor_registration',exact:true,name: 'Search',  component: VENDORREGISTER },
   { path:'/web/transcoding_service',exact:true,name: 'Search',  component: TranscodingService },
  { path:'/web/dubbing_service',exact:true,name: 'Search',  component: DubbingService },
  { path:'/web/tagging_service',exact:true,name: 'Search',  component: TaggingService },
 { path:'/web/streaming_service',exact:true,name: 'Search',  component: StreamingService },
 { path:'/web/captioning_service',exact:true,name: 'Search',  component: CaptioningService },
{ path:'/web/subtitling_service',exact:true,name: 'Search',  component: SubtitlingService },
{ path:'/web/archieving_service',exact:true,name: 'Search',  component: ArchievingService },
{ path:'/web/content syndication_service',exact:true,name: 'Search',  component: SyndicationService },
{ path:'/web/aboutus',exact:true,name: 'About',  component: ABOUTUS },
{ path:'/web/contactus',exact:true,name: 'Contact',  component: CONTACTUS },
{ path:'/web/privacy_policy',exact:true,name: 'policy',  component: PRIVACY },
{ path:'/web/terms_condition',exact:true,name: 'terms',  component: TERMS },
];

export default routes;
