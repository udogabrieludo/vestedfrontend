import React from 'react'
import {API} from '../config'

const UserProfileImage = ({item, url, data}) => {
    return (
        <div className="profile-img">
            {item._id ? <img src={`${API}/${url}/photo/${item._id}?${new Date().getTime()}`} className="rounded-circle img-fluid use-profile" alt={item.name}  />:
            <img src={data} alt="avarta" className="rounded-circle "/>
             }   
        </div>



    )
}

export default UserProfileImage