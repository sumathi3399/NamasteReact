import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import GithubUsers from "./components/GithubUsers/GithubUsers.js";
import GithubInfo from "./components/GithubInfo/GithubInfo.js";
import AboutUs from "./components/AboutUs/index.js";
const container = ReactDOM.createRoot(document.getElementById("root"));
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
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
    }
];

const App = () => {
  const [user, setUser] = useState(users[0].name);
  // const [userInfo, setUserInfo] = useState();
  // useEffect(() => {
  //   fetchData();
  // },[user]);

  // async function fetchData() {
  //   const res = await fetch(`https://api.github.com/users/${user}`);
  //   const data = await res.json();
  //   setUserInfo(data);
  // }

  return <>
    <div className="buttonContainer">
    {users.map((e) => (
      <Link to={`github/${e.name}`}>
      <GithubUsers key={e.name} details={e} setUser={setUser} /></Link>
    ))}
    </div>
    {/* <>
    {userInfo && <GithubInfo userInfo={userInfo} />}
    </> */}
    <Outlet/>
  </>
};
const router = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'github/:name',
      element:<GithubInfo />
    }
  ]
},
{
  path:'/about-us',
  element:<AboutUs/>
  
}
]);

container.render(<RouterProvider router={router} />);
