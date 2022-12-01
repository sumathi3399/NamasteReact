import img from "../../images/reactLogo.png";
import imgA from "../../images/avatar1.png";
import searchIcon from "../../images/search.png";
import './style.css';
import { useState } from "react";
const data= [
  {
    id:1,
    name:'Sumathi',
    company:'Capgemini',
    experience:"1.5 years",
    location:"Hyderabad"
  },
  {
    id:2,
    name:'Samridi',
    company:'HPE',
    experience:"6 years",
    location:"Noida"
  },
  {
    id:3,
    name:'Shivam Pandey',
    company:'Korber Supply Chain',
    experience:"1 year",
    location:"Mirzapur"
  },
  {
    id:4,
    name:'Uttapal',
    company:'Ramjas College',
    experience:"5th sem",
    location:"Vijay Nagar"
  },
  {
    id:5,
    name:'Harshitha Mangla',
    company:'GJUIST',
    experience:"7th sem",
    location:"Faridabad"
  },
  {
    id:6,
    name:'Pranav Kumar',
    company:'ITC Info tech',
    experience:"5 years",
    location:"Bengaluru"
  },
  {
    id:7,
    name:'Soumya Reddy',
    company:'Landmark Health',
    experience:"6 years",
    location:"Kithaganur"
  },
  {
    id:8,
    name:'Priya Suryawanshi',
    company:'Manhattan Assosiates',
    experience:"3 years",
    location:"NA"
  },
  {
    id:9,
    name:'Atul Kumar Singh',
    company:'Appiventiv Technologies',
    experience:"3 years",
    location:"Noida"
  },
  {
    id:10,
    name:'Prajwali Shetty',
    company:'Zeta',
    experience:"4 years",
    location:"Belikahalli"
  }
]
const searchResults = (input1)=>{
  const f = data.filter((e)=>{
    return e.name.includes(input1);
  })
  return f;
}
const Navbar = ({setFilteredData})=>{
    const [input1,setInput1]= useState('');

    return <div className="innerDiv">
<div className="logoDiv">
  <p className="logotext">STROM</p>
   <img className="logo" src={img} alt="imgLogo" />
   <p className="logotext">TROOPERS</p>
   </div>
   
    <form onSubmit={(e)=>{
      e.preventDefault();
      const filter = searchResults(input1);
      setFilteredData(filter)
    }}>
    <div className="searchBarDiv">
        <input className="searchBar" type="text" placeholder="search" onChange={(e)=>{
          setInput1(e.target.value)
        }} />
        <img className="searchIcon" src={searchIcon} alt="search" />
      </div>
      
      <button>search</button>
    </form>
      <img className="avatar" src={imgA} alt="imgAvatar" />

    </div>
}
export default Navbar;