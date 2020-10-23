import React from 'react'
import './UserDetail.css'
export default function UserDetial({user}) {
    return (
        <div className="user-detail">
            <h5 className="title">{user.id}</h5>
            <p className="name">{user.name}</p>
            <p className="address">{user.address}</p>
        </div>
    )
}
