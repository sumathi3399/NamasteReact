import img from "../../images/reactLogo.png";
import imgA from "../../images/avatar1.png";
import searchIcon from "../../images/search.png";
import './style.css';
const Navbar = ()=>{
    return <div className="innerDiv">
<div className="logoDiv">
  <p className="logotext">STROM</p>
   <img className="logo" src={img} alt="imgLogo" />
   <p className="logotext">TROOPERS</p>
   </div>
   
 <div className="searchBarDiv">
        <input className="searchBar" type="text" placeholder="search" />
        <img className="searchIcon" src={searchIcon} alt="search" />
      </div>
      <img className="avatar" src={imgA} alt="imgAvatar" />

    </div>
}
export default Navbar;