import Mainfeed from "../../components/Mainfeed/Mainfeed";
import Navbar from "../../components/Navbar/Navbar";
import Filler from "../../components/Mainfeed/Mainfiller";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home({user, setUser}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const secret_token = user.token;
                const res = await axios.get(
                    `/post${secret_token ? "?secret_token=" + secret_token : ""}&q=city&v=${user.city}`
                );
                setPosts(res.data.response);
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
    }, []);

    return (
        <div>
            <Navbar user={user} setUser={setUser} />
            {posts.map((p, i) => (
                <Mainfeed key={i} post={p} />
            ))}
        </div>
    );
}
