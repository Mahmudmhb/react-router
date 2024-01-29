import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends)
    return (
        <div>
            <div><h3>they are my friends: {friends.length} </h3></div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr) ', gap:'10px', marginTop: '20px'}}>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;