import Mainfeed from "../../components/Mainfeed/Mainfeed";
import Navbar from "../../components/Navbar/Navbar";
import Filler from "../../components/Mainfeed/Mainfiller";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
          try {
            const secret_token = JSON.parse(localStorage.getItem("user")).token
            const res = await axios.get(`post${secret_token ? "?secret_token=" + secret_token : ""}`);
            //console.log(res);
            setPosts(res.data.response);
          } catch (err) {
            console.log(err);
          }
        };
        getPosts();
      }, []);

    return (
        <div>
            <Navbar/>
            {posts.map((p, i) => (            
                <Mainfeed key={i} post={p}/>
            ))}
        </div>
    );
};
