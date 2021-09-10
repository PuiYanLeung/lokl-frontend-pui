import "./App.css";
import Login from "./pages/login/Login";
import Mainfeed from "./Mainfeed/Mainfeed";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
function App() {
    return (
        <div>
            <Login />
            <Navbar />
            <Mainfeed />
            <Profile/>
            
        </div>
    );
}
export default App;
