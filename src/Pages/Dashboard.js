import React from 'react'
import Header from '../Dashboard/Header'
import Menu from '../Dashboard/Menu'




const Dashboard =( {  children, className}) => { 
  
    return (
         <div>
         
           <Header />
           <Menu />
           <div className={className}>
               {children}
           </div>
          
          {/* <Content />  <Footer /> */}
        </div>
    )
}

export default Dashboard;

