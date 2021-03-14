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
   if (name === "title"){
      setPost({title: value, DateEvent: post.DateEvent, DatePosted: post.DatePosted, time: post.time, publisher: post.publisher, 
         content: post.content, keyWords: post.keyWords, Cost: post.Cost, Location: post.Location});
   }
   if (name === "DatePosted"){
      setPost({title: post.title, DateEvent: post.DateEvent, DatePosted: value, time: post.time, publisher: post.publisher, 
         content: post.content, keyWords: post.keyWords, Cost: post.Cost, Location: post.Location});

   }
   if (name === "DateEvent"){
     setPost({title: post.title, DateEvent: value, DatePosted: post.DatePosted, time: post.time, publisher: post.publisher, 
      content: post.content, keyWords: post.keyWords, Cost: post.Cost, Location: post.Location});
   }
   if (name === "time"){
      setPost({title: post.title, DateEvent: post.DateEvent, DatePosted: post.DatePosted, time: value, publisher: post.publisher, 
         content: post.content, keyWords: post.keyWords, Cost: post.Cost, Location: post.Location});
   }
   if (name === "publisher"){

      setPost({title: post.title, DateEvent: post.DateEvent, DatePosted: post.DatePosted, time: post.time, publisher: value, 
         content: post.content, keyWords: post.keyWords, Cost: post.Cost, Location: post.Location});
   }
   if (name === "content"){
      setPost({title: post.title, DateEvent: post.DateEvent, DatePosted: post.DatePosted, time: post.time, publisher: post.publisher, 
         content: value, keyWords: post.keyWords, Cost: post.Cost, Location: post.Location});
   }
   if (name === "keyWords"){
      setPost({title: post.title, DateEvent: post.DateEvent, DatePosted: post.DatePosted, time: post.time, publisher: post.publisher, 
         content: post.content, keyWords: value, Cost: post.Cost, Location: post.Location});   }

   if (name === "Cost"){
      setPost({title: post.title, DateEvent: post.DateEvent, DatePosted: post.DatePosted, time: post.time, publisher: post.publisher, 
         content: post.content, keyWords: post.keyWords, Cost: value, Location: post.Location});
   }
   if (name === "Location"){
      setPost({title: post.title, DateEvent: post.DateEvent, DatePosted: post.DatePosted, time: post.time, publisher: post.publisher, 
         content: post.content, keyWords: post.keyWords, Cost: post.Cost, Location: value});   }
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
             <option value="Select">Select</option>
             <option value="Sports">Sports</option>
             <option value="Muisc">Music</option>
             <option value="Community">Community</option>
             <option value="Art">Art</option>
             </select>
             <br></br>

             <label htmlFor="Cost">About how much does the event cost:</label>
             <select name="Cost" id="Cost" value={post.Cost} onChange = {handleChange}>
             <option value="SelectC">Select</option>
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