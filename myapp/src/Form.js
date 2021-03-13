import React, {useState} from 'react';
import { useFilePicker } from 'use-file-picker';


function Form(props) {   
    const [post, setPost] = useState(
       {  
          title: '',
          DateEvent: new Date,
          DatePosted: new Date,
          time: '',
          publisher: '',
          content: '',
          keyWords: '',
          Cost: '',
          Location: '',
          //image: '',
       }
    );
    
 
 function submitForm() {
    console.log("in submitForm")
    props.handleSubmit(post);
    setPost({title: '', DateEvent: '', DatePosted: '', time: '', publisher: '', content: '', keyWords: '', Cost: '', Location: ''});
 }
 
 function handleChange(event) {
   const { name, value } = event.target;
   if (name === "title")
      console.log("title")
      setPost(
         {name: post['title'], title: value}
      );
   if (name === "DatePosted")
      console.log("DatePosted")
       setPost(
         {name: post['DatePosted'], datePosted: value}
      );
   if (name === "DateEvent")
      console.log("DateEvent")
      setPost(
        {name: post['DateEvent'], date: value}
     );
   if (name === "time")
      console.log("time")
       setPost(
         {name: post['time'], time: value}
      );
   if (name === "publisher")
      console.log("publisher")
      setPost(
         {name: post['publisher'], publisher: value}
      );
   if (name === "content")
      console.log("content")
      setPost(
         {name: post['content'], content: value}
      );
   if (name === "keyWords")
      console.log("keyWords")
      setPost(
         {name: post['keyWords'], keyword: value}
      );

   if (name === "Cost")
      console.log("Cost")
      setPost(
         {name: post['Cost'], cost: value}
      );
   if (name === "Location")
      console.log("Location")
      setPost(
         {name: post['Location'], location: value}
      );
 }
 
   return (
      
     <div >
        <form>
 
           <label htmlFor="title">Name of event:</label>
           <input 
             type="text"  
             id="title" 
             name="title"
             value={post.title}
             onChange={handleChange}>
             </input>
           <br></br>

           <label htmlFor="DatePosted">Today's date:</label>
           <input 
             type="date" 
             id="DatePosted" 
             name="DatePosted"
             value={post.DatePosted}
             onChange = {handleChange}>
             </input>
           <br></br>
 
           <label htmlFor="DateEvent">Date of event:</label>
           <input 
             type="date" 
             id="DateEvent" 
             name="DateEvent"
             value={post.DateEvent}
             onChange = {handleChange}>
             </input>
           <br></br>
           
           <label htmlFor="time">Time of event:</label>
           <input 
             type="time" 
             id="time" 
             name="time"
             value={post.time}
             onChange = {handleChange}>
             </input>
           <br></br>
 
           <label htmlFor="publisher">Poster:</label>
           <input 
             type="text" 
             id="publisher"
             name="publisher"
             value={post.publisher}
             onChange = {handleChange}>
              </input>
           <br></br>

           <label htmlFor="Location">Location of event:</label>
           <input 
             type="text" 
             id="Location"
             name="Location"
             value={post.Location}
             onChange = {handleChange}>
              </input>
           <br></br>
 
           <label htmlFor="content">Description of event:</label>
           <textarea 
             id="content" 
             name="content" 
             rows="5" cols="50"
             value={post.content}
             onChange = {handleChange}>
             </textarea>
           <br></br>
           
           <label htmlFor="keyWords">What categorey is the event under:</label>
             <select name="keyWords" id="keyWords" value={post.keyWords} onChange = {handleChange}>
             <option value="Sports">Sports</option>
             <option value="Muisc">Music</option>
             <option value="Community">Community</option>
             <option value="Art">Art</option>
             </select>
             <br></br>

             <label htmlFor="Cost">About how much does the event cost:</label>
             <select name="Cost" id="Cost" value={post.Cost} onChange = {handleChange}>
             <option value="Free">Free</option>
             <option value="About5">About 5</option>
             <option value="About10">About 10</option>
             <option value="More">More than 10</option>
             </select>
             <br></br>
             <filePicker/>
 
           <input type="submit" value="Submit" onClick={submitForm}></input>
         </form>
       
         </div>
       );
   
 }
 
 export default Form;