import React from 'react'

const CreatedDate = ({product}) => {
    const dates = new Date(product.updatedAt)

    
         

    const options = {  year: 'numeric', month: 'short', day: 'numeric' };
  
    dates.setMonth(dates.getMonth() + 1, 1)
  

    return (
        <div>
              {dates.toLocaleDateString('en-US', options)}
        </div>
    )
}

export default CreatedDate
