import "./Mainfeed.css";
import Happyguy from "./mainpagepictures/happyguy.png";

const Message = ({author, content, city, date}) =>{
    return (
        <>
            <p>{city}</p>
            <p>{author}</p>
            <p>{date}</p>
            <p>{content}</p>
        </>
    );
}
export default function Mainfeed({post}) {
    return (
        <div className="Mainfeed">
            <div className="happyguy">
            <div className ="something"></div>
            <div className="happyguypicture"> <img src={Happyguy} alt="HAPPYGUY"/></div>
            </div>
        
            <div className="Messagebox">
           
            <div className="Message1"><Message author={post.author} content={post.content} city={post.city} date={post.date}/></div>
            {/* <div className="Message2"><Message nr="2"/></div>
            <div className="Message3"><Message nr="4"/></div> */}
            </div>
        </div>
    )
}