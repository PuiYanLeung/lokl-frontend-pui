import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import "./secondregister.css";

export default function SecondRegister({ user }) {
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const options = [
        { value: "Manchester", label: "Manchester" },
        { value: "Liverpool", label: "Liverpool" },
    ];
    const history = useHistory();

    const handleMore = async () => {
        try {
            const secret_token = user.token;
            const _id = user._id
            const res = await axios.put(`${process.env.REACT_APP_BACKEND}/user/editreg${secret_token ? "?secret_token=" + secret_token : ""}`, { _id, email, city });
            if(res.data.response === "User updated"){
                user.city = city;
                user.email = email;
                history.push("/");
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
                <div className="loginHeadling">What's more</div>
                <div className="loginBox">
                    <div className="City">
                        <Select
                            class="dropdown-content"
                            placeholder="City"
                            options={options}
                            required
                            onChange={(e) => setCity(e.value)}
                        />
                    </div>
                    <div className="Email">
                        {" "}
                        <img
                            src="/assets/login/emailpic.png"
                            alt="Emailicon"
                            width="40px"
                            height="43px"
                        />{" "}
                        <input
                            className="EmailInput"
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        className="loginRegisterButton"
                        onClick={handleMore}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
