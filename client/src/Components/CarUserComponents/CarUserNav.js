import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../logo3.jpg";

export default function CarUserNav() {
    const mystate = useSelector((state) => state.logged);

    return (
        <div style={{ display: mystate.loggedIn ? "block" : "none" }}>
            <div className="navigation" style={{ position: "relative" }}>
            <div><img src={logo} alt="3"  width="100" height="65" /></div>
                <div className="navigation_item">
                    <Link to="/Main">Home</Link>
                </div>
                {/* <div className="navigation_item">
                    <Link to="/about">About</Link>
                </div> */}
                {/* <div className="navigation_item">
                    <Link to="/contact">Contact</Link>
                </div> */}
                <div className="navigation_item">
                    <Link to="/U_rides">My Bookings</Link>
                </div>

                <div
                    className="navigation_item"
                    style={{ position: "absolute", right: "0" }}
                >
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </div>
    )
}