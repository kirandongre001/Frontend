// import { Form, Input, Select } from "antd";
// import { useEffect, useReducer, useState } from "react";
// import CarUserNav from "./CarUserNav";
// //import mystate from './CarOwnerLandingPage';
// //import carOwner from './CarOwnerLandingPage'
// const initialStateReview = {
//     id : 0,
//     passenger_id: 0,
//     ride_id :   0,
//     rating :   "", 
//     comments:""
// }

// const reducerV = (state, action) => {
//     switch (action.type) {
//         case 'update':
//             return { ...state, [action.fld]: action.value }
//     }
// }

// export default function review() {

//     // const [vehicle, dispatchv] = useReducer(reducerV, initialStateVehicle);
//     // const [carcom, setCarcom] = useState([]);
//     // const [carmod, setCarMod] = useState([]);
//     // const [msg, setMsg] = useState(null);
//     // const [formData] = Form.useForm();
//     // useEffect(() => {

//     //     fetch("http://localhost:8080/getAllCarCompany")
//     //         .then((res) => res.json())
//     //         .then((carcom) => setCarcom(carcom));

//     // }, []);

//     // useEffect(() => {
//     //     if (vehicle.car_com !== 0) {
//     //         console.log(vehicle.car_com)
//     //         fetch(`http://localhost:8080/getcarmodelsfromcompanyid?comapnyid=${vehicle.car_com}`)
//     //             .then(res => res.json())
//     //             .then((carmod) => {
//     //                 setCarMod(carmod);
//     //             })
//     //             .catch((e) => {
//     //                 console.log(e);
//     //             })
//     //     }
//     // }, [vehicle]);

    
//     // const changeCarMod = () => {
//     //     fetch(`http://localhost:8080/getcarmodelsfromcompanyid?comapnyid=${vehicle.car_com}`)
//     //         .then(res => res.json())
//     //         .then((carmod) => {
//     //             setCarMod(carmod);
//     //         });
//     //     }

//     const addReview = (e) => {
//         e.preventDefault();
//         const passenger = JSON.parse(localStorage.getItem("loggedCarUser"));
//         console.log(passenger.id)
//         const reqOptions = {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({ userid: passenger.id }),
//         };
//         fetch("http://localhost:8080/addPassenger_Review", reqOptions)
//             .then((res) => res.text());
//     }

//     return (

//         <>
//         <CarUserNav />
//         <div className="addVehicle">
//             <Form className="rideForms">
//                 <Form.Item label="Rating" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
//                    <Input type="text" name="rating" required></Input>
//                 </Form.Item>
               
//                 <Form.Item  name="carCompany" label="Comment" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
//                 <Input type="text" name="comment" required></Input>
//                 </Form.Item>
                
//                 <button type="button" className="btn btn-light btn-lg btn-block" onClick={(e) => { addReview(e) }}>ADD Review</button>
//                  <div className="message" style={{ display: msg !== null ? "block" : "none" }}>
//                     <b style={{ color: 'green' }}>{msg}</b>
//                 </div> 
//             </Form>
//         </div>
//         </>

//     )
// }