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
            <div id="nav">
                <h2>Placeholder for Nav Bar</h2>
            </div>

            <div id="opener">
                <h1>Welcome to our Community Forum Page</h1>
            </div>

            <div id="posts">
                <ForumPosts postData={forumPosts}/>
            </div>

            <div id="sideBar">
                <h2>Placeholder for side Bar for Filtering/Sorting</h2>
            </div>
        </div>
    );
}

export default Forum;