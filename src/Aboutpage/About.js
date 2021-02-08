import React, {useEffect} from 'react'
import NavBar from '../HomeMenu/NavBar'
import {Link} from 'react-router-dom'
import '../HomeMenu/Home.css'
import Footer from '../HomeMenu/Footer.js'
import AOS from 'aos';
import "aos/dist/aos.css";
import './About.css'
import {aboutUs, whyVested, theCompany} from './Content'
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
                           {aboutUs}
                        </p>
                        <div>
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">Invest now <i className="fa fa-long-arrow-right"></i></Link>
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
              <div className="col-md-6">
                <div data-aos="zoom-out">
                    <img src="/images/charts.svg" alt="" className="img-fluid"/>
                </div>
                
                </div> 
                <div className="col-md-6 why-vested">
                   <div>
                   <h1 data-aos="zoom-out">Why VestedMoney?</h1>
                     <p>{whyVested}</p>
                   </div>
                </div>       
                <div className="col-md-12  invest-now ">           
                <div className="row how-it-works">         
                <div className="col-md-12 text-center pt-4">
                   <div className="row">
                      {theCompany && theCompany.map((data, i)=>(
                          <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" key={i}>
                          <div className="box" >
                              <div className="img-box">
                                  <img src={data.img} className="img-fluid" alt="" width="100px" />
                              </div>
                             <div>
                             <h5>{data.title}</h5>
                               <div className="text-contents">
                                 {data.content}

                               </div>
                             </div>
                          </div>
                     </div>
                      ))}
                    
                   </div>
                   {/* <div className="row pt-5 d-flex justify-content-center">
                       <div className="">
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">Invest now <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                   </div>
                 */}
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



