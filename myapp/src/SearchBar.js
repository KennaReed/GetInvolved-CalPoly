import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function SearchBar(props){
  const [search, setSearch] = useState(
    {  
       word: '',
    }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "word"){
      setSearch({word: value});
    }
  }
  
  function submitSearch(){
    var i;
    getData().then(result => {
      for(i = 0; i < result.length; i++){
        if(!result[i].title.includes(search.word)) {
          if(!result[i].content.includes(search.word)) {
            if(!result[i].keyWords.includes(search.word)) { 
              if(!result[i].publisher.includes(search.word)) {
                result.splice(i,1)
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

  async function getData () {
    try { 
      const response = await axios.get('http://localhost:5000/home');
        return response.data.posts_list;
      }
      
      catch (error) {
        console.log(error);
        return false;
      }
  }
  return (
    <div>
      <input class="word"
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
/*class SearchBar extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://localhost:5000/home`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
      </div>
    );
  }
}

export default SearchBar*/

/*import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { render } from 'react-dom';


class SearchBar extends React.Component {
  state = {
    attributes: [

    ],
    searchTerm: ''

  }
  



  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.attributes.filter(attributes => attributes.toLowerCase().includes
      (this.state.searchTerm.toLowerCase()))
  }

  BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  render(){
  return (
    <div>
      <input 
        style={width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}
        key="random1"
        value={this.state.serachTerm}
        placeholder={"search"}
        onChange={this.editSearchTerm}
      />
      <Link to="/forum">
        <button type="button" onClick={submitForm} >
          Search
        </button>
      </Link>
    </div>
  );
}
}
export default SearchBar*/