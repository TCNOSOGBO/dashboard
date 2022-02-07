import axios from "axios";
import { useRef, useEffect, useContext } from "react";
import "./register.css";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {
  const { user} = useContext(AuthContext);
  const navigate = useNavigate()


  const firstName = useRef()
  const lastName = useRef()
  const department = useRef()
  const office = useRef() 
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        department: department.current.value,
        office: office.current.value, 
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("https://tcnapp.herokuapp.com/api/auth/register", user);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(()=>{
    if(user !== null){
      navigate('/')
    }
  })

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="mb-5">
              <img className="tcnLogo" src="/assets/TCNLogo.jpg" alt="logo" />
          </div>
          <h3 className="loginLogo">TCN OSOGBO</h3>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="First Name"
              required
              ref={firstName}
              className="loginInput"
            />
            <input
              placeholder="Last Name"
              required
              ref={lastName}
              className="loginInput"
            />
            <input
              placeholder="Department"
              required
              ref={department}
              className="loginInput"
            />
            <input
              placeholder="Office"
              required
              ref={office}
              className="loginInput"
            />
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login">
                  <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}