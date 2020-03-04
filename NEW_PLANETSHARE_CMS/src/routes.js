import React from 'react';
import Loadable from 'react-loadable';
function Loading() {
  return <div>Loading...</div>;
}
const HOME = Loadable({
  loader: () => import('./Container/Home/home.js'),
  loading: Loading,
});
const USER_LIST = Loadable({
  loader: () => import('./Container/UserList/UserList.js'),
  loading: Loading,
});
const NOT_FOUND = Loadable({
  loader: () => import('./Component/notfound.js'),
  loading: Loading,
});
const SELLER_LIST = Loadable({
  loader: () => import('./Container/Seller/sellerlist.js'),
  loading: Loading,
});
const SELLR_IMAGE_LIST = Loadable({
  loader: () => import('./Container/Seller/imagelist.js'),
  loading: Loading,
});
const SELLER_VIDEO_LIST = Loadable({
  loader: () => import('./Container/Seller/videolist.js'),
  loading: Loading,
});
const VENDOR_LIST = Loadable({
  loader: () => import('./Container/Vendor/vendorlist.js'),
  loading: Loading,
});
const CREATE_VENDOR=Loadable({
  loader: () => import('./Container/Vendor/create_vendor.js'),
  loading: Loading,
});
const VENDOR_SERVICE_LIST = Loadable({
  loader: () => import('./Container/Vendor/vendorservicelist.js'),
  loading: Loading,
});
const VENDOR_INFORMATION = Loadable({
  loader: () => import('./Container/Vendor/vendorinfo.js'),
  loading: Loading,
});
const VENDOR_GIG_LIST = Loadable({
  loader: () => import('./Container/Vendor/vendorgiglist.js'),
  loading: Loading,
});
const PACKS = Loadable({
  loader: () => import('./Container/Packs/packs.js'),
  loading: Loading,
});
const ORDERS = Loadable({
  loader: () => import('./Container/Orders/orders.js'),
  loading: Loading,
});
const CONTACTLIST = Loadable({
  loader: () => import('./Container/Contact/contactlist.js'),
  loading: Loading,
});
const PACKSCREATE = Loadable({
  loader: () => import('./Container/Packs/createpack.js'),
  loading: Loading,
});
const CATEGORIES = Loadable({
  loader: () => import('./Container/SellerCategories/category.js'),
  loading: Loading,
});
const SELLER_BIDDING_CONTENT = Loadable({
  loader: () => import('./Container/Bidding/bid_content.js'),
  loading: Loading,
});
const SELLER_BID_DESC = Loadable({
  loader: () => import('./Container/Bidding/bid_list_desc.js'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

    { path:'/',exact:true,name: 'Home',  component: HOME },
    { path:'/userlist',exact:true,name: 'UserList',  component: USER_LIST },
    { path:'/packs',exact:true,name: 'Packs',  component: PACKS },
    { path:'/orders',exact:true,name: 'Orders',  component: ORDERS },
    { path:'/contactlist',exact:true,name: 'contactlist',  component: CONTACTLIST },
    { path:'/packs/create',exact:true,name: 'PacksCreate',  component: PACKSCREATE },
    { path:'/seller',exact:true,name: 'UserList',  component: SELLER_LIST },
    { path:'/seller/categories',exact:true,name: 'Category',  component: CATEGORIES },
    { path:'/seller/imagelist',exact:true,name: 'UserList',  component: SELLR_IMAGE_LIST },
    { path:'/seller/videolist',exact:true,name: 'UserList',  component: SELLER_VIDEO_LIST },
    { path:'/seller/bidding',exact:true,name: 'Bidding',  component: SELLER_BIDDING_CONTENT },
    { path:'/seller/bidding/bid_desc/:bid_id',exact:true,name: 'Bidding Desc',  component: SELLER_BID_DESC },
    { path:'/vendor',exact:true,name: 'VendorList',  component: VENDOR_LIST },
    { path:'/createVendor',exact:true,name: 'Create Vendor',  component: CREATE_VENDOR },
    { path:'/vendor/servicelist',exact:true,name: 'VendorServiceList',  component: VENDOR_SERVICE_LIST },
    { path:'/vendor/gigList',exact:true,name: 'VendorGigList',  component: VENDOR_GIG_LIST },
    { path:'/vendor/info/:vendor_id',exact:true,name: 'VendorInfo',  component: VENDOR_INFORMATION },
    { path:'*',exact:true,name: 'Not Found',  component: NOT_FOUND },
];

export default routes;
