import { App, Card, Col, Row } from "antd";
import contact from "./contact.jpg";
import CarOwnerNav from "./CarOwnerComponents/CarOwnerNav";
import CarUserNav from "./CarUserComponents/CarUserNav";
import AdminNav from "./AdminFuncCompo/AdminNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Contact()
{
   // const type = (JSON.parse(localStorage.getItem("loggedUser")).roll_id.id);
    return (
        <>
           {/* {
               <AppNav />
            }
           {
               type == 1 &&
               <AdminNav />
            }
            {
                type === 2 &&
                <CarOwnerNav />
            }
            {
                type == 3 &&
                <CarUserNav />
            } */}
        <div>
            
        <div className="contact">
            <div className="info">

            <Row gutter={16} className="row-item">
                <Col span={8}>
                    <Card title="Kiran Dongre" style={{margin:'20px'}}>
                        <p><b>Email : </b>kirandongre001@gmail.com</p>
                        <p><b>Phone : </b>+91 9131886090</p>
                    </Card>
                
                    <Card title="Shubham Wankar" style={{margin:'20px'}}>
                        <p><b>Email : </b>shubhwankar88@gmail.com</p>
                        <p><b>Phone : </b>+91 8806131273</p>
                    </Card>
                </Col>
                <Col span={8}>

                    <Card title="Kiran Jare" style={{margin:'20px'}}>
                        <p><b>Email : </b>techkjare@gmail.com</p>
                        <p><b>Phone : </b>+91 7225-074716</p>
                    </Card>

                    <Card title="Prathmesh Mane" style={{margin:'20px'}}>
                        <p><b>Email : </b>prathmeshmane@gmail.com</p>
                        <p><b>Phone : </b>+91 9689372672</p>
                    </Card>
                </Col>
            </Row>
        </div>
        </div>
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
        </>
    )
}