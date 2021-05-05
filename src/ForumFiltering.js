import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import "./ForumFiltering.css";
import axios from 'axios';

export default function ForumFiltering(props) {
  const keywords = [
    { label: "Sports", value: "keyWords" },
    { label: "Community", value: "keyWords" },
    { label: "School", value: "keyWords" },
    { label: "Music", value: "keyWords" },
    { label: "Art", value: "keyWords" }
  ];

  const cost = [
    { label: "Free", value: "Cost" },
    { label: "About 5 Dollars", value: "Cost" },
    { label: "About 10 Dollars", value: "Cost" },
    { label: "More than 10 Dollars", value: "Cost" },
  ];

  const [filteredKeywords, setKeywords] = useState([]);
  const [filteredCost, setCost] = useState([]);

  async function getData(filter) {
    try {
      const response = await axios.post('https://getinvolvedapi.herokuapp.com/filter', filter);
      return response.data.posts_list;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function submitFilter(){
    var array = filteredKeywords + filteredCost
    var temp
    getData(JSON.stringify(array)).then((result) => {
    //setKeywords('')
    //setCost('')
        temp = result
    });
    console.log(temp)
    //props.upPost(temp)
  }
  return (
    <div>
      <h1>Don't know what to search?</h1>
      <h1>Search by category or cost!</h1>
        <div>
        <text>Category</text>  
        <MultiSelect
            options={keywords}
            value={filteredKeywords}
            onChange={setKeywords}
            labelledBy={"Select"}
        />
        </div>
        <div>
        <text>Cost</text>  
        <MultiSelect
            options={cost}
            value={filteredCost}
            onChange={setCost}
            labelledBy={"Select"}
        />
      </div>
      <input type="button"
          value="Submit" onClick={submitFilter}></input>
    </div>
  );
}













/*import { Multiselect } from 'multiselect-react-dropdown';

function ForumFiltering(){
    const [keywords, setKeywords] = useState(
        {
            sports: '',
            community:'',
            music: '',
            art: '',
            school: '',

        },
    );

    //var selectd = [];
    return(
    <Multiselect
        options={this.state.options} // Options to display in the dropdown
        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
    />
    );
}
export default ForumFiltering;*/