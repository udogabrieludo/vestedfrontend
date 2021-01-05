import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span></button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                
                <Link className="nav-item nav-link"to="/login">Login</Link>
                <Link className="nav-item nav-link" to="/register">Register</Link>
                <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
            
                </div>
            </div>
        </nav>

    )
}

export default withRouter( Menu)