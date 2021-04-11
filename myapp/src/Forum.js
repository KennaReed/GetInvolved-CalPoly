import React, {useState, useEffect} from 'react';
import ForumPosts from './ForumPosts';
import axios from 'axios';


function Forum() {
    const [forumPosts, setForumPosts] = useState([]);

    useEffect(() => {
        fetchAll().then(result => {
        if (result)
            setForumPosts(result);
        });
    }, []);

    async function fetchAll() {
        console.log("HERE")
        try { 
        const response = await axios.get('http://localhost:5000/forum');
          return response.data.posts_list;
        }
        
        catch (error) {
          console.log(error);
          return false;
        }
      } 

    console.log(forumPosts)
    return (
        <div id="ForumComp">
            <h1 id="opener">Welcome to our Community Forum Page</h1>

            <h3 id="instruct">Here you can interact with our community by commenting on posts and adding reactions!</h3>

            <div id="mainBody">
                <div id="posts">
                    <ForumPosts postData={forumPosts}/>
                </div>

                <div id="sideBar">
                    <h2>Placeholder for side Bar for Filtering/Sorting</h2>
                </div>
            </div>
        </div>
    );
}

export default Forum;