import React from 'react'
import "./profilecontent.css"
import Profileguy from "./Profileguy.png"
import { Message } from '../Mainfeed/Mainfeed'
import Aboutmebox from './About/about'

const Greeting = () =>{
    return(
        <h3>Hello</h3>
    )
}

const PostH =(props)=>{
    return(
        <p> This is a place for message history{props.message}</p>
    )
}
export default function Profilecontent(post) {
    return (
        <div className="Profile">
            <div className="ProfilePic">
                <div className="happyguypicture"> <img src={Profileguy} alt="Profilepicture"/></div>
            </div>
            
                <div className="ProfileContent">
                    <div className="Greeting"><Greeting/></div>
                   <div className="Nameprof"><Message author={post.author}/></div>
                    <div className="About"><Aboutmebox/></div>
                    
                    <div className="Posthistory"><PostH content={post.content}/></div>

                </div>
        </div>
    )
}
