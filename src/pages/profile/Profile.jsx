import Profilecontent from "../../components/Profilecontent/Profilecontent";
import NavbarProf from "../../components/Navbar/navbarprof";

export default function Profile({user, setUser}) {
    return (
        <div>
            <NavbarProf user={user} setUser={setUser} />
            <Profilecontent user={user} setUser={setUser} />
        </div>
    );
}
