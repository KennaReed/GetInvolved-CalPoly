import React, {useState, useEffect} from 'react';
import ForumPosts from './ForumPosts';
import axios from 'axios';
import styles from "./forum.module.css";
import submitSearch from './SearchBar';
import word from './SearchBar';

function Forum() {
    const [forumPosts, setForumPosts] = useState([]);

    useEffect(() => {
        fetchAll().then(result => {
        if (result)
            setForumPosts(result);
        });
    }, []);

    async function fetchAll() {
        try { 
            const response = await axios.get('http://localhost:5000/forum');            
            return response.data.posts_list;
        }
        
        catch (error) {
        console.log(error);
        return false;
        }
        
      } 

    return (
        <div className={styles.ForumComp}>
            <h1 className={styles.opener}>Welcome to our Community Forum Page</h1>

            <h3 className={styles.instruct}>Here you can interact with our community by commenting on posts and adding reactions!</h3>

            <div className={styles.ForumBody}>
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