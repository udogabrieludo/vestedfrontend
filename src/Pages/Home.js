import React, {useEffect} from 'react'
import NavBar from '../HomeMenu/NavBar'
import {Link} from 'react-router-dom'
import '../HomeMenu/Home.css'
import Footer from '../HomeMenu/Footer.js'
import AOS from 'aos';
import "aos/dist/aos.css";
import SavingSection from './SavingSection'

export default function Home() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

 const heroSection = ()=>(
     <>
      <div className="hero">
         <div className="container">
          <div className="row">
            <div className="col-md-7">
            <h1 data-aos="fade-down"  data-aos-duration="1000" >
          A smarter way to
          </h1>
          <h1 data-aos="fade-up"
     data-aos-duration="1000">
            grow your  Money
          </h1>
        
          <p data-aos="fade-in"
     data-aos-duration="2000">Enjoy real benefits and rewards on your Investment</p>

          <div className="pt-3 col-md-9 pl-0">
           <div className="row">
             <div className="col-6 pl-3">
             <Link to="/" className="download-btn pix-btn" data-aos="fade-in"
     data-aos-duration="2000">          
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
             <Link to="/" className="download-btn pix-btn" data-aos="fade-in"
     data-aos-duration="2000">          
					
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
                    <h1 data-aos="zoom-out" >Invest now  <br /> for a comfortable tomorrow</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco .
                        </p>
                        <div>
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">Invest NOW <i className="fa fa-long-arrow-right"></i></Link>
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
                      <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000">
                           <div className="box" >
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
                      <div className="col-md-3" data-aos="fade-up" data-aos-duration="2000">
                           <div className="box" >
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
                      <div className="col-md-3" data-aos="fade-up" data-aos-duration="3000">
                           <div className="box" >
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
                      <div className="col-md-3" data-aos="fade-up" data-aos-duration="4000">
                           <div className="box" >
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
       <SavingSection />

      <div className="  loan-section ">       
          <div className="container">
          <div className="row ">
                <div className="col-md-6">
                    <img src="/images/loan3.svg" className="img-fluid "  />
                </div>
                <div className="col-md-6 text-right invest-now">
                   
                    <div>
                    <h1 data-aos="zoom-out">Get access to  <br /> over 50% loan. </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco .
                        </p>
                        <div>
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">APPLY NOW <i className="fa fa-long-arrow-right"></i></Link>
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



