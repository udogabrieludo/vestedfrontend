import React from 'react'
import {Link} from 'react-router-dom'

const Forgot_password = () =>{
    const forgetPasswordForm = () =>(
        <div className="registerwrapper">
            
        <div className="container register-form">
       {/* <img src="/images/lock.png" className="img-fluid image-size"  />   */}
        <Link to="/"> <img src="/images/VestedMoney-Logo.png" alt='logo' className="img-fluid image-size"  /></Link>
          <div className="form registerForm">
          <div className="note">
          {/*<h3>MEMBER LOGIN</h3>*/}
          <h5> FORGOT YOUR PASSWORD ?</h5>
          <p style={{ color: "#111"}}> Enter the email address associated with your vested money account to reset your password.</p>
          </div>
          <div className="form-content">
          <div className="row">
             
              <div className="col-md-12">
                  <div className="form-group">
                      <input type="email"  className="form-control" placeholder="Your Email "  />
                  </div>
             
              </div>     
          </div>
          
          <button type="button" className="btnSubmit" >RESET PASSWORD</button>
          </div>
         
      </div>
      <div className="loginText">
               
     <p><Link style={{ color: "rgb(222 219 219)"}} to="/login"><i className="fa fa-arrow-left"></i> BACK TO LOGIN</Link></p>
     </div>
      </div>

   </div>
      )

   return (
       <div>
         {forgetPasswordForm()}
       </div>
   )
       
    

}
export default Forgot_password