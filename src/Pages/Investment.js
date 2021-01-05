import React from 'react'
import Dashboard from './Dashboard'

export default function Investment() {
   
    const Invest = () =>(
        <div>
            <h1>Investment</h1>
        </div>
    )

    return (
        <Dashboard className="content-wrapper">
            { Invest() }
        </Dashboard>
    )
}
