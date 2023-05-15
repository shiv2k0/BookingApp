import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleClickOne = () => {
    navigate("/login");
  };
  const handleClickTwo = () => {};
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingApp</span>
        </Link>
        {user ? (
          <span className="navUser">{user.username}</span>
        ) : (
          <div className="navItems">
            <button onClick={handleClickTwo} className="navButton">
              Register
            </button>
            <button onClick={handleClickOne} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
