import React from 'react'
import Dashboard from './Dashboard'

const Loan = () => {
  return (
    <Dashboard className="content-wrapper">
         <div className="container">
            <div className="row">
               <div className="col-md-12 mt-3" style={{ fontFamily : "poppins"}}>
                 <h3 style={{textTransform:"capitalize"}} className="pb-4"></h3>  

                 <div className="text-center " style={{fontFamily:"poppins"}}>
                  <img src="/images/searching-amico.png" width="250px "className="img-fluid" />
                  <div>
                  <small>Loan</small>
                  <h3>Coming Soon!</h3>
                  </div>
                
            
                  </div>
                 
                </div>
              </div> 
         
       </div>
    </Dashboard>
  )
}

export default Loan
