import React, {useState} from 'react';

function Form(props) {   
    const [post, setPost] = useState(
       {  
          title: '',
          date: '',
          time: '',
          publisher: '',
          description: '',
          keyword: '',
          //image: '',
       }
    );
 
 function submitForm() {
     post.handleSubmit(post);
     setPost({title: '', date: '', time: '', author: '', description: '', keyword: '', image: '',});
 }
 
 function handleChange(event) {
   const { name, value } = event.target;
   if (name === "title")
      setPost(
         {name: post['title'], title: value}
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
   if (name === "description")
      setPost(
         {name: post['description'], description: value}
      );
   if (name === "keyword")
      setPost(
         {name: post['keyword'], keyword: value}
      );
 }
 
   return (
     <div >
        <form>
 
           <label for="Title">Name of event:</label>
           <input 
             type="text"  
             id="Title" 
             name="Title"
             value={post.title}
             onChange={handleChange}>
             </input>
           <br></br>
 
           <label for="Date">Date of event:</label>
           <input 
             type="date" 
             id="start" 
             name="trip-start"
             value={post.date}
             onChange = {handleChange}>
             </input>
           <br></br>
           
           <label for="appt">Time of event:</label>
           <input 
             type="time" 
             id="time" 
             name="time"
             value={post.time}
             onChange = {handleChange}>
             </input>
           <br></br>
 
           <label for="Publisher">Publisher of event:</label>
           <input 
             type="text" 
             id="Publisher"
             name="Publisher"
             value={post.publisher}
             onChange = {handleChange}>
              </input>
           <br></br>
 
           <label for="Description">Description of event:</label>
           <textarea 
             id="Description" 
             name="Description" 
             rows="5" cols="50"
             value={post.description}
             onChange = {handleChange}>
             </textarea>
           <br></br>
           
           <label for="Keyword">What categorey is the event under:</label>
             <select name="keywords" id="Keywords">
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
 
           <input type="submit" value="Submit" onClick={submitForm}></input>
         </form>
       
         </div>
       );
   
 }
 
 export default Form;