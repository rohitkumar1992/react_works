import React from 'react';
const language = [
  { key: 'hin', value: 'Hindi',  label: 'Hindi' },
  { key: 'urd', value: 'Urdu',  label: 'Urdu' },
  { key: 'pun', value: 'Punjabi',  label: 'Punjabi' },
    { key: 'en', value: 'English',  label: 'English' },
  { key: 'mar', value: 'Marathi',  label: 'Marathi' },
  { key: 'guj', value: 'Gujarati',  label: 'Gujarati' },
  { key: 'tam', value: 'Tamil',  label: 'Tamil' },
  { key: 'bhoj', value: 'Bhojpuri' ,label: 'Bhojpuri' },
  { key: 'assa', value: 'Assamese',  label: 'Assamese' },
  { key: 'ben', value: 'Bengali',  label: 'Bengali' },
  { key: 'kan', value: 'Kannada',  label: 'Kannada' },
  { key: 'kas', value: 'Kashmiri', label: 'Kashmiri' },
  { key: 'mal', value: 'Malayalam',  label: 'Malayalam' },
  { key: 'ori', value: 'Oriya',  label: 'Oriya' },
  { key: 'tel', value: 'Telugu',  label: 'Telugu' },
  { key: 'sin', value: 'Sindhi',  label: 'Sindhi' },
  { key: 'pas' ,value:'Pashto',    label: 'Pashto ' },
  { key: 'ara', value: 'Arabic', label: 'Arabic' },
  { key: 'nep', value: 'Nepali',  label: 'Nepali' },
  { key: 'arm ',value: 'Armenian',  label:'Armenian  ' },
  { key: 'aze', value: 'Azerbaijani',  label: 'Azerbaijani ' },
  { key: 'bhu', value: 'Bhutanese',  label: ' Bhutanese  ' },
  { key: 'khm', value: 'Khmer',  label: 'Khmer ' },
  { key: 'chin', value: 'Chinese', label: 'Chinese ' },
  { key: 'per', value: 'Persian',  label: 'Persian ' },
  { key: 'heb', value: 'Hebrew',  label: 'Hebrew ' },
  { key: 'kur', value: 'Kurdish',  label: 'Kurdish' },
  { key: 'bahs', value: 'Bahasa Melayu',  label: 'Bahasa Melayu' },
  { key: 'mal', value: 'Maldivian',  label: 'Maldivian' },
  { key: 'burm', value: 'burm',  label: 'Burmese' },
  { key: 'sin', value: 'Sinhala',  label: ' Sinhala  ' },
  { key: 'tha', value: 'Thai', label: 'Thai' },
  { key: 'bn', value: 'Brunei', flag: 'labelbn', label: 'Brunei' },
  { key: 'bg', value: 'Bulgaria', flag: 'bg', label: 'Bulgaria' },
  { key: 'vie', value: 'Vietnamese', label: 'Vietnamese' },
  { key: 'phi', value: 'Philippines', label: 'Philippines' },
  { key: 'com', value: 'Cambodian',label: 'Cambodian' },
  { key: 'tur', value: 'Turkish',  label: 'Turkish' },
];
const data=()=>{
  return(language.map((result,key)=>{
  return(<option value={result.label} key={key}>{result.label}</option>);
}))
}
export default data;
