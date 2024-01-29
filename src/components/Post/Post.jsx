import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post)
    const {body, title, id} = post;
    return (
        <div style={{border: '2px solid gray', borderRadius: '20px',  padding: '10px'}}>
            <h3> id: {id}</h3>
            <h4>Title: {title}</h4>
            {/* <p>Body:{body}</p> */}
            <span> <Link to={`/posts/${id}`}> show more post</Link> </span>
        </div>
    );
};

export default Post;