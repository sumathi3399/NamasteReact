import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import GithubUsers from "./components/GithubUsers/GithubUsers.js";
import GithubInfo from "./components/GithubInfo/GithubInfo.js";
const container = ReactDOM.createRoot(document.getElementById("root"));

const users = [
    {
      name: "sumathi3399",
    },
    {
      name: "vickydarlinn",
    },
    {
      name: "mharshita",
    },
    {
      name: "swati27",
    },
    {
      name: "ap221882",
    },
];

const App = () => {
  const [user, setUser] = useState(users[0].name);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    fetchData();
  },[user]);

  async function fetchData() {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    setUserInfo(data);
  }

  return <>
    <div className="buttonContainer">
    {users.map((e) => (
      <GithubUsers key={e.name} details={e} setUser={setUser} />
    ))}
    </div>
    <>
    {userInfo && <GithubInfo userInfo={userInfo} />}
    </>
  </>
};

container.render(<App />);
