import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {name, username, email, id} = friend;
    return (
        <div style={{border: '2px solid gray', borderRadius: '20px', padding:'10px' }}>
            <h3>Name: {name}</h3>
            <p>Username: {username}</p>
            <p>email: {email}</p>
            <span> <Link to= {`/friend/${id}`}> show more details</Link></span>
        </div>
    );
};

export default Friend;