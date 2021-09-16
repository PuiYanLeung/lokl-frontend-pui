import Profilecontent from "../../components/Profilecontent/Profilecontent";
import NavbarProf from "../../components/Navbar/navbarprof";

export default function Profile({user, setUser, post, setPost}) {
    return (
        <div>
            <NavbarProf user={user} setUser={setUser} post={post} setPost={setPost} />
            <Profilecontent user={user} setUser={setUser} post={post} setPost={setPost} />
        </div>
    );
}
