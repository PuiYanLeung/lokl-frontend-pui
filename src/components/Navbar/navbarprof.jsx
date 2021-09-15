import React from 'react'
import "./Navbar.css"
import Logo  from "./Navbarcomponents/Logo.png"
import Home from "./Navbarcomponents/home.png"
import Post from "./Navbarcomponents/Post.png"
import Logout from "./Navbarcomponents/Logout.png"
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { Link } from "react-router-dom";

const City = (props) => {
    return (
        <p> I am dynamic and will display {props.city}</p>
    )
}
export default function NavbarProf() {
    const { dispatch } = useContext(AuthContext);
    return (
        <div className="Navbar">
           

                <div className="Logoleft">
                    <Link className="Logo" to="/">
                        <img
                            src={Logo}
                            alt="logo"
                            width="280"
                            height="105"
                        />
                    </Link>

                <div className="city">
                    <City city="Manchester" />
                </div>
            </div>


                <div className="Backtomainflex">
                    <Link className="Backtomainflex" to="/">
                        <img
                            src={Home}
                            alt="profile"
                            width="45"
                            height="55"
                        />
                    </Link>
                </div>
                <div className="postflex">
                    <img src={Post} alt="post" width="45" height="55" />
                </div>
                <div className="logoutflex">
                    <img
                        src={Logout}
                        alt="logout"
                        width="45"
                        height="53"
                        onClick={() => dispatch(logout())}
                    />
                </div>

            </div>
        
    );
}