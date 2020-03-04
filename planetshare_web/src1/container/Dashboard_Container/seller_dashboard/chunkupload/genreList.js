import React from 'react';


const shortfilms=[
  {value:"Absurdist/surreal/whimsical",label:"Absurdist/surreal/whimsical"},
    {value:"Action",label:"Action"},
    {value:"Adventure",label:"Adventure"},
    {value:"Comedy",label:"Comedy"},
    {value:"Crime",label:"Crime"},
    {value:"Drama",label:"Drama"},
    {value:"Fantasy",label:"Fantasy"},
    {value:"Historical",label:"Historical"},
    {value:"Historicalfiction",label:"Historical fiction"},
    {value:"Horror",label:"Horror"},
    {value:"Magicalrealism",label:"Magical Realism"},
    {value:"Mystery",label:"Mystery"},
    {value:"Philosophical",label:"Philosophical"},
    {value:"Romance",label:"Romance"},
    {value:"Political",label:"Political"},
    {value:"Paranoidfiction",label:"Paranoid Fiction"},
    {value:"Saga",label:"Saga"},
    {value:"Satire",label:"Satire"},
    {value:"Sciencefiction(Sci-Fi)",label:"Science fiction (Sci-Fi)"},
    {value:"Social",label:"Social"},
    {value:"Speculative",label:"Speculative"},
    {value:"Thriller",label:"Thriller"},
    {value:"Urban",label:"Urban"},
    {value:"Noir",label:"Noir"},
    {value:"NeoNoir",label:"Neo-Noir"},
    {value:"Supernatural",label:"Supernatural"},
    {value:"TechNoir",label:"Tech-Noir"},
    {value:"Cyberpunk",label:"Cyber Punk"},
    {value:"Dystopian",label:"Dystopian"},
    {value:"Utopian",label:"Utopian"},
    {value:"Western",label:"Western"},
    {value:"Nonverbal",label:"Non-Verbal"},
    {value:"DarkComedy/BlackComedy",label:"Dark Comedy/Black Comedy"},

  ];
const webseries=[{value:"Action",label:"Action"},
{value:"Adventure",label:"Adventure"},
{value:"Comedy",label:"Comedy"},
{value:"Crime",label:"Crime"},
{value:"Drama",label:"Drama"},
{value:"Fantasy",label:"Fantasy"},
{value:"Historical",label:"Historical"},
{value:"Historicalfiction",label:"Historical fiction"},
{value:"Horror",label:"Horror"},
{value:"Magicalrealism",label:"Magical Realism"},
{value:"Mystery",label:"Mystery"},
{value:"Romance",label:"Romance"},
{value:"Political",label:"Political"},
{value:"Paranoidfiction",label:"Paranoid Fiction"},
{value:"Saga",label:"Saga"},
{value:"Satire",label:"Satire"},
{value:"Sciencefiction(Sci-Fi)",label:"Science fiction (Sci-Fi)"},
{value:"Social",label:"Social"},
{value:"Speculative",label:"Speculative"},
{value:"Thriller",label:"Thriller"},
{value:"Urban",label:"Urban"},
{value:"Noir",label:"Noir"},
{value:"NeoNoir",label:"Neo-Noir"},
{value:"Supernatural",label:"Supernatural"},
{value:"Utopian",label:"Utopian"},
{value:"Western",label:"Western"},
{value:"Nonverbal",label:"Non-Verbal"},
{value:"TechNoir",label:"Tech-Noir"},
{value:"Cyberpunk",label:"Cyber Punk"},
{value:"Dystopian",label:"Dystopian"},];
const tvseries=[{value:"Action",label:"Action"},
{value:"Adventure",label:"Adventure"},
{value:"Comedy",label:"Comedy"},
{value:"Crime",label:"Crime"},
{value:"Western",label:"Western"},
{value:"Dystopian",label:"Dystopian"},
{value:"Periodicdrama",label:"Periodic Drama"},
{value:"Costumedrama",label:"Costume Drama"},
{value:"Drama",label:"Drama"},
{value:"Fantasy",label:"Fantasy"},
{value:"Historical",label:"Historical"},
{value:"Historicalfiction",label:"Historical fiction"},
{value:"Horror",label:"Horror"},
{value:"Magicalrealism",label:"Magical Realism"},
{value:"Mystery",label:"Mystery"},
{value:"Romance",label:"Romance"},
{value:"Political",label:"Political"},
{value:"Thriller",label:"Thriller"},
{value:"Spoof",label:"Spoof"},
{value:"Melodrama",label:"Melodrama"},
{value:"Perody",label:"Perody"},
{value:"Epic",label:"Epic"},
{value:"Supernatural",label:"Supernatural"},
{value:"Sciencefiction(Sci-Fi)",label:"Science fiction (Sci-Fi)"},
];
const documentary=[{value:"Celebrity",label:"Celebrity"},
{value:"Factual",label:"Factual"},
{value:"Industry",label:"Industry"},
{value:"Political",label:"Political"},
{value:"Animal",label:"Animal"},
{value:"Travel",label:"Travel"},
{value:"Person",label:"Person"},
{value:"Disaster",label:"Disaster"},
{value:"Nature",label:"Nature"},
{value:"Wildlife",label:"Wildlife"},
{value:"Sports",label:"Sports"},
{value:"Food",label:"Food"},
{value:"Mockumentary",label:"Mockumentary"},
{value:"Festival",label:"Festival"},
{value:"Culinary",label:"Culinary"},
{value:"Culture",label:"Culture"},];
const animation=[{value:"Nonverbal",label:"Non-Verbal"},
{value:"Comedy",label:"Comedy"},
{value:"Action",label:"Action"},
{value:"Musical",label:"Musical"},
{value:"Live-action",label:"Live-action"},
{value:"Puppetshow",label:"Puppet Show"},
{value:"Claymation",label:"Claymation"},
{value:"Cutout Animation",label:"Cutout Animation"},
{value:"Stopmotion",label:"Stopmotion"}];
const movie=[{
  value:"Absurdist/surreal/whimsical",label:"Absurdist/surreal/whimsical"},
  {value:"Action",label:"Action"},
  {value:"Adventure",label:"Adventure"},
  {value:"Comedy",label:"Comedy"},
  {value:"Crime",label:"Crime"},
  {value:"Drama",label:"Drama"},
  {value:"Fantasy",label:"Fantasy"},
  {value:"Historical",label:"Historical"},
  {value:"Historicalfiction",label:"Historical fiction"},
  {value:"Horror",label:"Horror"},
  {value:"Magicalrealism",label:"Magical Realism"},
  {value:"Mystery",label:"Mystery"},
  {value:"Philosophical",label:"Philosophical"},
  {value:"Romance",label:"Romance"},
  {value:"Political",label:"Political"},
  {value:"Paranoidfiction",label:"Paranoid Fiction"},
  {value:"Saga",label:"Saga"},
  {value:"Satire",label:"Satire"},
  {value:"Sciencefiction(Sci-Fi)",label:"Science fiction (Sci-Fi)"},
  {value:"Social",label:"Social"},
  {value:"Speculative",label:"Speculative"},
  {value:"Thriller",label:"Thriller"},
  {value:"Urban",label:"Urban"},
  {value:"Western",label:"Western"},
  {value:"Noir",label:"Noir"},
  {value:"NeoNoir",label:"Neo-Noir"},
  {value:"TechNoir",label:"Tech-Noir"},
  {value:"Cyberpunk",label:"Cyber Punk"},
  {value:"Dystopian",label:"Dystopian"},
  {value:"Utopian",label:"Utopian"},
  {value:"DarkComedy/BlackComedy",label:"Dark Comedy/Black Comedy"},
  {value:"Supernatural",label:"Supernatural"},
  {value:"Musical",label:"Musical"},
  {value:"Biopic",label:"Biopic"},
  {value:"Animation",label:"Animation"},
  {value:"Classical",label:"Classical"},
  {value:"Disaster",label:"Disaster"},
  {value:"Courtroomdrama",label:"Courtroom Drama"},
  {value:"Cult",label:"Cult"},
  {value:"Monster",label:"Monster"},
  {value:"Road",label:"Road"},
  {value:"Romance",label:"Romance"},
  {value:"Superhero",label:"Superhero"},
  {value:"Zombie",label:"Zombie"},
  {value:"Vampire",label:"Vampire"},
  {value:"Alien",label:"Alien"},
  {value:"Espionage",label:"Espionage"},
  {value:"Femmefatale",label:"Femme Fatale"},
  {value:"Spoof",label:"Spoof"},
  {value:"Perody",label:"Perody"},
  {value:"Biblical",label:"Biblical"},
  {value:"Postapocalypse",label:"Post-Apocalypse"},
  {value:"Fairytale",label:"Fairy Tale"},
  {value:"Chickflick",label:"Chick Flick"},
  {value:"Detective",label:"Detective"},
  {value:"Martialarts",label:"Martial Arts"},
];
class Genre extends React.Component{
  render()
  {
    if(this.props.catName=="movie")
    {
        return(movie.map((result,key)=>{
          return(<option value={result.value}>{result.label}</option>)
        }));
    }
    if(this.props.catName=="shortfilm")
    {
        return(shortfilms.map((result,key)=>{
          return(<option value={result.value}>{result.label}</option>)
        }));
    }
    if(this.props.catName=="webseries")
    {
        return(webseries.map((result,key)=>{
          return(<option value={result.value}>{result.label}</option>)
        }));
    }
    if(this.props.catName=="tvseries")
    {
        return(tvseries.map((result,key)=>{
          return(<option value={result.value}>{result.label}</option>)
        }));
    }
    if(this.props.catName=="documentary")
    {
        return(documentary.map((result,key)=>{
          return(<option value={result.value}>{result.label}</option>)
        }));
    }
    if(this.props.catName=="animation")
    {
        return(animation.map((result,key)=>{
          return(<option value={result.value}>{result.label}</option>)
        }));
    }
  }
}
export default Genre;
