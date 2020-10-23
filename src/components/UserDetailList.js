import React from 'react'
import UserDetial from './UserDetails'

export default function UserDetailList({users}) {
    const userDetailList = users.map((user) => <UserDetial props={user}></UserDetial>);
    return (
        <div>
            {userDetailList}
        </div>
    )
}
