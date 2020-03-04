import React from 'react';
import {Dropdown} from 'primereact/dropdown';
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
const Dropdowns=(props)=>{
  return(<Dropdown optionLabel={props.optionLabel}  value={props.selectVal} filter={true} filterPlaceholder={props.filterPlaceholder} options={props.list} onChange={(e) =>props.onChangeSelect(e.value)}  placeholder={props.placeholder}/>)
}
export default Dropdowns;
