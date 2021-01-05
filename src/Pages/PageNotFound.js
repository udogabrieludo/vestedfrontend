import React from 'react'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../auth'

export default function PageNotFound() {

   // const {user: {role}} = isAuthenticated();
    return (
        <section className="pagenotfound" >
        <div className="container">
           <div className="row">
               <div className="col-md-12">
                   
               <img src="/images/404.gif" className="img-fluid" style={{width:"20rem", margin:"auto", display:"block", marginTop:"-5rem"}}/>
               <h4 className="text-center" style={{ marginTop:"-1rem", paddingBottom:".5rem", fontFamily:"poppins"}}>PAGE NOT FOUND</h4>
               </div>
               <div  className="col-md-12 ">
                  <div className="text-center">
                 {/*} { role === 0 ?
                    <Link to="/dashboard" className="btn btn-primary" style={{background:"#093b96fc", 
                    fontFamily:"poppins", fontSize:".9rem",
                     fontWeight:'500',
                     borderRadius:"10rem"
                     }}>BACK TO HOME</Link> :
                     
                     <Link to="/dashboard/admin-overview" className="btn btn-primary" style={{background:"#093b96fc", 
                     fontFamily:"poppins", fontSize:".9rem",
                      fontWeight:'500',
                      borderRadius:"10rem"
                      }}>BACK TO HOME</Link>
                }  */}
                  </div>
               </div>
           </div>
          
            
        </div>
        </section>
    )
}
