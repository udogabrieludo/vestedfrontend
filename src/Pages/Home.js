import React from 'react'
import Layout from './Layout'

export default function Home() {


 const newModal = ()=>(
   <div className="container">
  <div className="supreme-container">
    {/* Button to Open the Modal */}
    <button type="button" className="btn btn-primary mybtn " data-toggle="modal" data-target="#myModal">
      Click Me !
    </button>
  </div>
  {/* The Modal */}
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <center>  <span className="modal-title">Login form</span></center>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        {/* Modal body */}
        <div className="modal-body">
          <p className="text-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          <div className="form-div">
            <form action="/action_page.php">
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Registered E-Mail ID" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="pwd" placeholder="Password" />
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-warning btn-block mybtn">Submit</button>
              <center><a href="#" title="Reset Password"><small>Forgot Password ?</small></a></center>
              <button type="submit" className="btn btn-primary btn-block mybtn">Login with facebook</button>
              <button type="submit" className="btn btn-danger btn-block mybtn">Login with Google-Plus</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
 )

    return (
        <Layout>
        <div className="container">
           <div className="row">
            <div className="col-md-12">
            
               {newModal()}
             
            </div>
           </div>
        </div>
        </Layout>
    )
}



//use rf and the tap to create rect function