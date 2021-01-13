import React from 'react'
import NavBar from '../HomeMenu/NavBar'
import {Link} from 'react-router-dom'
import '../HomeMenu/Home.css'
import Footer from '../HomeMenu/Footer.js'

export default function Home() {

 const heroSection = ()=>(
     <>
      <div className="hero">
         <div className="container">
          <div className="row">
            <div className="col-md-7">
            <h1>
          A smarter way to
          </h1>
          <h1>
            grow your  Money
          </h1>
        
          <p>Enjoy real benefits and rewards on your Investment</p>

          <div className="pt-3 col-md-9 pl-0">
           <div className="row">
             <div className="col-6 pl-3">
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
            <div className="col-6">
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
            <div className="col-md-5">
             {/* <img src="/images/hero-image.png" alt="hero-image" className="img-fluid" /> */}
            </div>
          </div>
         </div>
      </div>
      <div className="  main-section ">       
         <div className="container">
         <div className="row ">
                <div className="col-md-6">
                    <img src="/images/invest-2.png" className="img-fluid avatar"  />
                </div>
                <div className="col-md-6 text-right invest-now">
                   
                    <div>
                    <h1>Invest now  <br /> for a comfortable tomorrow</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco .
                        </p>
                        <div>
                            <a className="btn py-2 px-5" type="button">Invest NOW</a>
                        </div>
                    </div> 
                
                </div>
          </div> 
        </div>    
      </div>
      <div className="container">       
          <div className="row how-it-works pb-5">
                <div className="col-md-12 ">
                  <div className="text-center">
                     <h1>How it works</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                  </div>
                </div>
                <div className="col-md-12 text-center pt-4">
                   <div className="row">
                      <div className="col-md-3">
                           <div className="box">
                               <div className="img-box">
                                   <img src="/images/register-icon1.png" className="img-fluid" />
                               </div>
                              <div>
                              <h5>Sign up</h5>
                                <div className="text-contents">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                </div>
                              </div>
                           </div>
                      </div>
                      <div className="col-md-3">
                           <div className="box">
                               <div className="img-box">
                                   <img src="/images/pick-plan1.png" className="img-fluid" />
                               </div>
                              <div>
                              <h5>Invest</h5>
                                <div className="text-contents">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                </div>
                              </div>
                           </div>
                      </div>
                      <div className="col-md-3">
                           <div className="box">
                               <div className="img-box">
                                   <img src="/images/confirmation-icon1.png" className="img-fluid" />
                               </div>
                              <div>
                              <h5>Confirmation</h5>
                                <div className="text-contents">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                </div>
                              </div>
                           </div>
                      </div>
                      <div className="col-md-3">
                           <div className="box">
                               <div className="img-box">
                                   <img src="/images/returns-icon2.png" className="img-fluid" />
                               </div>
                              <div>
                              <h5>Returns</h5>
                                <div className="text-contents">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                </div>
                              </div>
                           </div>
                      </div>
                   </div>
                
                </div>
          </div>     
      </div>
      <div className="saving-section">
          <div className="container">
          <div className="pt-3 col-md-5 pl-0">
           <div className="row">
           <h1>
            Take your savings
          </h1>
          <h1>
           to the next level.
          </h1>
          <div className="description">
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             
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

      <div className="  loan-section ">       
          <div className="container">
          <div className="row ">
                <div className="col-md-6">
                    <img src="/images/loan-vector.png" className="img-fluid "  />
                </div>
                <div className="col-md-6 text-right invest-now">
                   
                    <div>
                    <h1>Get access to  <br /> over 50% loan. </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco .
                        </p>
                        <div>
                            <a className="btn py-2 px-5" type="button">APPLY FOR LOAN</a>
                        </div>
                    </div> 
                
                </div>
          </div>  
         </div>   
      </div>
      
     </>
 )
 

    return (
        <>
        <NavBar />
        {heroSection()}
        <Footer />
        </>

    )
}



