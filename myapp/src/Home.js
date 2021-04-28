import React,{ useState, useEffect } from "react";
import axios from 'axios';

function DisplayPost(props) {
   const posts = props.post1.map((post, index) => {
   return (
      <div key={index}>
        <h3> Title:  {post.title} </h3>
           <bold> Date: {post.DateEvent} </bold>
        <br/>
	<bold> Location:  {post.Location} </bold>
        <br/>
        <small> Content: {post.content} </small>
        <br/>
        <br/>
      </div>
    );
  });
   return(
       <displayPost>
       <div>
         {posts}
       </div>
       </displayPost>
   );
}

function sortDates(props){


}

function Home(props){

     const [posts, setPost] = useState([]); 

     async function fetchAll(){
         const response = await axios.get('http://localhost:5000/posts');
         return response.data.posts_list; 
     }
    
     useEffect(() => {
      fetchAll().then( result => {
         if (result){
            const reversed = result.reverse().sort((a, b) => {
                if (a.DateEvent < b.DateEvent) return -1;
               if (a.DateEvent > b.DateEvent) return 1;
              return 0;
             });
             setPost(reversed); 
      };
  })}, [] );


     let sortedposts = [...posts].reverse().sort((a, b) => Math.abs((b.DateEvent - a.DateEvent)));

     let reverseposts = posts.reverse();

     return(
        <div class="home">
            <p class="bio">
            Welcome to our site! Below you can find multiple posts.
            By clicking on calendar, you can check out all the events during a certain period of time.
            The forum page is where you can make comments on events or ask questions.
        </p>
        <br/>
        <h1> Recent Posts: </h1>
        <br/>
	<div className="container">
        <DisplayPost post1={posts}/>
        </div>
        </div>
    );
}

export default Home;
