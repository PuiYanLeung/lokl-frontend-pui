import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import SecondRegister from "./pages/secondRegister/SecondRegister";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";


function App() {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {!user ? <Login /> : <Redirect to="/" />}
                </Route>
                <Route path="/register">
                    {!user ? <Register/> : <Redirect to="/secondregister" />}
                </Route>
                <Route path="/secondregister">
                    {user ? <SecondRegister/> : <Redirect to="/Register" />}
                </Route>
                <Route exact path="/">
                    {user ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/profile">
                    {user ? <Profile /> : <Redirect to="/login" />}                    
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
