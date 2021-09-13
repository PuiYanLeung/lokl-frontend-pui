import "./register.css";
import { useContext, useState } from "react";
import Select from 'react-select';

const Cityhover = () => {
    return (
        <div class="dropdown">
            <button class="dropbtn">Choose a city</button>
            <div class="dropdown-content">
                <a value="Manchester">Manchester</a>
                <a value="Liverpool">Liverpool</a>
            </div>
        </div>
    );
};

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const options = [
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Liverpool', label: 'Liverpool' }
  ];

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
                            onChange={(e) => setPasswordAgain(e.target.value)}
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
                        <input className="EmailInput" placeholder="Email" />
                    </div>
                    <div className="City">
                      <Select class="dropdown-content" options={options} />

                    {/* <div class="dropdown">
                        <button class="dropbtn">Choose a city</button>
                        <div class="dropdown-content" onChange={(e) => setCity(e.target.value)}>
                            <a value="Manchester">Manchester</a>
                            <a value="Liverpool">Liverpool</a>
                        </div>
                        <p>{city}</p>
                    </div> */}
                    </div>
                        <button className="loginRegisterButton">Register</button>
                </div>
            </div>
        </div>
    );
}
