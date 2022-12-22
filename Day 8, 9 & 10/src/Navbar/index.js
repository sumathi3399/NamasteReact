import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../ThemeContext'
import './style.css'

const Navbar = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    
    <div className='nav-cont' style={{backgroundColor: theme==='light'? '#ffffff': 'black', color: theme==='light'? 'black': 'white',textDecoration: 'none'}}>
      <button onClick={()=>{setTheme(theme==='light'?'dark':'light')}}>change theme: {theme}</button>
        <Link to='/home' className={`nav-items ${theme==='light'? 'lightTheme': ''}`}  >Home</Link>
        <Link to='/about' className={`nav-items ${theme==='light'? 'lightTheme': ''}`} >About</Link>
        <Link to='/help' className={`nav-items ${theme==='light'? 'lightTheme': ''}`} >Help</Link>
    </div>
  )
}

export default Navbar