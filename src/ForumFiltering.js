import React from "react";
import "./ForumFiltering.css";
import axios from 'axios';


function ForumFiltering (props){
    var keyword1 = {name: "keyword1", word: "Sports", type: "keyWords", checked: false}
    var keyword2 = {name: "keyword2", word: "Community", type: "keyWords", checked: false}
    var keyword3 = {name: "keyword3", word: "School", type: "keyWords", checked: false}
    var keyword4 = {name: "keyword4", word: "Music", type: "keyWords", checked: false}
    var keyword5 = {name: "keyword5", word: "Art", type: "keyWords", checked: false}
    var cost1 = {name: "cost1", word: "Free", type: "Cost", checked: false}
    var cost2 = {name: "cost2", word: "About 5 Dollars", type: "Cost", checked: false}
    var cost3 = {name: "cost3", word: "About 10 Dollars", type: "Cost", checked: false}
    var cost4 = {name: "cost4", word: "More than 10 Dollars", type: "Cost", checked: false}

    var dictionary = {}
    dictionary["keyword1"] = keyword1
    dictionary["keyword2"] = keyword2
    dictionary["keyword3"] = keyword3
    dictionary["keyword4"] = keyword4
    dictionary["keyword5"] = keyword5
    dictionary["cost1"] = cost1
    dictionary["cost2"] = cost2
    dictionary["cost3"] = cost3
    dictionary["cost4"] = cost4

    let allkeywords = [keyword1,keyword2,keyword3,keyword4,keyword5];
    let allcosts = [cost1,cost2,cost3,cost4];


    async function getData(filter) {
        try {
            const response = await axios.post('https://getinvolvedapi.herokuapp.com/filter', filter)
            return response.data.post_list;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    function submitFilter(){
        var allItems = allkeywords.concat(allcosts)
        var i = 0;
        var array = []
        while (i < allItems.length){
            if(allItems[i].checked === true ) {
                var object = {};
                var key = allItems[i].word
                object[key] = allItems[i].type;
                array.push(object)
            }
            i++;
        }
        i = 0;
        if (array.length === 0) {
            while (i < allItems.length){
                var item = {};
                var thing = allItems[i].word
                item[thing] = allItems[i].type;
                array.push(item)
                i++;
            }
        }
        getData(array).then((result) => {
            props.upPost(result.reverse())
            uncheckAll()

        });
    }
    function uncheckAll() {
        document.querySelectorAll('input[type="checkbox"]')
          .forEach(el => el.checked = false);
      }
    function handleClick(event){
        dictionary[event.target.name].checked = !dictionary[event.target.name].checked

    }
    return (
      <div>
        <h1>Don't know what to search?</h1>
        <h1>Search by category or cost!</h1>
        <br />
        <text>Category</text>
        <br />
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox"  id="keyword1" name="keyword1" onChange={handleClick} />&nbsp;{keyword1.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword2" name="keyword2" onChange={handleClick} />&nbsp;{keyword2.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword3" name="keyword3" onChange={handleClick} />&nbsp;{keyword3.word}
            <hr />
          </div>
        </div> 
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword4" name="keyword4" onChange={handleClick} />&nbsp;{keyword4.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword5" name="keyword5" onChange={handleClick} />&nbsp;{keyword5.word}
            <hr />
          </div>
        </div>
        <br />
        <text>Cost</text>    
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost1" name="cost1" onChange={handleClick} />&nbsp;{cost1.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost2" name="cost2" onChange={handleClick} />&nbsp;{cost2.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost3" name="cost3" onChange={handleClick} />&nbsp;{cost3.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost4" name="cost4" onChange={handleClick} />&nbsp;{cost4.word}
            <hr />
          </div>
        </div>
        <input className="submit" type="button"
          value="Submit" onClick={submitFilter}></input>
      </div>
    );
}
  
export default ForumFiltering