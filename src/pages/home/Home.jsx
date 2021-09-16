import Mainfeed from "../../components/Mainfeed/Mainfeed";
import Navbar from "../../components/Navbar/Navbar";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home({user, setUser, post, setPost}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const secret_token = user.token;
                const res = await axios.get(`${process.env.REACT_APP_BACKEND}/post${secret_token ? "?secret_token=" + secret_token : ""}&q=city&v=${user.city}`);
                setPosts(res.data.response);
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
        console.log(user);
    }, [user, post]);

    return (
        <div>
            <Navbar user={user} setUser={setUser} post={post} setPost={setPost} />
            {posts.slice(0).reverse().map((p, i) => (
                <Mainfeed key={i} post={p} />
            ))}
        </div>
    );
}
