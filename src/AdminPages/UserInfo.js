import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {update, readUser, updateUser} from '../user/ApiUser'

const UserInfo = (props) => {

   const [values, setValues] = useState({
     firstname:"",
     lastname:"",
     username:'',
     phone:"",
     error:"",
     loading:false,
     success:false
   })

   const{firstname,lastname,username, phone, error, loading,success} =values

   const init = (userId)=>{
      console.log(userId)
   }

   useEffect(()=>{
      init(props.match.params.userId)
   },[])

    return (
        <div>
             <form>
            
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Username</label>
                    <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username"  />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" >Email address</label>
                    <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="user@example.com" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >First name</label>
                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Last name</label>
                    <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name"  />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small text-muted mb-4">Contact information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Address</label>
                    <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                    
                  <div className="form-group focused">
                    <label className="form-control-label">Profile Image</label>
                    <div className="custom-file">
                    <input type="file" className="custom-file-input form-control-alternative" id="customFile" />
                    <label className="custom-file-label" >Choose file</label>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" >City</label>
                    <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" >Country</label>
                    <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country"  />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-control-label" >Phone</label>
                    <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Phone " />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-right">
             <Link to="/dashboard/admin/add-investment-plan"
           className="btn py-2 px-3 my-0 "
            style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> Update Account</Link>
             </div>
          </form>
            
        </div>
    )
}

export default UserInfo
