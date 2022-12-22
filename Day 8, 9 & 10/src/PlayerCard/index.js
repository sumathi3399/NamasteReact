import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext';
import './style.css'
const PlayerCard = ({players1}) => {
  const {theme} = useContext(ThemeContext);
    if(!players1) return;
    const {first_name, last_name,height_feet,height_inches,position}=players1;
  return (
    <div className='container1' style={{backgroundColor: theme==='light'? '#ffffff': 'black', color: theme==='light'? 'black': 'white',textDecoration: 'none'}}>
        <h1>{first_name}, {last_name}</h1>
        <p>Height : {height_feet}'{height_inches}</p>
        <p>Position: {position}</p>
    </div>
  )
}

export default PlayerCard;