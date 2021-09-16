import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async(e) =>{
        e.preventDefault();
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/user/login`, {username, password});
        const data = res.data;
        setUser(data);
    };

    return (
        <div className="login">
            <div className="loginLeft">
                <img
                    className="loginLogo"
                    src="/assets/logo/login.png"
                    alt="logo"
                    width="381px"
                    height="114px"
                />
                <div className="loginDesc">
                    <img
                        src="/assets/login/sayhi.png"
                        alt="sayhi"
                        width="580px"
                        height="85px"
                    />
                </div>

                <div className="neighbourPic">
                    <img
                        src="/assets/login/neighbourPic.png"
                        alt="house"
                        width="450"
                        height="455"
                    />
                </div>
            </div>

            <div className="loginRight">
                <form>
                    <div className="loginHeadling">LOGIN</div>
                    <div className="loginBox">
                        <div className="Username">
                            {" "}
                            <img
                                src="/assets/login/user.png"
                                alt="usericon"
                                width="40px"
                                height="43px"
                            />{" "}
                            <input
                                className="loginInput"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="Password">
                            {" "}
                            <img
                                src="/assets/login/lock.png"
                                alt="passwordicon"
                                width="40px"
                                height="43px"
                            />{" "}
                            <input
                                className="PassnInput"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="loginButton" onClick={login}>
                            Sign in
                        </button>
                        <Link className="loginRegisterButton" to="/register">
                            <button className="loginRegisterButton">
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
