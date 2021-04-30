import React, {useState} from 'react';
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
  function handleEnter(event) {
    if (event.key === 'Enter') {
      submitSearch();
    }
  }
  function submitSearch() {
    search.word = search.word.toLowerCase();
    getData().then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (!result[i].title.toLowerCase().includes(search.word)) {
          if (!result[i].content.toLowerCase().includes(search.word)) {
            if (!result[i].keyWords.toLowerCase().includes(search.word)) {
              if (!result[i].publisher.toLowerCase().includes(search.word)) {
                result.splice(i, 1);
                i = -1;
              }
            }
          }
        }
      }

      setSearch({word: ''});
      props.upPost(result.reverse());
    });
  }

  async function getData() {
    try {
      const response = await axios.get('https://getinvolvedapi.herokuapp.com/home');
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
        onChange = {handleChange}
        onKeyPress = {handleEnter}>
      </input>
      <button type="button" onClick={submitSearch} >
            Search!
      </button>
    </div>
  );
}

export default SearchBar;
