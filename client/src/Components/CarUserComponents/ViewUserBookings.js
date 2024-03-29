import { Button } from "antd";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CarUserNav from "./CarUserNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function ViewUserRides() {

    const [bookings, setBookings] = useState([]);
    const [flag, setFlag] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const pid = JSON.parse(localStorage.getItem("loggedCarUser")).id;
        console.log(pid)
        fetch(`http://localhost:8080/getAllBookingForUser?pid=${pid}`)
            .then((res) => res.json())
            .then((bookings) => { setBookings(bookings); 
            if (bookings.length > 0) setFlag(true) })
    }, [])

    const cancelBooking=async(e)=>{
       const bid=e.target.value;
       const response=await axios.delete(`http://localhost:8080/deleteBooking/${bid}`)
       console.log(response)
       window.location.reload()
       }

    return (
        <div>
            <CarUserNav/>
            <h2 style={{ marginTop: '40px', backgroundColor: '#4682a9', height: '60px', color: "whitesmoke" }}>PREVIOUS BOOKINGS</h2>


            <div className="message" style={{ display: flag ? "none" : "block" }}>
                <h3>No Booking History</h3>
                <p>Start With your First Booking</p>
                <Button type="button" className="btn btn-warning" onClick={() => { navigate("/Main") }}>Search Ride</Button>
            </div>

            <div className="bookings">
                {
                    flag &&
                    (
                        <div>
                            <table border="1" className="table table-primary table-hover">

                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Ride ID</th>
                                        <th>Source City</th>
                                        <th>Destination City</th>
                                        <th>Date</th>
                                        <th>Time of Departure</th>
                                        <th>Time of Arrival</th>
                                        <th>Number of Seats Booked</th>
                                        <th>Total Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings.map((b)=>{
                                            return(

                                                <tr key={b.id}>
                                                <td>{b.id}</td>
                                                <td>{b.rides.id}</td>
                                                <td>{b.rides.start_location.city}</td>
                                                <td>{b.rides.end_location.city}</td>
                                                <td>{b.rides.date_of_journey}</td>
                                                <td>{b.rides.time_of_departure}</td>
                                                <td>{b.rides.time_of_arival}</td>
                                                <td>{b.no_of_seats}</td>
                                                <td>{b.total_price}</td>
                                                <td>{b.status}</td>
                                                <td> 
                                                   <button type="button" name="btn" value={b.id} id="delete"  className="btn btn-danger" onClick={cancelBooking}>Cancel</button>&nbsp;&nbsp;&nbsp;
                                                   
                                                    {/* <Link to={`/edit/${b.id}`} state={{pdata:b}}>
                                                    <button type="button" name="btn" id="edit" className="btn btn-primary">Edit</button>&nbsp;&nbsp;&nbsp;
                                                   </Link>  */}

                                                   <Link to="/review">
                                                    <button type="button" name="btn" id="view" className="btn btn-info">Review</button>
                                                   </Link> 
                                                </td>

                                            </tr>
                                                )
                                        })
                                    }
                                </tbody>
                                
                            </table>
                            <p>Start A New Journey</p>
                            <Button type="button" className="btn btn-warning" onClick={() => { navigate("/Main") }}>Search Ride</Button>

                        </div>
                    )
                }
            </div>
            <footer>
        <div className="container4">
          <p>
            &copy; 2024 SWIFT RIDES. All rights reserved.
          </p>
          <a href="https://www.youtube.com/" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com/" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com/" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>{" "}
        </div>
      </footer>
        </div>

    )
}