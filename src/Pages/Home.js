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
              <div className="hero-title">
                <h1 data-aos="fade-down"  data-aos-duration="1000" >
                    A smarter way to
                    </h1>
                    <h1 data-aos="fade-up"
                data-aos-duration="1000">
                        grow your  Money
          </h1>
        
          <p data-aos="fade-in"
     data-aos-duration="2000">Enjoy real benefits and rewards on your Investment</p>
              </div>

          <div className="pt-3 col-md-9 col-12 pl-0 pr-0">
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
                <div className="col-md-6 order-2 order-sm-12">
                    <img src="/images/invest-2.png" className="img-fluid avatar"  />
                </div>
                <div className="col-md-6  invest-now order-1 order-sm-12">
                   
                    <div className="mt-5">
                    <h1 data-aos="zoom-out" >Invest now  <br /> for a comfortable tomorrow</h1>
                        <p>
                        At vested money, we enable you attain financial freedom by ensuring that your money is working as much as you do. We have a range of investment opportunities in agriculture, real estate, and technology, so you don’t have to struggle with 
                        choosing the right investment. There’s always a plan that suits your pocket, we help you find it!
                        </p>
                        <div className="text-left">
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
                     <p>
                     Tell us about yourself and we’ll give you recommendations that fits your earnings. 
                     Proceed to sign up by opening an account. You’re now at the one-stop place to save, invest and access loans easily.
                     </p>
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
                                Sign up to get a dashboard automatically 
                                created for you. It takes less than two minutes to create an account, don’t be lazy
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
                                Peruse different investment options to select an investment plan of your choice.
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
                                Your investment order is summarized on your dashboard and confirmed upon payment.
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
                                Start earning returns on your investments.
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
                    <h1 data-aos="zoom-out">Experience <br /> is Everything </h1>
                        <p>
                        We believe experience is everything. We guarantee seamless user experience while saving, investing or accessing loans. Our process is simple,
                         transparent and easy. We provide access to cutting edge features that you seldom see anywhere.
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



