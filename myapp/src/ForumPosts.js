import React, {useState} from 'react';
function ForumPosts(props) {
    const posts = props.postData.map((p, index) => {
        return(
            <div>
                <h1>{p.title}</h1>
                <p>{p.publisher}</p>
                <p>{p.content}</p>
                <p>{p.cost}</p>
            </div>
        );
    });
    return posts;
}
export default ForumPosts;