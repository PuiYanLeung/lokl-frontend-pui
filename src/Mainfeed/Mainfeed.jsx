

import React from 'react'
import "./Mainfeed.css"
import Happyguy from "./mainpagepictures/happyguy.png"


const Message = (props) =>{
    return(
        <p>Hi I 'm a Message nr{props.nr}</p>
    )
}
export default function Mainfeed() {
    return (
        <div className="Mainfeed">
            <div className="happyguy">
            <div className ="something"></div>
            <div className="happyguypicture"> <img src={Happyguy} alt="HAPPYGUY"/></div>
            </div>
        
            <div className="Messagebox">
           
            <div className="Message1"><Message nr="1"/></div>
            <div className="Message2"><Message nr="2"/></div>
            <div className="Message3"><Message nr="4"/></div>

            </div>
        </div>
    )
}
