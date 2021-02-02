import React from 'react'
import {Link} from 'react-router-dom'

const SavingSection = () => {
    return (
        <div>
             <div className="saving-section">
          <div className="container">
          <div className="pt-3 col-md-5 pl-0">
           <div className="row">
           <h1 data-aos="zoom-out">
            Take your savings
          </h1>
          <h1 data-aos="zoom-out">
           to the next level.
          </h1>
          <div className="description">
              
          Start saving towards your next house rent — And be eligible for 100% Loan Access for your Rent!
             
          </div>
             <div className="col-6 pl-0">
             <Link to="/" className="download-btn pix-btn" >          
					<div>
                    <span className="btn-icon">
                        <i className="fab fa-google-play" />
                    </span>
                    <span className="btn-text">
                        <small>GET IT ON</small>
                        <em>Google Play</em>
                    </span>
                    </div>				
            </Link>
            </div>
            <div className="col-6 pl-0">
             <Link to="/" className="download-btn pix-btn" >          
					
                 <div>
                    <span className="btn-icon">
                        <i className="fab fa-app-store" />
                    </span>
                    <span className="btn-text">
                        <small>GET IT ON</small>
                        <em>App Store</em>
                    </span>
             </div>

                				
            </Link>
            </div> 
           </div>
          </div>

          </div>

          <div className="app-image avatar">
              <img src="/images/phone-new.png" className="img-fluid" />
          </div>

      </div>
        </div>
    )
}

export default SavingSection
