import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";
const countryOptions = [
  { key: 'hin', value: 'hin',  text: 'Hindi' },
  { key: 'urd', value: 'urd',  text: 'Urdu' },
  { key: 'pun', value: 'pun',  text: 'Punjabi' },
    { key: 'en', value: 'en',  text: 'English' },
  { key: 'mar', value: 'mar',  text: 'Marathi' },
  { key: 'guj', value: 'guj',  text: 'Gujarati' },
  { key: 'tam', value: 'tam',  text: 'Tamil' },
  { key: 'bhoj', value: 'bhoj' ,text: 'Bhojpuri' },
  { key: 'assa', value: 'assa',  text: 'Assamese' },
  { key: 'ben', value: 'ben',  text: 'Bengali' },
  { key: 'kan', value: 'kan',  text: 'Kannada' },
  { key: 'kas', value: 'kas', text: 'Kashmiri' },
  { key: 'mal', value: 'mal',  text: 'Malayalam' },
  { key: 'ori', value: 'ori',  text: 'Oriya' },
  { key: 'tel', value: 'tel',  text: 'Telugu' },
  { key: 'sin', value: 'sin',  text: 'Sindhi' },
  { key: 'pas' ,value:'pas',    text: 'Pashto ' },
  { key: 'ara', value: 'ara', text: 'Arabic' },
  { key: 'nep', value: 'nep',  text: 'Nepali' },
  { key: 'arm ',value: 'arm',  text:'Armenian  ' },
  { key: 'aze', value: 'aze',  text: 'Azerbaijani ' },
  { key: 'bhu', value: 'bhu',  text: ' Bhutanese  ' },
  { key: 'khm', value: 'khm',  text: 'Khmer ' },
  { key: 'chin', value: 'chin', text: 'Chinese ' },
  { key: 'per', value: 'per',  text: 'Persian ' },
  { key: 'heb', value: 'heb',  text: 'Hebrew ' },
  { key: 'kur', value: 'kur',  text: 'Kurdish' },
  { key: 'bahs', value: 'bahs',  text: 'Bahasa Melayu' },
  { key: 'mal', value: 'mal',  text: 'Maldivian' },
  { key: 'burm', value: 'burm',  text: 'Burmese' },
  { key: 'sin', value: 'sin',  text: ' Sinhala  ' },
  { key: 'tha', value: 'tha', text: 'Thai' },
  { key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei' },
  { key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria' },
  { key: 'vie', value: 'vie', text: 'Vietnamese' },
  { key: 'phi', value: 'phi', text: 'Philippines' },
  { key: 'com', value: 'com',text: 'Cambodian' },
  { key: 'tur', value: 'tur',  text: 'Turkish' },

]
class TranscodeForm extends Component {
  render() {
    const list=countryOptions.map((result,key)=>{
      return(<option value={result.text}>{result.text}</option>)
    })
    return (
  <datalist id={this.props.Id}>
{list}
  </datalist>
        )
}
}
export default withRouter(TranscodeForm);
