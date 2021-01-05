import React from 'react'
import {API} from '../config'

const ShowImages = ({item, url}) => {
    return (
        <div className="product-img">
            {item._id ? <img src={`${API}/${url}/photo/${item._id}?${new Date().getTime()}`}  alt={item.name}  className="img-fluid productImgAdminz" />:""}
                
        </div>
    )
}

export default ShowImages
