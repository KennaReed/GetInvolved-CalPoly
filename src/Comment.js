import React, {useState} from 'react';

function Comment(props) {
  const [comment, setComment] = useState(
      {
        DatePosted: new Date(),
        publisher: props.publisher,
        content: '',
        postID: props._id
      },
  );
  let errorOutput = 'Please fix errors and resubmit.\n';

  function errorChecker() {
    let error = 0;
    if (comment.content === '') {
      error += 1;
      errorOutput += 'Comment is missing\n';
    }
    return error;
  }

  function submitForm(event) {
    console.log("HERE");
    const errors = errorChecker();
    event.preventDefault();
    if (errors === 0) {
      props.handleSubmit(comment);
      setComment(
          {DatePosted: new Date(), publisher: '', content: '', postID: ''});
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
            DatePosted: comment.DatePosted, publisher: comment.publisher, content: value, postID: comment.postID});
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
              name="content"
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
