import React from "react";
import {TextField} from "@material-ui/core";

function PostPage() {

  return (
    <div >
       <form>

          <label for="Title">Name of event:</label>
          <input type="text" id="Title" name="Title"></input>
          <br></br>

          <label for="Date">Date of event:</label>
          <input type="date" id="start" name="trip-start"></input>
          <br></br>
          
          <label for="appt">Time of event:</label>
          <input type="time" id="time" name="time"></input>
          <br></br>

          <label for="Publisher">Publisher of event:</label>
          <input type="text" id="Publisher" name="Publisher"></input>
          <br></br>

          <label for="Description">Description of event:</label>
          <textarea id="Description" name="Description" rows="5" cols="50"></textarea>
          <br></br>
          
          <label for="Keyword">What categorey is the event under:</label>
            <select name="keywords" id="Keywords">
            <option value="Sports">Sports</option>
            <option value="Muisc">Music</option>
            <option value="Community">Community</option>
            <option value="Art">Art</option>
            </select>
            <br></br>

          <input type="submit" value="Submit"></input>
        </form>
      
        </div>
      );

  }

export default PostPage;