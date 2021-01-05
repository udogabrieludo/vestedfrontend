import React from 'react'
import {Link} from 'react-router-dom'

const Security = () => {
    return (
        <div>
              <form>
            
            <div className="pl-lg-4">
              <div className="row">
            
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-control-label" >Old Password</label>
                    <input type="password" className="form-control form-control-alternative" placeholder="Old Password" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">New Password</label>
                    <input type="password"  className="form-control form-control-alternative" placeholder="New Password" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Confirm New Password</label>
                    <input type="password"  className="form-control form-control-alternative" placeholder="Confirm Password"  />
                  </div>
                </div>
              </div>
            </div>
           
            <hr className="my-4" />
            <div className="text-right">
             <Link to="/dashboard/admin/add-investment-plan"
           className="btn py-2 px-3 my-0 "
            style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> Update Password</Link>
             </div>
          </form>
            
        </div>
    )
}

export default Security
