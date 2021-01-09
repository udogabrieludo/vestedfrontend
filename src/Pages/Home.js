import React from 'react'
import NavBar from '../HomeMenu/NavBar'
import Layout from './Layout'
import '../HomeMenu/Home.css'

export default function Home() {

 const heroSection = ()=>(
     <>
      <div className="hero">
         <div className="container">
          <div>
          <h1>
          A Smarter
          </h1>
          <h1>
           way to grow your 
          </h1>
          <h1>
           Money
          </h1>
          <p>Enjoy real benefits and rewards on your Investment</p>

          <a className="btn btn-info btn-hero">GET STARTED</a>
          <div className="pt-3 col-md-4">
           <div className="row">
           <img src="images/playstore.png" width="140px" className="img-fluid mr-2"/>
           <img src="images/appstore2.png" width="140px" className="img-fluid"/>    
           </div>
          </div>
          </div>
         </div>
      </div>
      <div className="container d-flex justify-content-center">
         
           <div className="mt-5">
           <img src="/images/macbook1.png" />
           </div>
           <div>
           
           </div>
         
      </div>
     </>
 )
 

    return (
        <>
        <NavBar />
        {heroSection()}
        </>

    )
}



