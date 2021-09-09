import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img className="loginLogo" src="/assets/logo/login.png" alt="" />
          <span className="loginDesc">Say hi to your neighbour!</span>
          <img className="neighbourPic" src="/assets/image/neighbourPic.png" alt="" />          
        </div>
        <div className="loginRight">
          <span className="loginHeadling">LOGIN</span>
          <div className="loginBox">          
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Sign in</button>
            <button className="loginRegisterButton">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}