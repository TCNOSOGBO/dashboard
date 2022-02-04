import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
//import Profile from "./pages/Profile/profile";
import Register from "./pages/Register/register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "./context/AuthContext";

function App() {
  //const { user } = null //useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element = {<Register />} />
        <Route path = "/home" element={<Home/>} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </Router>
  );
}

export default App;