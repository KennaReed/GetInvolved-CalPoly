import React, {useState} from 'react';

function Comment(props) {
  const [comment, setComment] = useState(
      {
        DatePosted: new Date(),
        time: '',
        publisher: '',
        content: ''
      },
  );
  let errorOutput = 'Please fix errors and resubmit.\n';

  function errorChecker() {
    let error = 0;
    if (comment.content === '') {
      error += 1;
      errorOutput += 'Description is missing\n';
    }
    
    const today = new Date();
    if (comment.time === '') {
      comment.time = '23:59';
    }
    const timeString = 'T' + comment.time + ':00';
    const date = new Date(comment.DatePosted + timeString);
    console.log(date - today);
    if (comment.time === '23:59') {
      comment.time = '';
    }
    return error;
  }

  function submitForm(event) {
    console.log("HERE");
    const errors = errorChecker();
    event.preventDefault();
    if (errors === 0) {
      //change this
      props.handleSubmit(comment);
      setComment(
          {DatePosted: new Date(),
            time: '', publisher: '', content: ''});
    } else {
      window.confirm(errorOutput);
      errorOutput = 'Please fix errors and resubmit.\n';
    }
  }

  function handleChange(event) {
    const {name, value} = event.target;

    if (name === 'content') {
      setComment(
          {
            DatePosted: comment.DatePosted,
              time: comment.time, publisher: comment.time, content: value});
    }
  }
  return (

    <div >
      <form>
        <div>
          <div>
          <label htmlFor="postingComment">Enter Comment</label>
            <input 
              type="text"
              id="postingComment"
              name="postingComment"
              value={comment.content}
              onChange={handleChange}
              >
            </input>
          </div>
        </div>

        <input type="button"
          value="Submit" onClick={submitForm}></input>
      </form>

    </div>
  );
}

export default Comment;
