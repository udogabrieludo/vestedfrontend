import React from 'react'
import {API} from '../config'

const ShowProductImage = ({item, url}) => {
    return (
        <div className="product-img">
           {item._id ? <img src={`${API}/${url}/photo/${item._id}?${new Date().getTime()}`}  alt={item.name} className="img-fluid imgz" />:""}    
        </div>
    )
}

export default ShowProductImage