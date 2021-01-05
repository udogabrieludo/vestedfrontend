import React from 'react'

export const InvestmentCycle = ({p, product}) => {
    const dates = new Date(product.updatedAt)

    
         

    const options = {  year: 'numeric', month: 'short', day: 'numeric' };
  
    dates.setMonth(dates.getMonth() + p.duration, 30)
  

    return (
        <div>
              {dates.toLocaleDateString('en-US', options)}
        </div>
    )
}
