import React from 'react'
import "./Navbar.css"
import Logo  from "./Navbarcomponents/Logo.png"
import Profile from "./Navbarcomponents/Profile.png"
import Post from "./Navbarcomponents/Post.png"
import Logout from "./Navbarcomponents/Logout.png"

const City = (props) => {
    return (
        <p> I am dynamic and will display {props.city}</p>
    )
}
export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Logoleft">

            <img src={Logo} alt="a logo" width="280" height="105"/>
                <div className = "city"><City city ="Manchester"/></div>
            </div>
        
            <div className="Logoright">
           
           <div className="profileflex"> <img src={Profile} alt="profile" width="45" height="55"/></div>
           <div className="postflex"><img src={Post} alt="post" width="45" height="55"/></div>
           <div className="logoutflex"><img src={Logout} alt="logout" width="45" height="53"/></div> 
            
            </div>
        </div>
    )
}
