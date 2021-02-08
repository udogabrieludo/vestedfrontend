import React, {useEffect} from 'react'
import NavBar from '../HomeMenu/NavBar'
import {Link} from 'react-router-dom'
import '../HomeMenu/Home.css'
import Footer from '../HomeMenu/Footer.js'
import AOS from 'aos';
import "aos/dist/aos.css";
import './Invest.css'
import { sector} from  '.././Aboutpage/Content'


const Invest =()=>{

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

 const investSection = ()=>(
     <>
      <div className="about-hero">
         <div className="container">
          <div className="row">
            <div className="col-md-6 about-hero-content-wrapper">
                   <div className="about-hero-content">
                       <h1 data-aos="fade-down"  data-aos-duration="1000" >
                        Build and manage
                        </h1>
                        <h1 data-aos="zoom-in"
                            data-aos-duration="1000">
                           a diverse investment
                        </h1>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1000">
                           portfolio with us!
                        </h1>
                   </div>
            </div>
            <div className="col-md-6">
             <img src="/images/investing-4.svg" alt="hero-image" className="img-fluid" />
            </div>
          </div>
         </div>
      </div>
     

      <div className="invest-main pb-5">       
          <div className="container">
            
          <div className="row ">
                <div className="col-md-6">
                    <img src="/images/finance-4.svg" className="img-fluid "  />
                </div>
                <div className="col-md-6  invest-now ">
                   
                    <div>
                    <h1 data-aos="zoom-out">We put your money to work for you</h1>
                        <p>                
                        Invest in any of our projects across different sectors and earn as high as 45% yearly!
                        </p>
                        <div>
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">Invest now <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                    </div> 
                
                </div>
          </div>  
         </div>   
      </div>
     

      <div className="invest-main loan-section">       
          <div className="container">

          <div className="row header-title">      
                <div className="col-md-12  invest-now ">           
                <div className="row">         
                <div className="col-md-12  pt-4">
                <h1>Investment Sectors</h1>
                <p>                
                        Invest in any of our projects across different sectors and earn as high as 45% yearly!
                        </p>
                   <div className="row text-center">
                      {sector && sector.map((data, i)=>(
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
                   <div className="row pt-5 d-flex justify-content-center">
                       <div className="">
                            <Link to="/dashboard" className="btn py-2 px-5" type="button">Invest now <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                   </div>
         


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                   
            </ul>
    </div >
                
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
        {investSection()}
        <Footer />
        </>

    )
}

export default Invest


