import React,{useState, useLayoutEffect} from 'react'
import AdminDashboard from '../Pages/AdminDasboard'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../auth'
import {getAllUsers, getAllOrders} from './apiAdmin'
import Loader from '../FullPageLoader/Loader';
import LineChart from './LineChart'
import NewSale from './NewSale'





const AdminOverview = () => {

    const [allusers, setUsers] =useState([]);
    const [loading, setLoading] =useState(false)

    const [allOrders, setAllOrders] =useState([]);
       

    const {user: {firstname, _id}, token} = isAuthenticated()

   

    

    const getUsers = ()=>{
        setLoading(true) 
        getAllUsers(_id,token ).then((response)=>{
          if(response.error){
              setUsers(response.error);
              setLoading(false) 
          }else{
            setUsers(response) 
            setLoading(false) 
          }
        })
    }

    const getOrders = ()=>{
      
        getAllOrders(_id, token).then((response)=>{
          if(response.error){
            console.log(response.data)
          }else{
          
            setAllOrders(response)
          }
        })
    }

   useLayoutEffect(() => {
    getUsers()
    getOrders()
   }, []) 

   const showLoading = ()=>(
       loading && (<Loader />)
   )

    const contents = () =>(
  <div>
    <section className="content">
        {showLoading()}
     <div className="container">
     <div className="row">
             <div className="col-md-12 mt-3" style={{ fontFamily : "poppins"}}>
              <h3 style={{ fontFamily : "poppins", fontWeight:"600", textTransform:"capitalize"}}>Hi {firstname},</h3>
             <p className="text-muted" style={{fontWeight: "600"}}>Welcome back!</p>  
             </div>
         </div> 
     {/* Small boxes (Stat box) */}
     <div className="row">
         <div className="col-lg-3 col-12">
         {/* small box */}
         <div className="small-box bg-info">
             <div className="inner">
             <p>Total Investment</p>
             <h3>
               <NewSale allOrders={allOrders}/></h3>
             </div>
             <div className="icon">
             <i className="fas fa-chart-line" />
             </div>
             <Link to="/dashboard/admin/orders" className="small-box-footer">View Investment <i className="fas fa-arrow-circle-right" /></Link>
         </div>
         </div>
         {/* ./col */}
         <div className="col-lg-3 col-6">
         {/* small box */}
         <div className="small-box bg-purple">
             <div className="inner">
             <p>Total ROI Paid</p>
             <h3><span style={{fontSize:"1.3rem"}}>₦</span>0</h3>
     
             </div>
             <div className="icon">
             <i className="fas fa-piggy-bank" />
             </div>
             <Link to="" className="small-box-footer">View  <i className="fas fa-arrow-circle-right" /></Link>
         </div>
         </div>
        
         <div className="col-lg-3 col-6">
         {/* small box */}
         <div className="small-box bg-warningz">
             <div className="inner">
             <p>Total Loan</p>
             <h3><span style={{fontSize:"1.3rem"}}>₦</span>0</h3>
            
             </div>
             <div className="icon">
             <i className="fas fa-coins" />
             </div>
             <Link to="/dashboard/loan" className="small-box-footer">View  <i className="fas fa-arrow-circle-right" /></Link>
         </div>
         </div>
         <div className="col-lg-3 col-12">
         {/* small box */}
         <div className="small-box bg-success">
             <div className="inner">
             <p>Total Users</p>
             <h3>{allusers.length}</h3>
            
             </div>
             <div className="icon">
             <i className="fas fa-users" />
             </div>
             <Link to="/dashboard/admin/users" className="small-box-footer">View Users <i className="fas fa-arrow-circle-right" /></Link>
         </div>
         </div>
         {/* ./col 
         <div className="col-lg-3 col-12">
         {/* small box 
         <img src="/images/2-factor-min.png" className="img-fluid" />
         
         </div>
         {/* ./col */}
     </div>
     {/* /.row */}
     </div>

     </section>
     <section className="content-bg">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                 <h5 style={{fontFamily:"poppins", fontWeight:"600", color:"#525f7f"}}>Sales<span style={{fontFamily:"Arial"}}>(₦)</span></h5>
                 </div>
               <div className="col-md-12">
                <div className="chart">
                  <div className="card bg">
                  <LineChart />
                  </div>
                 </div>
               </div>
          
             </div>
      
         </div>
     </section>
  
    </div>
)

 
   

    return (
        <AdminDashboard  className="content-wrapper" title="| Dashboard">
        {contents()} 
       </AdminDashboard>
    )
}

export default AdminOverview
