import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", payload: error.response.data });
      window.alert("Something went wrong! Please try again");
    }
  };
  // console.log(user);
  return (
    <div className="login">
      <div className="lContainer">
        <h2 className="loginLogo">BookingApp</h2>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="lInput"
          onChange={handleChange}
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span> {error.message} </span>}
      </div>
    </div>
  );
};

export default Login;
