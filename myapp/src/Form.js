/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import styles from './postpage.module.css';

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
    const today = new Date();
    if (post.time === '') {
      post.time = '23:59';
    }
    const timeString = 'T' + post.time + ':00';
    const date = new Date(post.DateEvent + timeString);
    console.log(date - today);
    if (date - today < 0) {
      error += 1;
      errorOutput += 'An event cannot be made earlier than todays date';
      errorOutput += ' and time. Please select either a new date or, ';
      errorOutput += 'if the event is later today, a later time\n';
    }
    if (post.time === '23:59') {
      post.time = '';
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
      <form className={styles.all}>
        <div className={styles.formBody}>
          <div className={styles.announcement}>
            <p className={styles.boxHeader}>General Information</p>
            <label className={styles.text} htmlFor="title">* Post Title:</label>
            <input className="event1"
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}>
            </input>
            <br></br>

            <label className={styles.text} htmlFor="publisher">* Poster:</label>
            <input className="poster1"
              type="text"
              id="publisher"
              name="publisher"
              value={post.publisher}
              onChange = {handleChange}>
            </input>
            <br></br>

            <div className={styles.descrip}>
              <label className={styles.text} htmlFor="content">
                * Description:</label>
              <textarea
                id="content"
                name="content"
                rows="5" cols="50"
                value={post.content}
                onChange = {handleChange}>
              </textarea>
            </div>

            <label className={styles.text} htmlFor="keyWords">
              * Category:</label>
            <select className="category1" name="keyWords"
              id="keyWords" value={post.keyWords} onChange = {handleChange}>
              <option value="Select">Select</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Community">Community</option>
              <option value="Art">Art</option>
              <option value="School">School</option>
            </select>
            <br></br>

            <label className={styles.text} htmlFor="Cost">
              * Cost:</label>
            <select className="cost1" name="Cost"
              id="Cost" value={post.Cost} onChange = {handleChange}>
              <option value="SelectC">Select</option>
              <option value="Free">Free</option>
              <option value="About 5 Dollars">About 5</option>
              <option value="About 10 Dollars">About 10</option>
              <option value="More than 10 Dollars">More than 10</option>
            </select>
            <br></br>

            <label className={styles.text}
              htmlFor="image">Image:</label>
            <input className={styles.text}
              type="file" id = "image" name = "image"
              value = {post.image} onChange={handleChange}/>
            <br></br>
          </div>

          <div className={styles.event}>
            <p className={styles.boxHeader}>Posting about an Event?</p>
            <p className={styles.eventD}>(Not Required)</p>

            <label className={styles.text}
              htmlFor="DateEvent">Event Date:</label>
            <input className="eventd1"
              type="date"
              id='DateEvent'
              name="DateEvent"
              value={post.DateEvent}
              onChange = {handleChange}>
            </input>
            <br></br>

            <label className={styles.text} htmlFor="time">Start Time:</label>
            <input className="eventt1"
              type="time"
              id="time"
              name="time"
              value={post.time}
              onChange = {handleChange}>
            </input>
            <br></br>

            <label className={styles.text} htmlFor="Location">
              Location:</label>
            <input className="location1"
              type="text"
              id="Location"
              name="Location"
              value={post.Location}
              onChange = {handleChange}>
            </input>
            <p className={styles.zoom} htmlFor="Location">
              (or Zoom Link)</p>

          </div>
        </div>

        <input className={styles.submit} type="button"
          value="Submit" onClick={submitForm}></input>
      </form>

    </div>
  );
}

export default Form;
