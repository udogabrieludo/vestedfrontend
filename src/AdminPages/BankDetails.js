import React from 'react'
import {Link} from 'react-router-dom'
import {bankNames} from './BankList'

const BankDetails = () => {

 
    return (
        <div>
            <form>
            
            <div className="pl-lg-4">
              <div className="row">
            
                <div className="col-lg-12">
                  <div className="form-group">
                  <label className="form-control-label" >Bank Name</label>
                 
                    <select className="form-control form-control-alternative">
                    <option>Choose...</option>
                      {bankNames && bankNames.map((bank, i)=>(
                         <option key={i} value={bank.id}>{bank.name}</option>
                      ))}
                     
                    </select>
                   
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Account Name</label>
                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="Account Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" >Account Number</label>
                    <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Account Number"  />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small text-muted mb-4">Bvn information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="alert alert-warning" style={{fontFamily:"lato"}}>
                   <h6> Why do we ask for your BVN?</h6>

                    <p>To confirm your identity on Vestedmoney, you need to connect your BVN. This does not give Vestedmoney any access to your bank information or balances. 
                    This just enables Vestedmoney confirm your identity (real name, phone number & date of birth) from your bank.</p>
                  </div>
                  <div className="form-group focused">
                    <label className="form-control-label">BVN Number</label>
                    <input id="input-address" className="form-control form-control-alternative" placeholder="Your BVN Number" type="text" />
                  </div>
                </div>
              </div>
             
            </div>
            <hr className="my-4" />
            <div className="text-right">
             <Link to="/dashboard/admin/add-investment-plan"
           className="btn py-2 px-3 my-0 "
            style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> Update Bank Details</Link>
             </div>
          </form>
            
        </div>
    )
}

export default BankDetails
