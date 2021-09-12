import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        // <div>
        //     <Login />
        //     <Navbar />
        //     <Mainfeed />
        //     <Profile/>
        // </div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
