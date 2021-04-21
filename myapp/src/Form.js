/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';

function Form(props) {
  const [post, setPost] = useState(
      {
        title: '',
        DateEvent: new Date(),
        DatePosted: new Date(),
        time: '',
        publisher: '',
        content: '',
        keyWords: '',
        Cost: '',
        Location: '',
        image: '',
      },
  );
  let errorOutput = 'Please fix errors and resubmit.\n';

  function errorChecker() {
    let error = 0;
    if (post.title === '') {
      error += 1;
      errorOutput += 'Title is missing\n';
    }
    if (post.publisher === '') {
      error += 1;
      errorOutput += 'Publisher is missing\n';
    }
    if (post.content === '') {
      error += 1;
      errorOutput += 'Description is missing\n';
    }
    if (post.keyWords === '') {
      error += 1;
      errorOutput += 'Select a category\n';
    }
    if (post.Cost === '') {
      error += 1;
      errorOutput += 'Select a cost\n';
    }
    if (post.DateEvent.getTime === post.DatePosted.getTime) {
      if (post.time !== '') {
        error += 1;
        errorOutput += 'You have selected a time for an event that has no date';
        errorOutput += ', please select a date for the event\n';
      }
      if (post.Location !== '') {
        error += 1;
        errorOutput += 'You have selected a location for an event that has';
        errorOutput += ' no date, please select a date for the event\n';
      }
    }

    if (post.DateEvent.getTime !== post.DatePosted.getTime) {
      if (post.time === '') {
        error += 1;
        errorOutput += 'Please select a time for the event\n';
      }
      if (post.Location === '') {
        error += 1;
        errorOutput += 'Please select a location for the event\n';
      }
    }
    return error;
  }

  function submitForm(event) {
    const errors = errorChecker();
    console.log('here2');
    event.preventDefault();
    if (errors === 0) {
      if (window.confirm('Thank you for submitting a post!')) {
        window.location.href='http://localhost:3000/home';
      };
      props.handleSubmit(post);
      setPost(
          {title: '', DateEvent: new Date(), DatePosted: new Date(),
            time: '', publisher: '', content: '', keyWords: '',
            Cost: '', Location: ''});
    } else {
      window.confirm(errorOutput);
      errorOutput = 'Please fix errors and resubmit.\n';
    }
  }

  function handleChange(event) {
    const {name, value} = event.target;
    if (name === 'title') {
      setPost(
          {title: value, DateEvent: post.DateEvent,
            DatePosted: post.DatePosted, time: post.time,
            publisher: post.publisher,
            content: post.content, keyWords: post.keyWords,
            Cost: post.Cost, Location: post.Location, image: post.image});
    }
    if (name === 'DateEvent') {
      setPost({title: post.title, DateEvent: value,
        DatePosted: post.DatePosted, time: post.time,
        publisher: post.publisher,
        content: post.content, keyWords: post.keyWords,
        Cost: post.Cost, Location: post.Location, image: post.image});
    }
    if (name === 'time') {
      setPost(
          {title: post.title, DateEvent: post.DateEvent, DatePosted:
            post.DatePosted, time: value, publisher: post.publisher,
          content: post.content, keyWords: post.keyWords, Cost:
            post.Cost, Location: post.Location, image: post.image});
    }
    if (name === 'publisher') {
      setPost(
          {title: post.title, DateEvent: post.DateEvent, DatePosted:
            post.DatePosted, time: post.time, publisher: value,
          content: post.content, keyWords: post.keyWords, Cost: post.Cost,
          Location: post.Location, image: post.image});
    }
    if (name === 'content') {
      setPost(
          {title: post.title, DateEvent: post.DateEvent, DatePosted:
            post.DatePosted, time: post.time, publisher: post.publisher,
          content: value, keyWords: post.keyWords, Cost: post.Cost,
          Location: post.Location, image: post.image});
    }
    if (name === 'keyWords') {
      setPost(
          {title: post.title, DateEvent: post.DateEvent, DatePosted:
            post.DatePosted, time: post.time, publisher: post.publisher,
          content: post.content, keyWords: value, Cost: post.Cost, Location:
            post.Location, image: post.image});
    }

    if (name === 'Cost') {
      setPost(
          {title: post.title, DateEvent: post.DateEvent, DatePosted:
            post.DatePosted, time: post.time, publisher: post.publisher,
          content: post.content, keyWords: post.keyWords, Cost: value,
          Location: post.Location, image: post.image});
    }
    if (name === 'Location') {
      setPost(
          {title: post.title, DateEvent: post.DateEvent, DatePosted:
            post.DatePosted, time: post.time, publisher: post.publisher,
          content: post.content, keyWords: post.keyWords, Cost: post.Cost,
          Location: value, image: post.image});
    }
    if (name === 'image') {
      setPost(
          {title: post.title, DateEvent: post.DateEvent, DatePosted:
            post.DatePosted, time: post.time, publisher: post.publisher,
          content: post.content, keyWords: post.keyWords, Cost: post.Cost,
          Location: post.location, image: value});
    }
  }
  return (

    <div >
      <form>

        <label className="event" htmlFor="title">Post Title:</label>
        <input className="event1"
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}>
        </input>
        <br></br>

        <label className="eventd" htmlFor="DateEvent">Date of event:</label>
        <input className="eventd1"
          type="date"
          id='DateEvent'
          name="DateEvent"
          value={post.DateEvent}
          onChange = {handleChange}>
        </input>
        <br></br>

        <label className="eventt" htmlFor="time">Time of event:</label>
        <input className="eventt1"
          type="time"
          id="time"
          name="time"
          value={post.time}
          onChange = {handleChange}>
        </input>
        <br></br>

        <label className="poster" htmlFor="publisher">Poster:</label>
        <input className="poster1"
          type="text"
          id="publisher"
          name="publisher"
          value={post.publisher}
          onChange = {handleChange}>
        </input>
        <br></br>

        <label className="location" htmlFor="Location">
           Location of event:</label>
        <input className="location1"
          type="text"
          id="Location"
          name="Location"
          value={post.Location}
          onChange = {handleChange}>
        </input>
        <br></br>

        <label className="description" htmlFor="content">
           Description of event:</label>
        <textarea className="description1"
          id="content"
          name="content"
          rows="5" cols="50"
          value={post.content}
          onChange = {handleChange}>
        </textarea>
        <br></br>

        <label className="category" htmlFor="keyWords">
           What category is the event under:</label>
        <select className="category1" name="keyWords"
          id="keyWords" value={post.keyWords} onChange = {handleChange}>
          <option value="Select">Select</option>
          <option value="Sports">Sports</option>
          <option value="Music">Music</option>
          <option value="Community">Community</option>
          <option value="Art">Art</option>
        </select>
        <br></br>

        <label className="cost" htmlFor="Cost">
           About how much does the event cost:</label>
        <select className="cost1" name="Cost"
          id="Cost" value={post.Cost} onChange = {handleChange}>
          <option value="SelectC">Select</option>
          <option value="Free">Free</option>
          <option value="About 5 Dollars">About 5</option>
          <option value="About 10 Dollars">About 10</option>
          <option value="More than 10 Dollars">More than 10</option>
        </select>
        <br></br>

        <label className="image" htmlFor="image">Insert your own image:</label>

        <input className="image1" type="file" id = "image" name = "image"
          value = {post.image} onChange={handleChange}/>
        <br></br>

        <input className="submit" type="button"
          value="Submit" onClick={submitForm}></input>
      </form>

    </div>
  );
}

export default Form;
