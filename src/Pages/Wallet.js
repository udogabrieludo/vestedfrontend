import React from 'react'
import Dashboard from './Dashboard'

const Wallet = () => {
  return (
    <Dashboard className="content-wrapper">
         <div className="container">
            <div className="row">
               <div className="col-md-12 mt-3" style={{ fontFamily : "poppins"}}>
                 <h3 style={{textTransform:"capitalize"}} className="pb-4"></h3>  

                 <div className="text-center " style={{fontFamily:"poppins"}}>
                  <img src="/images/searching-amico.png" width="250px "className="img-fluid" />
                  <div>
                  <small>Wallet</small>
                  <h3>You have <span style={{fontFamily:"Arial", color:"red"}}>₦0</span> in your wallet</h3>
                  </div>
                
            
                  </div>
                 
                </div>
              </div> 
         
       </div>
    </Dashboard>
  )
}

export default Wallet
