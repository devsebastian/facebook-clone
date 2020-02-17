import * as React from 'react'
import './profile-unit.css'

export default function profileUnit({name, mutualFriendCount, imgUrl}) {
    return (
        <div className='profile-unit'>
            <div className="profile-photo">
                <img src={imgUrl} />
            </div>
            <div className="profile-col">
                <div className="profile-name">
                    {name}
                </div>
                <div className="profile-mutual-friend-count">
                    {mutualFriendCount !== undefined && mutualFriendCount + " mutual friends"}
                </div>
                <div className="profile-btn-list">
                    <button>Add Friend</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}