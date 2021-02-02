import React, {useEffect} from 'react'
import NavBar from '../HomeMenu/NavBar'
import {Link} from 'react-router-dom'
import '../HomeMenu/Home.css'
import Footer from '../HomeMenu/Footer.js'
import AOS from 'aos';
import "aos/dist/aos.css";
import './About.css'
import {contents} from './Content'
import SavingSection from '../Pages/SavingSection'

export default function About() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

 const aboutSection = ()=>(
     <>
      <div className="about-hero">
         <div className="container">
          <div className="row">
            <div className="col-md-6 about-hero-content-wrapper">
                   <div className="about-hero-content">
                       <h1 data-aos="fade-down"  data-aos-duration="1000" >
                        A vested place
                        </h1>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1000">
                            to boost your finances
                        </h1>
                   </div>
            </div>
            <div className="col-md-6">
             <img src="/images/Wallet-rafiki.svg" alt="hero-image" className="img-fluid" />
            </div>
          </div>
         </div>
      </div>
     

      <div className="about-main pb-5">       
          <div className="container">
          <div className="row ">
                <div className="col-md-6">
                    <img src="/images/analytics.svg" className="img-fluid "  />
                </div>
                <div className="col-md-6  invest-now ">
                   
                    <div>
                    <h1 data-aos="zoom-out">About Us</h1>
                        <p>
                        Vested Money is a Financial Technology
                         company involved in building and managing sustainable wealth and ensuring financial security. 
                         We provide opportunities for people to expand their finances through our savings plans,
                          low-risk investment opportunities in Agriculture, Real Estate and Technology, and other financial solution services. 
                          We help our clients create a financial roadmap and assist them in achieving their financial goals. At Vested Money, 
                          we guide your steps to financial freedom!


                        </p>
                        <div>
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">Invest now</Link>
                        </div>
                    </div> 
                
                </div>
          </div>  
         </div>   
      </div>
      <SavingSection />

      <div className="about-main loan-section">       
          <div className="container">
          <div className="row header-title">
          <h1 data-aos="zoom-out">Why VestedMoney?</h1>
          <p>We provide opportunities for people to expand their finances through 
              our low risk investment services in Agriculture, Real Estate and 
              Information Technology to maximize returns and contribute to the economic growth. We help our clients create a financial roadmap and assist them in achieving their financial 
              goals. At Vested Money, we guide your steps to financial freedom!</p>
                <div className="col-md-12  invest-now ">
               
                <div className="row how-it-works">
               
                <div className="col-md-12 text-center pt-4">
                   <div className="row">
                      <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                           <div className="box" >
                               <div className="img-box">
                                   <img src="/images/register-icon1.png" className="img-fluid" />
                               </div>
                              <div>
                              <h5>VISION</h5>
                                <div className="text-contents">
                            To be a top leading Financial Technology Company 
                            that helps businesses and individuals achieve their set financial goals and attain financial freedom.

                                </div>
                              </div>
                           </div>
                      </div>
                      <div className="col-md-4 " data-aos="fade-up" data-aos-duration="2000">
                           <div className="box" >
                               <div className="img-box">
                                   <img src="/images/register-icon1.png" className="img-fluid" />
                               </div>
                              <div>
                              <h5>Mission</h5>
                                <div className="text-contents pb-3">
                                To provide various financial solutions to enable our clients have better control of their finances.
                                </div>
                              </div>
                           </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-duration="3000">
                           <div className="box" >
                               <div className="img-box">
                                   <img src="/images/register-icon1.png" className="img-fluid" />
                               </div>
                              <div>
                              <h5>Our Values</h5>
                                <div className="text-contents">
                                -	Simplicity
                                -	Transparency 
                                -	Sustainability 
                                -	Reliability

                                </div>
                              </div>
                           </div>
                      </div>
                   
                   </div>
                   <div className="row pt-5 d-flex justify-content-center">
                       <div className="">
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">Invest now</Link>
                        </div>
                   </div>
                
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
        {aboutSection()}
        <Footer />
        </>

    )
}



