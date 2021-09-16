import ButtonPanel from "./ButtonPanel";
import "./Mainfeed.css";
import Sayhi from "./mainpagepictures/sayhi.png";
import RandomPicture from "./randompic";

const NameDisplay = ({ author }) => {
    return <p>{author}</p>;
};

const Message = ({ content, city, date }) => {
    const format_date = new Date(date).toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            {city && <p>{city}</p>}
            {date && <p>{format_date}</p>}
            {content && <p>{content}</p>}
        </>
    );
};

    
export default function Mainfeed({ post, user }) {

    return (
<div className="Mainfeed"> 
            <div className="Mainleft">
                <div className="Banner">
                    <img src={Sayhi} alt="banner" />
                </div>
                <div className="Name">
                    <NameDisplay author={post.author} />
                </div>
                <RandomPicture />
            </div>  
            
                <div className="Newsfeed"> 
                <div className="Greeting">
                 
                </div>

                <div className = "Contentflex">
                 <div className="Content">    
                  <div className="TopDetails">
                    <ButtonPanel post={post} user={user}/>
                    <Message city={post.city} date={post.date}/>
                    </div>
                <div className="contentP">
                    <Message content={post.content} bttnshow={false} />
                    </div>
</div>
                </div>
            </div>
        </div>
    );
}

export { Message };
