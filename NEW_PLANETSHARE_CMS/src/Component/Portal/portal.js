
import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player';
import $ from 'jquery';
import ActivityLoader from 'react-loader-spinner';
const modalRoot=document.getElementById('portal_modal');

const Modal =(props)=>{
  // console.log(props.result)
  return ReactDOM.createPortal(
      <div className={props.modalType=="seller_info"} style={{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        display:'grid',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.3)'
      }} >
      {(props.modalType=="seller_info") && <div class="modal-dialog sdvd_info" role="document" style={{width:500}}>
      <div class="modal-content">
      <div class="modal-header text-center">
      <h4 class="modal-title">Seller Description ({props.result.Accountid})</h4>
        <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
      </div>

        <div class="vd_info_desc">
          <div class="box l">
            <div class="img_box">
              <img src={props.result.profile_pic} alt="" />
            </div>
          </div>
          <div class="box r">
            <ul class="vd_info_list">
              <li>
                <p><span>Display Name :</span> <span class="vl">{props.result.display_name}</span></p>
              </li>
              <li>
                <p><span>User Id :</span> <span class="vl">{props.result.user_id}</span></p>
              </li>
              <li>
                <p><span>Phone Number :</span> <span class="vl">{props.result.phone_number}</span></p>
              </li>
              <li>
                <p><span>Company Info :</span> <span class="vl">{props.result.company_info}</span></p>
              </li>
              <li>
                <p><span>Account Id :</span> <span class="vl">{props.result.Accountid}</span></p>
              </li>
              <li>
                <p><span>Bank Name :</span> <span class="vl">{props.result.bank_name}</span></p>
              </li>
              <li>
                <p><span>Account Number :</span> <span class="vl">{props.result.account_number}</span></p>
              </li>
              <li>
                <p><span>Account Holder Name :</span> <span class="vl">{props.result.account_holder_name}</span></p>
              </li>
              <li>
                <p><span>IFSC Code :</span> <span class="vl">{props.result.ifsc_code}</span></p>
              </li>
              <li>
                <p><span>Pancard :</span> <span class="vl">{props.result.pancard}</span></p>
              </li>
              <li>
                <p><span>Aadharcard :</span> <span class="vl">{props.result.aadharcard}</span></p>
              </li>
              <li>
                <p><span>Created At :</span> <span class="vl">{props.result.created_at}</span></p>
              </li>
              <li>
                <p><span>Country :</span> <span class="vl">{props.result.country}</span></p>
              </li>
              <li>
                <p><span>City :</span> <span class="vl">{props.result.city}</span></p>
              </li>
              <li>
                <p><span>Pincode :</span> <span class="vl">{props.result.pincode}</span></p>
              </li>
              <li>
                <p><span>Message :</span> <span class="vl">{props.result.msg}</span></p>
              </li>
              <li class="fw">
                <p><span>Address :</span> <span class="vl">{props.result.address}</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </div>}
      {(props.modalType=="vendor_info") && <div class="modal-dialog sdvd_info" role="document" style={{width:500}}>
      <div class="modal-content">
      <div class="modal-header text-center">
      <h4 class="modal-title">Vendor Description ({props.result.Accountid})</h4>
        <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
      </div>

        <div class="vd_info_desc">
          <div class="box l">
            <div class="img_box">
              <img src={props.result.profile_pic} alt="" />
            </div>
          </div>
          <div class="box r">
            <ul class="vd_info_list">
              <li>
                <p><span>Display Name :</span> <span class="vl">{props.result.display_name}</span></p>
              </li>
              <li>
                <p><span>User ID :</span> <span class="vl">{props.result.user_id}</span></p>
              </li>
              <li>
                <p><span>First Name :</span> <span class="vl">{props.result.fname}</span></p>
              </li>
              <li>
                <p><span>Last Name :</span> <span class="vl">{props.result.lname}</span></p>
              </li>
              <li>
                <p><span>Phone Number :</span> <span class="vl">{props.result.phone_number}</span></p>
              </li>
              <li>
                <p><span>Company Info :</span> <span class="vl">{props.result.company_info}</span></p>
              </li>
              <li>
                <p><span>Account Id :</span> <span class="vl">{props.result.Accountid}</span></p>
              </li>
              <li>
                <p><span>Bank Name :</span> <span class="vl">{props.result.bank_name}</span></p>
              </li>
              <li>
                <p><span>Account Number :</span> <span class="vl">{props.result.account_number}</span></p>
              </li>
              <li>
                <p><span>Account Holder Name :</span> <span class="vl">{props.result.account_holder_name}</span></p>
              </li>
              <li>
                <p><span>IFSC Code :</span> <span class="vl">{props.result.ifsc_code}</span></p>
              </li>
              <li>
                <p><span>Pancard :</span> <span class="vl">{props.result.pancard}</span></p>
              </li>
              <li>
                <p><span>Aadharcard :</span> <span class="vl">{props.result.aadharcard}</span></p>
              </li>
              <li>
                <p><span>Country :</span> <span class="vl">{props.result.country}</span></p>
              </li>
              <li>
                <p><span>State :</span> <span class="vl">{props.result.state}</span></p>
              </li>
              <li>
                <p><span>City :</span> <span class="vl">{props.result.city}</span></p>
              </li>
              <li>
                <p><span>Pincode :</span> <span class="vl">{props.result.pincode}</span></p>
              </li>
              <li>
                <p><span>Created At :</span> <span class="vl">{props.result.created_at}</span></p>
              </li>
              <li>
                <p><span>Status :</span> <span class="vl">{props.result.status}</span></p>
              </li>
              <li>
                <p><span>Message :</span> <span class="vl">{props.result.msg}</span></p>
              </li>
              <li>
                <p><span>Personal Website :</span> <span class="vl">{props.result.personal_website}</span></p>
              </li>
              <li class="fw">
                <p><span>Address :</span> <span class="vl">{props.result.address}</span></p>
              </li>
              <li class="fw">
                <p><span>Description :</span> <span class="vl">{props.result.description}</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </div>}
          </div>,modalRoot
    )
}
export default Modal;
