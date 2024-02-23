import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row, Select } from "antd";
// import StatusUpdate from './StatusUpdate';
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function ViewRides() {
  const [rides, setRides] = useState([]);
  // const admin = JSON.parse(localStorage.getItem("loggedAdmin"));

  useEffect(() => {
    fetch("http://localhost:8080/getallrides")
      .then((res) => res.json())
      .then((rides) => {
        setRides(rides);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const navigate = useNavigate();
  const pendingRides = (a) => {
    if (rides.length > 0) {
      fetch("http://localhost:8080/getAllRidesByStatus?status=pending&id=" + a)
        .then((res) => res.json())
        .then((rides) => {
          setRides(rides);
        })
        .catch((e) => {
          console.log(e);
        });
      navigate("/ViewRides");
    }
  };
  const activeRides = (a) => {
    if (rides.length > 0) {
      fetch(`http://localhost:8080/getAllRidesByStatus?status=active&id=${a}`)
        .then((res) => res.json())
        .then((rides) => {
          setRides(rides);
        })
        .catch((e) => {
          console.log(e);
        });
      navigate("/ViewRides");
    }
  };

//   const removeUser = (a) => {
//     fetch(`http://localhost:8080/deleteRide?id=${a}`)
//       .then((res) => res.json())
//     //   .then((rides) => {
//     //     setRides(rides);
//     //   })
//       .catch((e) => {
//         console.log(e);
//       });
//     navigate("/ViewRides");
//   };
//   useEffect(() => {
//     const pid = JSON.parse(localStorage.getItem("loggedCarUser")).id;
//     fetch(`http://localhost:8080/getAllBookingForUser?pid=${pid}`)
//         .then((res) => res.json())
//         .then((bookings) => { setBookings(bookings); if (bookings.length > 0) setFlag(true) })

// }, [])9
const deleteHandler =async  (e) =>{
  const pid = e.target.value;
  const response = await  axios.delete(`http://localhost:8080/deleteRide/${pid}`)
  console.log(response)
  window.location.reload()
}

  return (
    <div>
      <AdminNav />
      {/* <AdminNav/> */}
      {/* <button type="button" onClick={()=>{pendingRides()}}>Pending Rides</button>
                                    
                                    <button type="button" onClick={()=>{activeRides()}}>Active Rides</button>
                            */}
      <h1>Rides Information</h1>
      <table border="1" className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">Ride Id</th>
            <th className="text-center">First Name</th>
            <th className="text-center">Last Name</th>
            <th className="text-center">Start_Location</th>
            <th className="text-center">End Location</th>
            <th className="text-center">Company Name</th>
            <th className="text-center">Vehicle no. </th>
            <th className="text-center">Date of Departure</th>
            <th className="text-center">Time of depature</th>
            <th className="text-center">Time of arrival</th>
            <th className="text-center">Check</th>
            <th className="text-center">status</th>
            <th className="text-center">Action</th>
          
          </tr>
        </thead>
        <tbody>
          {rides.map((v) => {
            return (
              <tr key={v.id}>
                {/* <td>{v.fname}</td>
               <td>{v.lname}</td> */}
                <td className="text-center">{v.id}</td>
                <td className="text-center">{v.users.fname}</td>
                <td className="text-center">{v.users.lname}</td>
                <td className="text-center">{v.start_location.city}</td>
                <td className="text-center">{v.end_location.city}</td>
                <td className="text-center">
                  {v.vehicles.carmodels.model_name}
                </td>
                <td className="text-center">{v.vehicles.rc_book}</td>
                <td className="text-center">{v.date_of_journey}</td>
                <td className="text-center">{v.time_of_departure}</td>
                <td className="text-center">{v.time_of_arival}</td>

                <td className="text-center">
                  <a href="https://www.rtovehicleinformation.com/">RTO</a>
                </td>
                <td className="text-center">{v.status}</td>
                <td>
                  <button
                    type="button"
                    value={v.id}
                    name="btn"
                    id="delete"
                    className="btn btn-danger"
                    onClick={deleteHandler}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
  );
}

//         <div className="rides">
//           <Row gutter={16}>
//             {
//                 rides.map(r => {
//                   return (
//                     <Col span={8}>
//                       <Card title={`${r.start_location.city} - ${r.end_location.city}`} style={{ border: "2px solid black" }} bordered={false}>
//                         <h5>
//                           {r.users.fname}
//                           <span> </span>
//                           {r.users.lname}
//                         </h5>
//                         <p>
//                           <b>Price : {r.price_per_seat}</b><br/>
//                           <b>Seats :{r.available_seats}</b>
//                         </p>
//                         <p>Car :{r.vehicles.carmodels.carcompany.company_name} {r.vehicles.carmodels.model_name}</p>
//                         <p><b>Time of depature: {r.time_and_date_of_departure} </b></p>
//                         <p><b>Time of arrival: {r.time_of_arival} </b></p>

//                       </Card>
//                     </Col>
//                   );
//                 })
//             }
//           </Row>
//         </div>
//     );
// };

// {/* <tr key={user.id}>
// <td>{user.fname}</td>
// <td>{user.lname}</td>
// <td>{user.gender}</td>
// <td>{user.dob}</td>
// <td>{user.aadhar}</td>
// <td>{user.licence}</td>
// <td>{user.primary_email}</td>
// <td>{user.roll}</td>
// <td>{user.status}</td>
// <td> <button type="button">
//     Update Status
// </button>
// </td>

// </tr> */}
