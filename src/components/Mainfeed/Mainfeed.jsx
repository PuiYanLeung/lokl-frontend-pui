import "./Mainfeed.css";
import Sayhi from "./mainpagepictures/sayhi.png";
import RandomPicture from "./randompic";


const Message = ({author,username, content, city, date}) =>{
    return (
        <>
            <p>{username}</p>
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
            <div className="Name"><Message author={post.author}/></div>
           <RandomPicture/>
            
            </div>
        
            {/* <div className="Messagebox"> */}
           
            <div className="Message1">
            <div className="Newsfeed">
            <Message author={post.author} city={post.city} date={post.date}/>
            <Message content={post.content} />
            </div>
            </div>
           
            {/* </div> */}
        </div>
    )
}

export {Message}