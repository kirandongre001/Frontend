import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import CarUserNav from "../CarUserComponents/CarUserNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Edit() {
  const location = useLocation(); //taking data from other component
  const cid = useParams(); //take data from url
  const [bookings, setBookings] = useState([]);
  // const [formdetails, setformdetails] = useState({
  //   cid: "",
  //   cfname: "",
  //   age: "",
  //   weight: "",
  //   bloodgrp: "",
  //   gender: "",
  //   dob: "",
  // });

  const data = location.state.pdata;
  const user = location.state.userinfo;
  console.log(data);
  // const queryString = Object.keys(user)
  //   .map((key) => ${encodeURIComponent(key)}=${encodeURIComponent(user[key])})
  //   .join("&");
  // console.log(queryString);
  // //
  // let obj = {
  //   cid: data.cid,
  //   age: data.age,
  //   bloodgrp: data.bloodgrp,
  //   cfname: data.cfname,
  //   dob: data.dob,
  //   gender: data.gender,
  //   weight: data.weight,
  // };
  // useEffect(() => {
  //   setformdetails({ ...obj });
  // }, []);
  // console.log(obj);
  // const navigate = useNavigate();
  // const addChild = async (e) => {
  //   e.preventDefault();
  //   if (
  //     formdetails.cid === "" ||
  //     formdetails.cfname === "" ||
  //     formdetails.age === "" ||
  //     formdetails.weight === "" ||
  //     formdetails.bloodgrp === "" ||
  //     formdetails.gender === "" ||
  //     formdetails.dob === ""
  //   ) {
  //     swal("pls fill all the fieds");
  //     return;
  //   }
  //   if (formdetails.age === "" || parseFloat(formdetails.age) <= 0) {
  //     swal("Please enter a valid age.");
  //     return;
  //   }
  //   if (formdetails.weight === "" || parseFloat(formdetails.weight) <= 0) {
  //     swal("Please enter a valid weight.");
  //     return;
  //   }
  //   if (!/^[a-zA-Z]+$/.test(formdetails.cfname)) {
  //     swal("Enter valid name");
  //     return;
  //   } else {
  //     try {
  //       const response = await userService.updateChildInfo(
  //         cid.cid,
  //         formdetails
  //       );
  //       if (response.status === 200) {
  //         swal("Good job!", "Updated Successfully!", "success");
  //         navigate("/ChildDashboard/" + queryString);
  //       }
  //     } catch (error) {
  //       if (error.response && error.response.status === 404) {
  //         swal("something went wrong try agin later");
  //       } else {
  //         swal(
  //           "An error occurred while updating information. Please try again later."
  //         );
  //       }
  //     }
  //   }
  // };
  return (
    <>
     <div>
            <CarUserNav/>
            {/* <h2 style={{ marginTop: '40px', backgroundColor: '#4682a9', height: '60px', color: "whitesmoke" }}>PREVIOUS BOOKINGS</h2>


            <div className="message" style={{ display: flag ? "none" : "block" }}>
                <h3>No Booking History</h3>
                <p>Start With your First Booking</p>
                <Button type="button" className="btn btn-warning" onClick={() => { navigate("/Main") }}>Search Ride</Button>
            </div> */}

            <div className="bookings">
                
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
                              
                                                    <Link to={`/U_rides`} state={{pdata:b}}>
                                                    <button type="button" name="btn" id="edit" className="btn btn-primary">Update</button>&nbsp;&nbsp;&nbsp;
                                                   </Link>
                                                </td>

                                            </tr>
                                                )
                                        })
                                    }
                                </tbody>
                                
                            </table>
                        </div>
                    
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
    </>
  );
}

{
}