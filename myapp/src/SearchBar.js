import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function SearchBar(props) {
  const [search, setSearch] = useState(
      {
        word: '',
      },
  );

  function handleChange(event) {
    const {name, value} = event.target;
    if (name === 'word') {
      setSearch({word: value});
    }
  }

  function submitSearch() {
    let i;
    getData().then((result) => {
      for (i = 0; i < result.length; i++) {
        if (!result[i].title.includes(search.word)) {
          if (!result[i].content.includes(search.word)) {
            if (!result[i].keyWords.includes(search.word)) {
              if (!result[i].publisher.includes(search.word)) {
                result.splice(i, 1);
                i = -1;
              }
            }
          }
        }
      }

      setSearch({word: ''});
      console.log(result);

      props.upPost(result);
    });
  }

  async function getData() {
    try {
      const response = await axios.get('http://localhost:5000/home');
      return response.data.posts_list;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  return (
    <div>
      <input className="word"
        type="text"
        id="word"
        name="word"
        value = {search.word}
        onChange = {handleChange}>
      </input>
      <Link to="/forum">
        <button type="button" onClick={submitSearch}>
            Search!
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
