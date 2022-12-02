import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/Navbar.js";
import data from "./data.json";
import Info from "./Info/Info.js";
import searchIcon from "../images/search.png";
const root = ReactDOM.createRoot(document.getElementById("root"));

const searchResults = (input1)=>{

  const f = data.filter((e)=>{
    return e.name.includes(input1);
  })
  return f;
}

const SearchBar = ({setFilteredData}) => {
  const [input1,setInput1]= useState('');
  return (
    <form className="searchBarCont"
      onSubmit={(e) => {
        e.preventDefault();
        const filter = searchResults(input1);
        setFilteredData(filter);
      }}
    >
      <div className="searchBarDiv">
        <input
          className="searchBar"
          type="text"
          placeholder="search"
          onChange={(e) => {
            setInput1(e.target.value);
          }}
        />
          <button className="buttonSearch"><img className="searchIcon" src={searchIcon} alt="search" /></button>
      </div>

    
    </form>
  );
};

const HeadingComponent = () => {
  const [filteredData, setFilteredData] = useState(data);
  // const [inputText,setInput] = useState("");
  // const dataMain = data.filter((e)=>{

  //   return e.name.includes(inputText);
  // });
  return (
    <div className="mainPage">
      <Navbar />

      <div className="bottomDiv1">
        <div className="searchBarCont">
      <SearchBar setFilteredData={setFilteredData} /></div>
        <div className="bottomDiv">
        {filteredData.map((e) => {
          return <Info key={e.id} details={e} />;
        })}
        </div>
      </div>
    </div>
  );
};
root.render(<HeadingComponent />);
