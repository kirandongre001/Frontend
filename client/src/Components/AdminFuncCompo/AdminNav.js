import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../logo3.jpg";


export default function AdminNav() {
    const mystate = useSelector((state) => state.logged);
    return (
        <div style={{ display: mystate.loggedIn ? "block" : "none" }}>
            <div className="navigation" style={{ position: "relative" }}>
            <div><img src={logo} alt="3"  width="100" height="65" /></div>
                <div className="navigation_item">
                    <Link to="/ViewUser">view user</Link>
                </div>
                <div className="navigation_item">
                    <Link to="/viewRides">view rides</Link>
                </div>
                <div className="navigation_item">
                    <Link to="/ViewAllBooking">view Booking</Link>
                </div>
                <div className="navigation_item">
                    <Link to="/ViewPayment">view payments</Link>
                </div>
                {/* <div className="navigation_item">
                    <Link to="/PassengersReviews">view reviews</Link>
                </div> */}
                <div
                    className="navigation_item"
                    style={{ position: "absolute", right: "0" }}>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        
        </div>
    );
}