import React from 'react'

const FullPageLoader = () => {
    return (
    
       <section>
        <div className="fp-container"> 
           
            <img src="/logo.png" className="rotate fp-loader" width="70" height="70" style={{margin:"auto", display:"block"}} alt="loading-spinner" />
        </div>
        </section>
    )
}

export default FullPageLoader
