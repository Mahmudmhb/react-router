import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const navigate = useNavigate()
    const frined = useLoaderData()
    const {name, username, email} = frined;
    const goBackNavigate = ()=>{
        navigate(-1)
    }
    // console.log(frined)
    return (
        <div>
            <h1>See my friend details</h1>
            <h3>Name: {name}</h3>
            <p>Username: {username}</p>
            <p>email: {email}</p>
            <button onClick={goBackNavigate}>Go Back</button>
        </div>
    );
};

export default FriendDetails;