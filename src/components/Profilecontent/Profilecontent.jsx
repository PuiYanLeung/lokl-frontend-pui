import React, {useState, useEffect} from "react";
import "./profilecontent.css";
import Profileguy from "./Profileguy.png";
import {Message} from "../Mainfeed/Mainfeed";
import Aboutmebox from "./About/about";
import axios from "axios";

export default function Profilecontent({user, post}) {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const getUserPosts = async () => {
            try {
                const secret_token = user.token;
                const res = await axios.get(
                    `${process.env.REACT_APP_BACKEND}/post${secret_token ? "?secret_token=" + secret_token : ""}&q=author&v=${user.username}`);
                setUserPosts(res.data.response);
            } catch (err) {
                console.log(err);
            }
        };
        getUserPosts();
    }, [user, post]);

    return (
        <div className="Profile">
            <div className="ProfilePic">
                <div className="happyguypicture">
                    <img src={Profileguy} alt="Profilepicture" />
                </div>
            </div>
            <div className="ProfileContent">
                <div className="Greeting">
                    <h3>Hello, {user.username}!</h3>
                </div>

                <div className="About">
                    <h3> About me</h3>
                    <Aboutmebox />
                </div>
                <div className="Posthistory">
                    <h3>Post History</h3>
                    {userPosts
                        .slice(0)
                        .reverse()
                        .map((p, i) => (
                            <div key={i} className="Message2">
                                <div className="Newsfeed">
                                    <Message
                                        author={p.author}
                                        city={p.city}
                                        date={p.date}
                                        content={p.content}
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
