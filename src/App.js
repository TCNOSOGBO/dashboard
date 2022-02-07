import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
//import Profile from "./pages/Profile/profile";
import Register from "./pages/Register/register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element = {user?<Home />:<Login />} />
        <Route path = "/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;