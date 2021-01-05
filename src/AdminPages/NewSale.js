import React from 'react'
import NumberFormat from "react-number-format";

const NewSale = ({allOrders}) => {

    const getTotal =()=>{
        // Reduce menthod is use to sum up or calculate array so you can have an output

        return allOrders.reduce((currentValue , nextValue)=>{

            return (nextValue.status !=="Completed"?currentValue :currentValue +  nextValue.amount)
        }, 0) }

    return (
        <div>
            <NumberFormat  value= {getTotal()} displayType={"text"} thousandSeparator={true}
             renderText={(value) => <div> <span style={{ fontSize: "1.3rem" }}>₦</span>{value}</div>} />      
        </div>
    )
}

export default NewSale
