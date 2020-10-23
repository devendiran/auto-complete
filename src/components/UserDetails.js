import React from 'react'

export default function UserDetial({user}) {
    return (
        <div class="user-detail">
            <h5>{user.id}</h5>
            <p>{user.name}</p>
            <p>{user.address}</p>
        </div>
    )
}
