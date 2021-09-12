import "./login.css";
import axios from "axios";
import House from "./neighbourPic.png";
import Sayhi from "./sayhi.png";
import User from "./user.png";
import Password from "./lock.png"


export default function Login() {
  return (
    <div className="login">   
        <div className="loginLeft">
          <img className="loginLogo" src="/assets/logo/login.png" alt="logo" width="381px" height="114px" />
           <div className="loginDesc"><img src={Sayhi} alt="sayhi" width="580px" height="85px" /></div>

         <div className="neighbourPic"><img src={House} alt="house" width="450" height="455" /></div>
        </div>
  

        <div className="loginRight">
          <div className="loginHeadling">LOGIN</div>
          <div className="loginBox">   

          <div className="Username"> <img src={User} alt="usericon" width="40px" height="43px" /> <input className="loginInput" placeholder="Username"  /></div>
          <div className="Password"> <img src={Password} alt="passwordicon" width="40px" height="43px" /> <input className="PassnInput" placeholder="Password"  /></div>
            <button className="loginButton">Sign in</button>
            <button className="loginRegisterButton">Register</button>
          </div>
        </div>
    
    </div>
  );
}