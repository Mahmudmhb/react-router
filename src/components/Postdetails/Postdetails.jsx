import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    const {body, title, id} = post;
    const goback = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>see my post details</h3>
            <h3> id: {id}</h3>
            <h4>Title: {title}</h4>
            <p>Body:{body}</p>
            <button onClick={goback}> GO back</button>
        </div>
    );
};

export default Postdetails;