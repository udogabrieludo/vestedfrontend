import React from "react";
import { Link } from "react-router-dom";
import Animate from 'animate.css-react'
import 'animate.css/animate.css'


const PaymentSuccessful = () => {



 // appear="bounceIn"
 //   durationAppear={1000}
 //   component="div"

  const userProfile = () => (
    <Animate> 
    <div className="container ">
      <div className="row py-5">
      </div>
      <div className="row pt-3 d-flex align-items-center justify-content-center">
        <div className="col-xl-8 order-xl-1 text-center">
       
          <div className="card  shadow">
            <div className="card-body ">
            <div className="text-center" style={{fontFamily:"poppins"}}>
               
            <img src="/images/check.png" width="70px" className="img-fluid" />  
                
                <h3>Payment Successful</h3>
                <p>Your payment was Successful. You can now view your investment. </p>
            <Link
              to="/dashboard/transaction"
              className="btn py-2 px-3 my-0 "
              style={{
                backgroundColor: "rgb(7 37 113)",
                fontWeight: "600",
                fontSize: ".7rem",
              }}
            >
               GO to Investment
            </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Animate>
          
  );

  return (
    <div style={{background:"#f4f6f9", height:"100vh"}} >
      {userProfile()}
    </div>
  );
};

export default PaymentSuccessful;
