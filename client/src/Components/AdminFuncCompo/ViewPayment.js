import { useEffect, useState } from "react";
// import { Card, Carousel, Col, Form, Input, Select, Space, TimePicker } from "antd";
// import StatusUpdate from "AdminFuncCompo/StatusUpdate";
import { Container } from "bootstrap";
import {link,useNavigate} from "react-router-dom"
import AdminNav from "./AdminNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function ViewPayment() {

    const [payment, setPayment] = useState([]);

    useEffect(() => {
            
            fetch("https://localhost:7026/api/Payments")
                .then(res => res.json())
                .then((payment) => {
                    setPayment(payment);
                })
                .catch((e) => {
                    console.log(e);
                })
    }, []);

    const navigate=useNavigate();
{/*
    const updateStatusSuccess=(a)=>
    {
        if(payment.status=="success")
        {

            fetch(`https://localhost:7026/byStatus?status=success&id=${a}`)
            .then(response => response.json())
            .then(text =>{ if(text==="success") alert("Payment successfully done"); else alert("Payment not done")})
            .catch(error => console.error('Error fetching user data:', error));
            navigate("/ViewPayment");

        }
    }

    const updateStatusPending=(i)=>
    {
        if(payment.status=="pending")
        {
           
            fetch(` https://localhost:7026/byStatus?status=pending&id=${i}`)
            .then(response => response.text())
            .then(text =>{ if(text==="pending") alert("Payment pending"); else alert("Payment not pending")})
            .catch(error => console.error('Error fetching user data:', error));
            navigate("/ViewPayment");
        }
    }
*/}
    return (


        <div>
           <AdminNav/>
            <h1>All Payment Information</h1>

            <table border="1" className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Booking Id</th>
                        <th>Passenger Id</th>
                        <th>Total Amount</th>
                        <th>Date and Time</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payment.map((v) => {
                            
                            return (

                                <tr key={v.id}>
                                    <td className="text-center">{v.id}</td>
                                    <td className="text-center">{v.bookingId}</td>
                                    <td className="text-center">{v.passengerId}</td>
                                    <td className="text-center">{v.amount}</td>
                                    <td className="text-center">{v.dateTime}</td>
                                    <td className="text-center">{v.paymentMethod}</td>
                                    <td className="text-center">{v.status}</td>
                                </tr>
                            )

                        })
                    }
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
};


{/*
[
  {
    "id": 1,
    "bookingId": 1,
    "passengerId": 1,
    "amount": 45984,
    "dateTime": "2039-04-04T00:00:00",
    "paymentMethod": "online",
    "status": "success",
    "booking": null,
    "passenger": null
  }
] */}

