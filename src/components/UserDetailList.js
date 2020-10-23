import React from 'react'
import UserDetial from './UserDetail'
import './UserDetailList.css';

export default function UserDetailList({users}) {
    const userDetailList = users.map((user) => <UserDetial user={user} key={user.id}></UserDetial>);
    return (
        <div className="user-detail-list">
            {userDetailList}
        </div>
    )
}
