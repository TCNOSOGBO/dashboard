import { useContext, useRef, useEffect } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import {useNavigate} from "react-router-dom"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, loading, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClick = async(e) => {
    e.preventDefault();
    try{
      await loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
      navigate('/home')
    } catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    if(user){
      navigate('/home')
    }
  }, [user])  

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
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {loading ? (
                "Create a New Account"
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}