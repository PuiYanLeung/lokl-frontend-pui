import "./App.css";
import Login from "./pages/login/Login";
import Mainfeed from "./Mainfeed/Mainfeed";
import Navbar from "./Navbar/Navbar";
function App() {
    return (
        <div>
            <Login />
            <Navbar />
            <Mainfeed />
        </div>
    );
}
export default App;
