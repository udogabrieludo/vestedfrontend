import React, { useLayoutEffect,  useState } from "react";
import { isAuthenticated } from "../auth";
import { getOrderDetail, getStatusValues, updateOrderStatus} from "../AdminPages/apiAdmin";
import Dashboard from './Dashboard';
import NumberFormat from "react-number-format";
import CreatedDate from  './CreatedDate'
import { InvestmentCycle } from "./InvestmentCycle";
import Loader from '../FullPageLoader/Loader';
import {Link, Redirect} from 'react-router-dom'
import {bankNames} from '../AdminPages/BankList'
import {withdrawRequest} from './ApiCore'
import '../user/Transactiondetails.css'

import ProgressBar from '@ramonak/react-progress-bar';






const TransactionDetail = ({match}) => {
  const [orders, setOrders] = useState({});

  const [redirect, setRedirect] = useState(false);
 

  const currentDates = new Date()
  const option = {  year: 'numeric', month: 'short', day: 'numeric' };

  const startDates = new Date(orders.updatedAt)

    
         

  const options = {  year: 'numeric', month: 'short', day: 'numeric' };

  startDates.setMonth(startDates.getMonth() + 1, 1)

  
  const [myWithdraw, setwithdraw] = useState({
    amount :"",
    bankName : "",
    accountName: "",
    accountNumber: "",
    error:"",

  })

  const{ amount, bankName, accountName, accountNumber} = myWithdraw
  const [ loading, setLoading]=useState(false)

  const { user, token } = isAuthenticated();

  const redirectTo =() =>{
    if(redirect){
      return <Redirect to={`/dashboard/transaction/${match.params.orderId}`} />;
    }
   
  } 

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


  
 
  useLayoutEffect(() => {
    const orderId = match.params.orderId;
    init(orderId);
   ;
  }, []);

 

  const showLoading = ()=>(
    loading && (<Loader  />) 
)
 
 

 const paymentMethod = orders.transaction_id

 const matureDate = ()=>(
   <>
     {
      orders && orders.products &&
      orders.products.map((e, i) => 
      <InvestmentCycle product={orders}  key={i} p={e}  />
      )
        }
   </>
 )






 const newMatureDate = matureDate()

 const newEventDate = startDates.getTime()
 const newStartDate = currentDates.getTime()



const newinvest =()=>{
  if(newStartDate < newEventDate){
    return <small  className="badge badge-warning">Not Active</small>
  }else if (newStartDate >= newEventDate  ){
    return <small  className="badge badge-success"> In Progress</small>
  }else{
   return <small  className="badge badge-secondary"> Investment matured</small>
  }
}
 

  const orderDetail = () => (
    <section className="addCategory">
      {showLoading()}
      {redirectTo()}
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
             Transaction Details 
              </h3>
            </div>
          </div>
          <div className="col-6">
              <div className="text-right">
              <Link to="/dashboard/transaction"
            className="btn py-2 px-3 my-0 "
             style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> View All</Link>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="">
              <div className="">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row card mr-md-5 ">
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
                                    {newinvest()} 
                                   
                                     
                                  
                                         
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
                                <small className=" ml-2"> { orders.status === "Processing"
                                  ? <small  className="badge badge-warning">Processing</small>
                                  : ( orders.status === "Completed"
                                    ? <small  className="badge badge-success ">Verified</small>
                                    : ( <small  className="badge badge-danger " >Cancel</small>
                                      
                                    )
                                  )
                                }</small>
                                
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
                                 
                                  
                               
                                  
                               </div>
                           </div>
                           </div>
                         
                          <hr className="mt-0"/>
                          <div className="row">
                          <div className="col-md-12">
                              <h6  className="mb-3"> Track Investment Progress</h6>  
                             {orders.status==="Completed"?  <ProgressBar completed={50} height={'15px'} bgcolor={'#036abb'}  />:
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
                                orders.products.map((e, i) => <span key={i}>{e.duration}</span>)
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
                              <h6> User Info</h6>  
                          </div>
                          </div>
                          <hr   className="mb-0"/>
                          <div className="row edit-order-bg ">
                           
                            <div className="col-md-4 ">
                              <div className=" text-capitalize">
                           
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
                            
                            <div className="col-md-4 ">
                              <div className="">
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
                            
                            <div className="col-md-4 ">
                           
                              <div className=" text-capitalize">
                              <label >Marketer  </label>
                              <h6>
                              {
                                orders && orders.user &&
                                orders.user.marketer}
                              </h6>
                              
                              </div>
                            </div>
                            
                            
                          </div>
                          <div>
                          {/* <Link to="" className="badge badge-success p-2 pull-right"
                                 data-toggle="modal" data-target="#myModal"
                            >
                               WITHDRAWAL AVAILABLE
                            </Link> */}

{/*                         
                          { currentD != newMatureDate
                            ? 
                            <Link to="" className="badge badge-success p-2 pull-right"
                                 data-toggle="modal" data-target="#myModal"
                            >
                               WITHDRAWAL AVAILABLE
                            </Link>
                            
                            :<>
                            <small  className="badge badge-secondaryz p-2 pull-right" disabled><strong> 
                              
                              WITHDRAW NOT AVAILABLE</strong></small>
                            
                            </>} */}
                          </div>
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
                      <div>
                        
                       
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


  const handleChange = name => e => {
    setwithdraw({...myWithdraw, error: false, [name]:e.target.value})
  }

  const withdrawalRequest = e =>{
    e.preventDefault();
    const widthdrawData = {
      orders: orders,
      amount: amount,
      accountName: `${accountName}`,
      accountnumber: accountNumber,
      bank:`${bankName}`,
      transaction_id:`${paymentMethod}`
    }

    withdrawRequest(user._id, token, widthdrawData).then((res)=>{
      if(res.error){
        setwithdraw({...myWithdraw, error: res.error, })
      }else{
        setwithdraw({...myWithdraw, amount:"", accountName:"", accountNumber:"", bankName:"", error:""})
        setRedirect(true)   
      }
    })
   }

  const newModal = ()=>(
    <div className="container">
  
   {/* The Modal */}
   <div className="modal fade" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
         {/* Modal Header */}
         <div>
           
           <button type="button" className="close btn  
           btn-circle" style={{color:"#000",fontSize:'1.2rem', background:"#fff", padding:"10px", width:"40px", height:"40px"}}  data-dismiss="modal">×</button>
         </div>
         {/* Modal body */}
         <div className="modal-body">
           <div className="text-intro" style={{fontFamily:"poppins"}}>
            <div className="container">
            <div className=" card py-4 pl-3 withdraw border-0">
                
               <h6>Expected Returns</h6>
               <h3 className="text-left"><NumberFormat
                                    value={orders.amount + orders.returns}
                                    displayType={"text"}
                                    thousandSeparator={true} 
                                    renderText={(value) => <div><span style={{fontFamily:"arial"}}>₦</span>{value}</div>}
                    /></h3>
               </div>
            </div>


             {/*  Modal submit  */}

             <form onSubmit={withdrawalRequest}>     
               <div className="container">
                <div className="row">
               
            
                <div className="col-lg-12">
                  <div className="form-group">
                 
                 
                    <select className="form-control form-control-alternative" onChange={handleChange("bankName")} >
                    <option>Choose Bank...</option>
                    {bankNames && bankNames.map((bank, i)=>(
                         <option key={i} value={bank.id}>{bank.name}</option>
                      ))}
                    </select>
                   
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group focused">
                   
                    <input type="text"  onChange={handleChange('accountNumber')} defaultValue={accountNumber} className="form-control form-control-alternative" placeholder="Account Number"  />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group focused">
                    <input type="number"     onChange={handleChange('amount')} defaultValue={amount} className="form-control form-control-alternative" placeholder=" Amount" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-success  py-2 px-3 my-0" >Withdraw</button>
            </div>
            
            </form>
              </div>
          
         </div>
       </div>
     </div>
   </div>
 </div>
 
   
  )
 



  return (
    <Dashboard className="content-wrapper" title="| Dashboard">
      {orderDetail()}
       {newModal()}
    </Dashboard>
  );
};

export default TransactionDetail;
