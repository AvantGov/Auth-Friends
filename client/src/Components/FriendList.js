import React from 'react';

const FriendList = (props) => {
    console.log('looks a lot like props:', props)

    return(
        <div className='friend-list-container'>
            <h1 className='friends-list-container__name'>{props.friend.name}</h1>
            <p className='friend-container__age'>{props.friend.age}</p>
            <p className='friend-container__email'>{props.friend.email}</p>
        </div>
    )
}


export default FriendList;