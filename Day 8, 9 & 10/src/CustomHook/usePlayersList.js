import React, { useState, useEffect } from "react";

const usePlayersList = (playerId) => {
  
  const [player, setPlayer] = useState(null);
  

  useEffect(() => {
    
    const fetchData = async () => {
      
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c44d442a23msh18fd2e712ef04fdp110895jsne625703f5816",
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      };
      const response = await fetch(
        `https://free-nba.p.rapidapi.com/players/${playerId}`,
        options
      );
      const result = await response?.json();
      setPlayer(result);
    };
    if (playerId) fetchData();
  }, [playerId]);

  return player;
};

export default usePlayersList;
