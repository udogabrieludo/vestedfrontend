import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'

export default function Content() {
   
    const contents = () =>(
        <div className="content-wrapper">
        <section className="content">
     <div className="container">
     <div className="row">
             <div className="col-md-12 mt-3" style={{ fontFamily : "poppins"}}>
             <h3 >Hi Gabriel,</h3>  
             <p className="text-muted" style={{fontWeight: "500"}}>Welcome to vestedmoney!</p>   
             </div>
         </div> 
     {/* Small boxes (Stat box) */}
     <div className="row">
         <div className="col-lg-3 col-12">
         {/* small box */}
         <div className="small-box bg-info">
             <div className="inner">
             <p>Total Investment</p>
             <h3><span style={{fontSize:"1.3rem"}}>₦</span>150,000</h3>
           
             </div>
             <div className="icon">
             <i className="fas fa-chart-line" />
             </div>
             <a href="#" className="small-box-footer">My Investment <i className="fas fa-arrow-circle-right" /></a>
         </div>
         </div>
         {/* ./col */}
         <div className="col-lg-3 col-12 ">
         {/* small box */}
         <div className="small-box bg-purple">
             <div className="inner">
             <p>Total Saving</p>
             <h3><span style={{fontSize:"1.3rem"}}>₦</span>0</h3>
     
             </div>
             <div className="icon">
             <i className="fas fa-piggy-bank" />
             </div>
             <a href="#" className="small-box-footer">My Savings <i className="fas fa-arrow-circle-right" /></a>
         </div>
         </div>
        
         <div className="col-lg-3 col-12">
         {/* small box */}
         <div className="small-box bg-warning">
             <div className="inner">
             <p>Total Loan</p>
             <h3><span style={{fontSize:"1.3rem"}}>₦</span>0</h3>
            
             </div>
             <div className="icon">
             <i className="fas fa-coins" />
             </div>
             <a href="#" className="small-box-footer">Loan History <i className="fas fa-arrow-circle-right" /></a>
         </div>
         </div>
         {/* ./col */}
     </div>
     {/* /.row */}
     </div>

     </section>
     <section className="content-bg">
         <div className="container">
             <div className="row">
                 <div className="col-md-7">
                     <h6 style={{fontFamily:"poppins"}}>Quick Actions</h6>
                    <div className="col-md-12 pl-0">
                         <div className="quickaction alert alert-info" style={{  borderRadius:".5rem"}}>
                            <div className="py-1 px-3 ">
                            <i className="fas fa-chart-line"></i> 
                             
                             <div className="leadText">Investment</div> 
                             <p> Invest now for a comfortable tomorrow!</p>
                              <hr />
                              <button type='button' className="btn py-2 px-3 my-0" style={{backgroundColor:"#0481b7", fontWeight:"500", fontSize:".7rem"}}>Invest Now</button>
                             </div> 
                         </div>
                     </div>
                     <div className="col-md-12 pl-0">
                         <div className="quickaction alert alert-success" style={{ borderRadius:".5rem"}}>
                            <div className="px-3">
                       
                             
                             <div className="leadText">Add Your BVN</div> 
                             <p>Your BVN helps us protect you from fraudulent transactions.</p>
                              <hr />
                              <button type='button' className="btn py-2 px-3 mt-0" style={{backgroundColor:"green", fontWeight:"500", fontSize:".7rem"}}>Add Now</button>
                             </div> 
                             
                         </div>
                     </div>
                 </div>
                 <div className="col-md-2">
                

                 </div>
                 <div className="col-md-3">
                
                     <div className="help text-right">
                         <Link to="">
                              <img src="/images/help1.svg" className="img-fluid" />                        
                         </Link>
                         <button type="button" className="btn bg-info ">Help and Support?</button>
                        
                     </div>

                  </div>
             </div>
         </div>
     </section>
  
    </div>


)
    

    return (
          
     <Dashboard>

     </Dashboard>
    
    )
}
