import Mainfeed from "../../components/Mainfeed/Mainfeed";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);

  // "proxy": "http://localhost:5000/"

    useEffect(() => {
        const getPosts = async () => {
          try {
            const secret_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzY2FkNDFlZDE5M2ZiMzljZjhkOWI5IiwibmFtZSI6IlB1aSJ9LCJpYXQiOjE2MzE0NTc4NTN9.aMcyjjAJMK5V67Kel16hufpSigkSFe0A4HQZy59gPMk";
            const res = await axios.get(`http://localhost:5000/post${secret_token ? "?secret_token=" + secret_token : ""}`);
            console.log(res);
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
