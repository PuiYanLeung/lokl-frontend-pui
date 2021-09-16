import "./Mainfeed.css";
import Sayhi from "./mainpagepictures/sayhi.png";
import RandomPicture from "./randompic";

const NameDisplay = ({ author }) => {
    return <p>{author}</p>;
};

const Message = ({ author, content, city, date }) => {
    const format_date = new Date(date).toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <>
            <p>{city}</p>
            <p>{format_date}</p>
            <p>{content}</p>
        </>
    );
};

export default function Mainfeed({ post }) {
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
            <div className="Message1">
                <div className="Newsfeed">
                    <Message
                        author={post.author}
                        city={post.city}
                        date={post.date}
                        content={post.content}
                    />
                    {/* <Message content={post.content} /> */}
                </div>
            </div>
        </div>
    );
}

export { Message };
