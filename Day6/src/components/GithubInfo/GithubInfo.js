import React from "react";
import './style.css';
import link from '../../../images/link.png';
import locationImg from '../../../images/location.png'
const GithubInfo = ({userInfo})=>{
    const {name,location,url,avatar_url,followers,following,public_repos,html_url,login} = userInfo;
    return <div className="infoContainer">
        <img className="img" src={avatar_url} />
        <div className="headingDiv">
            <h1 className="heading">{name}</h1>
            <a className="anchorTag" href={html_url} target="_blank"><img className="icon" src={link}/></a>
        </div>
        <div className="locationDiv">
            <img src={locationImg} className="icon" />
            <p className="location">{location}</p>
        </div>
        <div>
            <p className="repos">Public Repositories :<b> {public_repos}</b></p>
        </div>
        <div className="smallDiv">
            <p className="followers">followers : <b>{followers}</b></p>
            <p className="followers">following : <b>{following}</b> </p>    
        </div>
    </div>
}
export default GithubInfo;