

import React from 'react'
import "./Profile.css"
import Profileguy from "./Profileguy.png"


const Greeting = (props) =>{
    return(
        <h3>Hello,{props.name}</h3>
    )
}

const PostH =(props)=>{
    return(
        <p> This is a place for message history{props.message}</p>
    )
}
export default function Profile() {
    return (
        <div className="Profile">
            <div className="ProfilePic">
                <div className="happyguypicture"> <img src={Profileguy} alt="Profilepicture"/></div>
            </div>
            
                <div className="ProfileContent">
                    <div className="Greeting"><Greeting name="Kris"/></div>
                    <div className="About">About me</div>
                    <div className="Posthistory"><PostH message="No messages to display"/></div>

                </div>
        </div>
    )
}
