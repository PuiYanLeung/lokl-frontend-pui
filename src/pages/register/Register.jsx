import axios from "axios";
import { useState } from "react";
import "./register.css";

export default function Register({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND}/user/register`, { username, password, checkPassword });
            if (res.data.response === "registered successfully") {
                const res = await axios.post(`${process.env.REACT_APP_BACKEND}/user/login`, { username, password });
                const data = res.data;
                setUser(data);
            }
        } catch (err) {}
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
                <div className="loginHeadling">Register</div>
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
                            required
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
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="PasswordAgain">
                        {" "}
                        <img
                            src="/assets/login/lock.png"
                            alt="passwordicon"
                            width="40px"
                            height="43px"
                        />{" "}
                        <input
                            className="PassAgainInput"
                            type="password"
                            placeholder="Password Again"
                            required
                            onChange={(e) => setCheckPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="loginRegisterButton"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
