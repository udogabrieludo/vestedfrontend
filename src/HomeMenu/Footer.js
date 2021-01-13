import React from 'react'
import './Footer.css'

const Footer = () => {

    const footerSection =()=>(
        <>
       {/* Footer */}
<section id="footer">
  <div className="container">
    <div className="row text-center text-xs-center text-sm-left text-md-left">
      <div className="col-xs-12 col-sm-6 col-md-4">
      <div>
      <img src="/images/VestedMoney-Logo1.png" alt="" className="img-fluid"  width="130px"/>
      </div>
        <div className="pt-3 footer-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        eiusmod tempor
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-2">
        <h5>Quick links</h5>

        <ul className="list-unstyled quick-links">
          <li><a href=""><i className="fa fa-angle-double-right" />Home</a></li>
          <li><a href=""><i className="fa fa-angle-double-right" />Who we are</a></li>
          <li><a href=""><i className="fa fa-angle-double-right" />Savings</a></li>
          <li><a href=""><i className="fa fa-angle-double-right" />Loan</a></li>
          <li><a href=""><i className="fa fa-angle-double-right" />Invest</a></li>
        </ul>

        
      </div>
      <div className="col-xs-12 col-sm-6 col-md-2">
        <h5>Quick links</h5>
        <ul className="list-unstyled quick-links">
        <li><a href=""><i className="fa fa-angle-double-right" />FAQs</a></li>
        <li><a href=""><i className="fa fa-angle-double-right" />Contacts</a></li>
          <li><a href=""><i className="fa fa-angle-double-right" />Terms</a></li>
          <li><a href=""><i className="fa fa-angle-double-right" />Privacy</a></li>

        </ul>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <h5>Contacts</h5>
        <ul className="list-unstyled quick-links">
        <li><a href="">29A Adekunle Banjo Street. Magodo GRA Phase 2, Lagos State.</a></li>
        <li><a href="">+44 (0) 1616414644</a></li>
        <li><a href="">+234 08065684757</a></li>
          <li><a href="">info@vestedmoney.ng</a></li>
          

        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
        <ul className="list-unstyled list-inline social text-center">
          <li className="list-inline-item"><a href=""><i className="fa fa-facebook" /></a></li>
          <li className="list-inline-item"><a href=""><i className="fa fa-twitter" /></a></li>
          <li className="list-inline-item"><a href=""><i className="fa fa-instagram" /></a></li>
          <li className="list-inline-item"><a href=""><i className="fa fa-google-plus" /></a></li>
         
        </ul>
      </div>
      <hr />
    </div>	
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        <p className="h6">© All right Reversed.<a className="text-footer ml-2" href="" target="_blank">Vestedmoney</a></p>
      </div>
      <hr />
    </div>	
  </div>
</section>
{/* ./Footer */}

        </>
    )
    return (
        <div>
            {footerSection()}
        </div>
    )
}

export default Footer
