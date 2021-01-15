import React, { useLayoutEffect,  useState } from "react";
import { isAuthenticated } from "../auth";
import { getOrderDetail, getStatusValues, updateOrderStatus, deleteOrder} from "./apiAdmin";
import AdminDashboard from "../Pages/AdminDasboard";
import NumberFormat from "react-number-format";
import CreatedDate from  '../Pages/CreatedDate'
import { InvestmentCycle } from "../Pages/InvestmentCycle";
import Loader from '../FullPageLoader/Loader';
import {Link} from 'react-router-dom'

import ProgressBar from '@ramonak/react-progress-bar';


const OrderDetail = (props) => {
  const [orders, setOrders] = useState({});

  const [valueStatus, setValueStatus] = useState([])

  const [ loading, setLoading]=useState(false)

  const { user, token } = isAuthenticated();

  const init = (orderId) => {
    setLoading(true)
    getOrderDetail(user._id, token, orderId).then((data) => {
      if (data.error) {
        console.log(data.error);
        setLoading(false)
      } else {
        setOrders(data);
        setLoading(false)
      }
    });
  };

  const getStatus = () => {
    getStatusValues(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValueStatus(data);
      }
    });
  };
   
  
 
  useLayoutEffect(() => {
    const orderId = props.match.params.orderId;
    init(orderId);
    getStatus();
  }, []);

  const handleChange =(e, orderId)=>{
    updateOrderStatus(user._id, token, orderId, e.target.value).then((data)=>{
      if(data.error){
        console.log('Update status failed')
      }else{
        init(orderId);
      }
    })
  }

  const showLoading = ()=>(
    loading && (<Loader  />) 
)
const deleteProductID = (orderId)=>{
  deleteOrder(orderId, user._id, token).then((response)=>{
    if(response.error){
      console.log('error deleting Order')
    }else{
      init()
    }
  })
}
 
const paymentMethod = orders.transaction_id

  const orderDetail = () => (
    <section className="addCategory">
      {showLoading()}
      <div className="container-fluid">
        <div className="row py-3">
          <div className="col-6 ">
            <div>
              <h3
                style={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
               Edit Order 
              </h3>
            </div>
          </div>
          <div className="col-6">
              <div className="text-right">
              <Link to="/dashboard/admin/orders"
            className="btn py-2 px-3 my-0 "
             style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> View All Orders</Link>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="">
              <div className="">
                <div className="container-fluid ">
                  <div className="row">
                    <div className=" col-md-12">
                      <div className="row card mr-md-5">
                        <div className="col-md-12 card-body pt-0">
                        <div className="row" style={{background:"linear-gradient(to top, rgb(2, 12, 121), rgb(5 145 203))",
                               padding:" 1.3rem",
                           color:"#fff"}}>
                           <div className="col-md-9">
                           <div style={{ fontFamily: "poppins" }}>
                           <div className=" ">
                               <div> <span style={{fontSize:"1.5rem", fontWeight:"600"}}>
                               {
                                orders && orders.products &&
                                orders.products.map((e, i) => <span key={i}>{e.name}</span>)
                                  }
                               </span>
                                  <small className="badge badge-warning ml-2">{
                                orders && orders.products &&
                                orders.products.map((e, i) => <span key={i}>{e.brand}</span>)
                                  }</small></div>
                               </div>
                            <p
                              style={{
                                textTransform: "capitalize",
                                marginBottom: "0",
                               
                              }}
                            >
                              Transaction Id:{" "}
                              <span className="text-info">
                                {" "}
                                #{orders.transaction_id}{" "}
                              </span>
                            </p>
                            <p className="mb-0">
                             Payment Method :  {""}

                             {`${paymentMethod}`.toString().length > 8 ? <strong> Paystack</strong>
                              : <>Flutterwave</> }
                             </p>
                            <div>
                             <p>Investment Status :  {""}
                             
                              { orders.status === "Processing"
                                  ? <span  className="badge badge-warning p-2 payment-status">Processing</span>
                                  : ( orders.status === "Completed"
                                    ? <span  className="badge badge-success p-2 payment-status">Verified</span>
                                    : ( <span  className="badge badge-danger p-2 payment-status" >Cancel</span>
                                      
                                    )
                                  )
                                }
                                </p>
                             
                            </div>
                            
                             
                           
                          </div>
                           </div>
                           <div className="col-md-3">
                               <div className="  edit-order ">
                                 <div className="mb-0">Amount invested</div>
                                 <h1
                                  style={{
                                    color: "#525f7f",
                                    fontFamily: "Arial",
                                    fontWeight: "700",
                                     color:" #fff",
                                    fontSize:" 2.8rem"
                                  }}
                                >
                                  <NumberFormat
                                    value={orders.amount}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₦"}
                                    renderText={(value) => <div>{value}</div>}
                                  />
                                </h1>
                                <div className="mb-0">Payment status:
                                <small className="badge badge-warning ml-2">{
                                orders && orders.products &&
                                orders.products.map((e, i) => <span key={i}>Inactive</span>)
                                  }</small>
                                
                                </div>
                                <div className="mb-0">Expected returns: 
                                  
                                <span
                                  style={{
                                    color: "#525f7f",
                                    fontFamily: "Arial",
                                  }}
                                >
                                  <NumberFormat
                                    value={orders.amount + orders.returns}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₦"}
                                    renderText={(value) => <span> {""} <b>{value}</b></span>}
                                  />
                                </span>
                                  </div>
                                  <div className="mb-0">ROI: 
                                  
                                  <span
                                    style={{
                                      color: "#525f7f",
                                      fontFamily: "Arial",
                                    }}
                                  >
                                  <NumberFormat
                                    value={orders.returns}
                                    displayType={"text"}
                                    prefix={"₦"}
                                    thousandSeparator={true}
                                    renderText={(value) => (
                                     
                                        <span><b> {value}</b></span>
                                     
                                    )}
                                  />
                                  </span>
                                    </div>
                               </div>
                           </div>
                           </div>
                          
                       
                          <hr className="mt-0"/>
                          <div className="row">
                          <div className="col-md-12">
                              <h6  className="mb-3"> Track Investment Progress</h6>  
                             {orders.status==="Completed"?  <ProgressBar completed={35} height={'15px'} bgcolor={'#036abb'}  />:
                            <ProgressBar completed={0} height={'15px'} bgcolor={'#036abb'} labelColor={'transparent'}  />}
                          </div>
                          </div>
                          <hr   className="mb-0"/>
                          <div className="row edit-order-bg">
                            <div className="col-md-3 col-4">
                              <div>
                                <small style={{ fontFamily: "poppins" }}>
                                  <strong>Unit</strong>
                                </small>

                                <h6
                                >
                                  {
                                orders && orders.products &&
                                orders.products.map((e, i) => <span key={i}>{e.count}</span>)
                                  }
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3 col-4">
                              <div>
                                <small style={{ fontFamily: "poppins" }}>
                                  <strong>Duration</strong>
                                </small>

                                <h6
                                >
                                {
                                orders && orders.products &&
                                orders.products.map((e, i) => <span key={i}>{e.duration}
                                </span>)
                                  } Months

                                 
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3 col-4">
                              <div style={{ fontFamily: "poppins" }}>
                                <small >
                                <strong>Start Date</strong> 
                                </small>
                                <h6
                                 
                                >
                                  	
                                 <CreatedDate product={orders} />
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3 col-12">
                              <div className="card p-2 mb-0 text-center"  style={{ fontFamily: "poppins" }}>
                                <small>
                                <strong>Matured Date</strong> 
                                </small>
                                <h5
                                  style={{
                                    color: "#525f7f",
                                 
                                  }}
                                > 
                                  {
                                orders && orders.products &&
                                orders.products.map((e, i) => 
                                <InvestmentCycle product={orders}  key={i} p={e}  />
                                )
                                  }
                                  	 
                                      
                                </h5>
                              </div>
                            </div>
                          </div>
                          <hr className="mt-0"/>
                          <div className="row">
                          <div className="col-md-12">
                              <h6> Update Payment Status</h6>  
                          </div>
                          </div>
                          <hr   className="mb-0"/>
                          <div className="row edit-order-bg ">
                            <div className="col-md-3 ">
                              <div>
                              <label>Status</label>
                                 <div className=" categoryCard">
                               
                                <select className=" form-control" onChange={(e)=>handleChange(e, orders._id)}>
                                 <option>Update Status</option>
                                 {valueStatus && valueStatus.map((status, i)=>(
                                   <option key={i} value={status}>{status}</option>
                                 ))}
                                
                                </select>
                            </div>
                              </div>
                            </div>
                            <div className="col-md-6 ">
                              <div className="text-md-center text-capitalize">
                           
                              <small>
                                <strong>Investor Name</strong> 
                                </small>
                                 <h6>
                              
                                 <i className="fa fa-user"></i> {
                                orders && orders.user &&
                                orders.user.firstname} {""} {
                                  orders && orders.user &&
                                  orders.user.lastname}
                               
                            </h6>
                              </div>
                            </div>
                            
                            <div className="col-md-3 ">
                              <div className="text-md-center">
                              <small>
                                <strong>Phone</strong> 
                                </small>
                                 <h6>
                              
                               <i className="fa fa-phone"></i> {
                                orders && orders.user &&
                                orders.user.phone} 
                               
                            </h6>
                              </div>
                              
                            </div>
                            
                            <div className="col-md-12 ">
                            <hr className="mb-2"/>
                              <div className=" text-capitalize">
                              <label >Marketer: {
                                orders && orders.user &&
                                orders.user.marketer} </label>
                              
                              </div>
                            </div>
                            
                            
                          </div>
{/*                         
                          { orders.status === "Completed"
                            ? <small className="badge badge-secondaryz p-2 pull-right" disabled><strong>Pending Withdrawal</strong></small>:<></>} */}
                        </div>
                        
                      </div>
                    </div>
                    {/* <div className="col-md-3  ">
                      <div className="edit-order card">
                      <p className="text-md-right pr-2"><strong style={{fontSize:".7rem"}}> Payment Status</strong></p>
                      { orders.status === "Processing"
                        ? <img src="/images/unpaid.png" className="img-fluid" alt="img" />
                        : ( orders.status === "Completed"
                          ? <img src="/images/paid.png" className="img-fluid" alt="img" />
                          : ( <img src="/images/cancel.png" className="img-fluid" alt="img" />
                            
                          )
                        )
                      }
                      </div>
                      
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <AdminDashboard className="content-wrapper" title="| Dashboard">
      {orderDetail()}
     
    </AdminDashboard>
  );
};

export default OrderDetail;
