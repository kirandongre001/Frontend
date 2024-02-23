import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./Assests/logo.jpg";
import { useSelector } from "react-redux";
export default function AppNav() {
    const mystate=useSelector((state)=>state.logged);
return(

    <div className="App">
      <div style={{display:mystate.loggedIn?"none":"block"}}>
        <div className="navigation" style={{ position: "relative" }}>
          <div><img src={logo} alt="3"  width="100" height="65" /></div>
          <div className="navigation_item">
            <Link to="/">Home</Link>
          </div>
          <div className="navigation_item">
            <Link to="/Reg">Register</Link>
          </div>
          <div className="navigation_item">
            <Link to="/about">About</Link>
          </div>
          <div className="navigation_item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="navigation_item">
            <Link to="/contact">View Reviews</Link>
          </div>
          <div
            className="navigation_item"
            style={{ position: "absolute", right: "0" }}>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
 );
}