import React, { useState, useEffect, useContext } from "react";
import usePlayersList from "../CustomHook/usePlayersList";
import PlayerCard from "../PlayerCard";
import './style.css'
const Home = () => {
  const [players, setPlayers] = useState([]);
  const [playerId,setPlayerId] = useState('');
  const players1 = usePlayersList(playerId);
  
  useEffect(() => {
    fetchData();
  }, []);
  // useEffect(()=>{
  //   players1 = usePlayersList(playerId);
  // },[playerId])

  fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c44d442a23msh18fd2e712ef04fdp110895jsne625703f5816",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    const res = await fetch(
      "https://free-nba.p.rapidapi.com/players?page=0&per_page=25",
      options
    );
    const data = await res.json();
    setPlayers(data.data);
  };
  return (
    <>
    <div className="container2" >
      <label>select a player:</label>
      <select
        onChange={(e) => {
          const id = e.target.value;
          setPlayerId(id);
        }}
      >
        {players &&
          players?.map((e) => (
            <option key={e.id} value={e.id}>
              {e.first_name}
            </option>
          ))}
      </select>
      
    </div>
    <div>
    <PlayerCard  players1={players1} />
  </div>
  </>
  );
};

export default Home;
