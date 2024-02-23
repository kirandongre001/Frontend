import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const StatusUpdate = () => {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8080/updateStatus?status=false&id="+loginid)
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  //     .catch(error => console.error('Error fetching user data:', error));
  // }, []);
  return (<div>
    alert("status updated");</div>
  );
};

export default StatusUpdate;
