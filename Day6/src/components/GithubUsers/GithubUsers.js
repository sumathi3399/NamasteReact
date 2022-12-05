import React, {useState} from "react";
import './style.css';

const GithubUsers = ({details,setUser}) => {
  console.log(useState());
  
  return (
    <div className="buttonCont">
      <button
      className="button"
      onClick={() => {
        setUser(details.name);
      }}
      >
        {details.name}
      </button>
    </div>
  );
};
export default GithubUsers;
