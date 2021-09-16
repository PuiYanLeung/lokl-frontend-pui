import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import SecondRegister from "./pages/secondRegister/SecondRegister";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";


function App() {
    const [ user, setUser ] = useState(null);
    const [ post, setPost ] = useState(0);

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {!user ? <Login user = {user} setUser = {setUser} /> : <Redirect to="/" />}
                </Route>
                <Route path="/register">
                    {!user ? <Register user = {user} setUser = {setUser}/> : <Redirect to="/secondregister" />}
                </Route>
                <Route path="/secondregister">
                    {user ? <SecondRegister user = {user} setUser = {setUser}/> : <Redirect to="/Register" />}
                </Route>
                <Route exact path="/">
                    {user ? <Home user = {user} setUser = {setUser} post={post} setPost={setPost} /> : <Redirect to="/login" />}
                </Route>
                <Route path="/profile">
                    {user ? <Profile user = {user} setUser = {setUser} /> : <Redirect to="/login" />}                    
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
