import React, {useState} from 'react';
import { useFilePicker } from 'use-file-picker';


function Form(props) {   
    const [post, setPost] = useState(
       {  
          title: '',
          date: '',
          datePosted: '',
          time: '',
          publisher: '',
          content: '',
          keyword: '',
          cost: '',
          location: '',
          //image: '',
       }
    );
    
 
 function submitForm() {
     post.handleSubmit(post);
     setPost({title: '', date: '', datePosted: '', time: '', author: '', content: '', keyword: '', cost: '', location: ''});
 }
 
 function handleChange(event) {
   const { name, value } = event.target;
   if (name === "title")
      setPost(
         {name: post['title'], title: value}
      );
   if (name === "datePosted")
       setPost(
         {name: post['datePosted'], datePosted: value}
      );
   if (name === "date")
      setPost(
        {name: post['date'], date: value}
     );
   if (name === "time")
       setPost(
         {name: post['time'], time: value}
      );
   if (name === "publisher")
      setPost(
         {name: post['publisher'], publisher: value}
      );
   if (name === "content")
      setPost(
         {name: post['content'], content: value}
      );
   if (name === "keyword")
      setPost(
         {name: post['keyword'], keyword: value}
      );

   if (name === "cost")
      setPost(
         {name: post['cost'], cost: value}
      );
   if (name === "location")
      setPost(
         {name: post['location'], location: value}
      );
 }
 
   return (
      
     <div >
        <form>
 
           <label for="title">Name of event: </label>
           <input 
             type="text"  
             id="title" 
             name="title"
             value={post.title}
             onChange={handleChange}>
             </input>
           <br></br>

           <label for="datePosted">Today's date: </label>
           <input 
             type="date" 
             id="datePosted" 
             name="datePosted"
             value={post.datePosted}
             onChange = {handleChange}>
             </input>
           <br></br>
 
           <label for="date">Date of event: </label>
           <input 
             type="date" 
             id="date" 
             name="date"
             value={post.date}
             onChange = {handleChange}>
             </input>
           <br></br>
           
           <label for="time">Time of event: </label>
           <input 
             type="time" 
             id="time" 
             name="time"
             value={post.time}
             onChange = {handleChange}>
             </input>
           <br></br>
 
           <label for="publisher">Publisher of event: </label>
           <input 
             type="text" 
             id="publisher"
             name="publisher"
             value={post.publisher}
             onChange = {handleChange}>
              </input>
           <br></br>

           <label for="location">Location of event: </label>
           <input 
             type="text" 
             id="location"
             name="location"
             value={post.location}
             onChange = {handleChange}>
              </input>
           <br></br>
 
           <label for="content">Description of event: </label>
           <textarea 
             id="content" 
             name="content" 
             rows="5" cols="50"
             value={post.content}
             onChange = {handleChange}>
             </textarea>
           <br></br>
           
           <label for="keyword">What category is the event under: </label>
             <select name="keywords" id="keywords">
             <option value="Sports">Sports</option>
             <option value="Muisc">Music</option>
             <option value="Community">Community</option>
             <option value="Art">Art</option>
             <input
             value={post.keyword}
             onChange = {handleChange}>
             </input>
             </select>
             <br></br>

             <label for="cost">About how much does the event cost: </label>
             <select name="cost" id="cost">
             <option value="Free">Free</option>
             <option value="About5">About 5</option>
             <option value="About10">About 10</option>
             <option value="More">More than 10</option>
             <input
             value={post.cost}
             onChange = {handleChange}>

             </input>
             </select>
             <br></br>
             <filePicker/>
 
           <input type="submit" value="Submit" onClick={submitForm}></input>
         </form>
       
         </div>
       );
   
 }
 
 export default Form;