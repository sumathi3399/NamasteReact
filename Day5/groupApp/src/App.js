import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/Navbar.js";

import Info from './Info/Info.js';

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

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => {
  const [filteredData, setFilteredData] = useState(data);
  // const [inputText,setInput] = useState("");
  // const dataMain = data.filter((e)=>{

  //   return e.name.includes(inputText);
  // });
  return (
    <div className="mainPage">
      <Navbar setFilteredData={setFilteredData} />
      <div className="bottomDiv"> 
        
        {filteredData.map((e)=>{
          return <Info key={e.id} details={e} />;
        })}
      </div>
    </div>
  );
};
root.render(<HeadingComponent />);
