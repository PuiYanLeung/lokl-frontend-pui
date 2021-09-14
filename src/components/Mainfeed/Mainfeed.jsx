import "./Mainfeed.css";
import Sayhi from "./mainpagepictures/sayhi.png";
import RandomPicture from "./randompic";


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

            <div className="Mainleft">

            <div className ="Banner"> <img src={Sayhi} alt="banner"/></div>
           <RandomPicture/>
            
            </div>
        
            {/* <div className="Messagebox"> */}
           
            <div className="Message1"><Message author={post.author} content={post.content} city={post.city} date={post.date}/></div>
           
            {/* </div> */}
        </div>
    )
}
