import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import AdminNav from './AdminFuncCompo/AdminNav';
import addRideImage from "./AddRide.jpg";
export default function AdminLandingPage() {

  const [data, setData] = useState([]);
  const handleClick = () => {

    fetch("http://localhost:8080/getalllog", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then(response => response.json())

      .then(data => setData(data)) //{

      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <div className="Admin">
        <AdminNav/>
        {/* <div className="navigation" style={{ position: "relative" }}>


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

          <div className="navigation_item">
            <Link to="/PassengersReviews">view reviews</Link>
          </div>

          <div className="App">

            <div className="navigation" >
              <div className="navigation_item">
                <Link to="/logout">Logout</Link>
              </div>
            </div>
          </div>


        </div> */}
        <div>   
          <br></br>
        </div>
      <div> <h2>Welcome Admin{data && data.fname}</h2></div>
      </div>
      <div><img src={addRideImage}  alt="3"   /></div>
      <footer>
        <div className="container4">
          <p className='social-links'>&copy; 2024 SWIFT RIDES. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i>Facebook</a>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>Twitter</a>
            <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>Instagram</a>
          </div>
        </div>
      </footer>
    </div>


  )

}