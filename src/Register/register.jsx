import "./register.css";
import House from "./neighbourPic.png";
import Sayhi from "./sayhi.png";
import User from "./user.png";
import Password from "./lock.png";
import EmailIcon from "./Email.png"

const Cityhover =() => {
return (
  <div class="dropdown">
  <button class="dropbtn">Choose a city</button>
  <div class="dropdown-content">
    <a href="#">Manchester</a>
    <a href="#">Liverpool</a>
  </div>
</div>
)
}


export default function Register() {
  return (
    <div className="login">   
        <div className="loginLeft">
          <img className="loginLogo" src="/assets/logo/login.png" alt="logo" width="381px" height="114px" />
           <div className="loginDesc"><img src={Sayhi} alt="sayhi" width="580px" height="85px" /></div>

         <div className="neighbourPic"><img src={House} alt="house" width="450" height="455" /></div>
        </div>
  

        <div className="loginRight">
              <div className="loginHeadling">Register</div>
              <div className="loginBox">   

              <div className="Username"> <img src={User} alt="usericon" width="40px" height="43px" /> <input className="loginInput" placeholder="Username"  /></div>
              <div className="Password"> <img src={Password} alt="passwordicon" width="40px" height="43px" /> <input className="PassnInput" placeholder="Password"  /></div>
              <div className="PasswordAgain"> <img src={Password} alt="passwordicon" width="40px" height="43px" /> <input className="PassAgainInput" placeholder="Password Again"  /></div>
              <div className="Email"> <img src={EmailIcon} alt="Emailicon" width="40px" height="43px" /> <input className="EmailInput" placeholder="Email"  /></div>
              <div className="City"><Cityhover/></div>
                <button className="loginRegisterButton">Register</button>
              </div>
        </div>
    
    </div>
  );
}