import React from 'react'
import {Link} from 'react-router-dom'

const KycAccount = () => {
    return (
        <div>

                <div className="row">
                    <div className="col-md-12">
                        <div>
                        <label className="form-control-label pr-2">
                        <i className="fa fa-check-circle-o"></i> Chosen credential must not be expired.
                        </label>
                        </div>
                        <div> 
                        <label className="form-control-label ">
                         <i className="fa fa-check-circle-o"></i>  Document should be in good condition and clearly visible.
                        </label>
                        </div>
                        <div>
                        <label className="form-control-label">
                        <i className="fa fa-check-circle-o"></i> There is no light glare or reflections on the card.
                        </label>
                        </div>
                        <div>
                        <label className="form-control-label">
                        <i className="fa fa-check-circle-o"></i> File is at least 1 MB in size and has at least 300 dpi resolution.
                        </label>
                        </div>
                    </div>
                    
                </div>
                <hr className="my-4" />
                <div className="row">
                <div className="col-md-8">
                 
               
                <div className="form-group filez">
                <label className="form-control-label">Upload Here Your Passport or  National ID Card or  Driver’s License Copy</label>
                  <input type="file" className="form-control" multiple name="photo" accept="image/*" />
                </div>
                </div>
                <div className="col-md-4">
                <div className="d-flex h-100">
                   <div className='align-self-center'>
                   <img src="/images/vector-hand.png" width="130px" className="rounded-circle img-fluid" />
                   </div>
                </div>
                </div>
                </div>

                <hr className="my-4" />
            <div className="text-right">
             <Link to="/dashboard/admin/add-investment-plan"
           className="btn py-2 px-3 my-0 "
            style={{backgroundColor:"rgb(7 37 113)", fontWeight:"600", fontSize:".7rem"}}> Update KYC </Link>
             </div>
        </div>
    )
}

export default KycAccount
