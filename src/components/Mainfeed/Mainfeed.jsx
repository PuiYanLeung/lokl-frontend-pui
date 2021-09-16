import "./Mainfeed.css";
import Sayhi from "./mainpagepictures/sayhi.png";
import RandomPicture from "./randompic";

const Message = ({author, content, city, date}) => {
    return (
        <>
        
              
                        <p>{city}</p>
                        <p>{author}</p>
                        <p>{date}</p>
                        <p>{content}</p>
     
        </>
    );
};

export default function Mainfeed({post}) {
    return (
        <div className="Mainfeed">
            <div className="Mainleft">
                <div className="Banner">
                    <img src={Sayhi} alt="banner" />
                </div>
                <div className="Name">
                    <Message author={post.author} />
                </div>
                <RandomPicture />
            </div>
            
                <div className="Newsfeed"> 
                <div className = "Contentflex">
                 <div className="Content">    
                  <div className="TopDetails">
                    <Message author={post.author} city={post.city} date={post.date} />
                    </div>
                <div className="contentP">
                    <Message content={post.content} />
                    </div>
</div>

                </div>
            </div>
        </div>
    );
}

export {Message};
