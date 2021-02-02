import React, { useState, useLayoutEffect, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Loader from "../FullPageLoader/Loader";
import {itemTotal, getCart, updateItem} from './CartHelper'
import CartLayout from "./CartLayout";
import Payment from "./Payment";
import FlutterwavePayment from "./FlutterwavePayment";
import { Offline, Online } from "react-detect-offline";
import PaystackPayment from './PaystackPayment'
import {Animated} from "react-animated-css";
import { Helmet, HelmetProvider } from 'react-helmet-async';


import Modal from "react-modal";


Modal.setAppElement("#root");

const ReviewPlan = () => {

 
   const [items, setItems] = useState([]);
   const [run, setRun] = useState(false);
  
   const dates = new Date()
   const options = {  year: 'numeric', month: 'long', day: 'numeric' };

   dates.setMonth(dates.getMonth() + 1, 1)

  
   useEffect(()=>{
    setItems(getCart());
   },[run]);

 


  const newModal = ()=>(
    <div className="container">
   {/* The Modal */}
   <div className="modal fade" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
         {/* Modal Header */}
         <div className="modal-header">
           <center>  <span className="modal-title text-info"></span></center>
           <button type="button" className="close btn  btn-circle" style={{color:"#000",fontSize:'1.2rem', background:"#fff", padding:"10px", width:"40px", height:"40px"}}  data-dismiss="modal">×</button>
         </div>
         {/* Modal body */}
         <div className="modal-body">
          
           <div style={{fontFamily:"poppins"}}>
           <div className="col-md-12  text-center">     
          
             <h5 style={{fontFamily:"poppins", fontWeight:"600"}} className="mb-0 text-center">Pay with flutterwave</h5>
            {/* <p style={{ fontSize:".8rem", marginBottom:".4rem"}}> Choose any of the options below and make your payment.</p> */}
            <p style={{ fontSize:".8rem", marginBottom:".4rem"}}> Click the button below to continue.</p>
             
             {/* <div className="col-md-12" data-dismiss="modal">
              <PaystackPayment products={items}   />   
              </div> */}
              <div className="col-md-12" data-dismiss="modal">
               <FlutterwavePayment products={items}    />
              </div>   
              <img src="/images/card1.png" className="img-fluid" width="200px" />
              
          </div> 
            
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 
   
  )



  const reviewPlan = () => (
      
    <div className="container">
      <HelmetProvider>
          <Helmet>
          <title>VestedMoney | Review-Plan</title> 
          </Helmet>
      </HelmetProvider>
     
     
      <div className="row pt-2">
        <div className="col-12 ml-3"> 
          <h6>
            <Link
              to="/dashboard/invest"
              style={{ textDecoration: "none", color: "rgb(4, 129, 183)" }}
            >
             
                <><i className="fa fa-arrow-left"></i> Back</>
             
            </Link>
          </h6>
        </div>
        <div className="col-md-4 mt-3 pl-0 productdetail"></div>
      </div>
      <div className="">
        <div className="">
          <div className="container">
            <div className="row">
              <div className=" col-sm-6 col-md-12 mycard ">
                <div className="row">
                  <div className="span4  col-md-6">
                    <p className="header">Review Investment Plan</p>
                    <div className="quickaction alert alert-success alert-dismissible fade show" role="alert" style={{ borderRadius:".5rem"}}>
                            <div className="px-3">
                       
                             
                             <div className="reviewText">You have {itemTotal()} Investment plan to review</div>
                             <p  className=" mb-0">On completion of payment, your investment start counting from {dates.toLocaleDateString('en-US', options)} </p>
                            
                             </div> 

                             
                         </div>
                         
                          
                         <div>
                            <Payment products={items}/>   
                           {itemTotal() > 0 
                             ? <button className="btn btn-primary font-weight-bold rounded" data-toggle="modal" data-target="#myModal">Pay Now</button>
                             :  <button className="btn btn-secondary font-weight-bold rounded py-2" disabled >Pay Now</button>
                             }
                           
                         </div>
                      
                         
                         <div>
                       
                           
                        
                      </div>
                      
                    
                  </div>
                  <div className="col-md-4 mt-3 pl-2 productdetail">
                   <div className="row">
                        {items.map((product, i) => (
                         <CartLayout  key={i} product={product} setRun={setRun}
                         run={run} />
                      ))}
                   
                        </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  

  return (
    <Dashboard className="content-wrapper" title="| Dashboard">
       {newModal()}
     
    <Online> 
    
      {reviewPlan()}   
    </Online>
    
    <Offline><div className="text-center text-muted  align-items-center">
     
      <div className="text-center text-muted pt-5">
      <img src="/images/cloud.svg"  width="60px"/>
      <h5>
      No internet connection found. Check your connection or try again.
      </h5>
      </div>
      </div></Offline>
    </Dashboard>
  );
};

export default ReviewPlan;
