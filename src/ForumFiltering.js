import React from "react";
import "./ForumFiltering.css";
import axios from 'axios';

var keyword1 = {name: "keyword1", word: "Sports", type: "keyWords", checked: false}
var keyword2 = {name: "keyword2", word: "Community", type: "keyWords", checked: false}
var keyword3 = {name: "keyword3", word: "School", type: "keyWords", checked: false}
var keyword4 = {name: "keyword4", word: "Music", type: "keyWords", checked: false}
var keyword5 = {name: "keyword5", word: "Art", type: "keyWords", checked: false}
var cost1 = {name: "cost1", word: "Free", type: "Cost", checked: false}
var cost2 = {name: "cost2", word: "About 5 Dollars", type: "Cost", checked: false}
var cost3 = {name: "cost3", word: "About 10 Dollars", type: "Cost", checked: false}
var cost4 = {name: "cost4", word: "More than 10 Dollars", type: "Cost", checked: false}
var allItems = [keyword1,keyword2,keyword3,keyword4,keyword5,cost1,cost2,cost3,cost4];

function ForumFiltering (props){
    

    window.onload = function(){
      var num = 0
      while(num < allItems.length){
        document.getElementById(allItems[num].name).checked = false;
        num += 1
      }
    }
    
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
        var i = 0;
        var array = []
        while (i < allItems.length){
            var c = document.getElementById(allItems[i].name)
            if(c.checked) {
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
        console.log(array)
        getData(array).then((result) => {
            result.sort(function(a,b) {
              var dateA = new Date(a.DatePosted);
              var dateB = new Date(b.DatePosted);
              return dateA -  dateB;
            })
            props.upPost(result.reverse())
            //uncheckAll()

        });
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
            <input type="checkbox"  id="keyword1" name="keyword1" onClick={submitFilter} />&nbsp;{keyword1.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword2" name="keyword2" onChange={submitFilter} />&nbsp;{keyword2.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword3" name="keyword3"  onChange={submitFilter} />&nbsp;{keyword3.word}
            <hr />
          </div>
        </div> 
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword4" name="keyword4" onChange={submitFilter} />&nbsp;{keyword4.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="keyword5" name="keyword5" onChange={submitFilter} />&nbsp;{keyword5.word}
            <hr />
          </div>
        </div>
        <br />
        <text>Cost</text>    
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost1" name="cost1"  onChange={submitFilter} />&nbsp;{cost1.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost2" name="cost2" onChange={submitFilter} />&nbsp;{cost2.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost3" name="cost3" onChange={submitFilter} />&nbsp;{cost3.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" id="cost4" name="cost4" onChange={submitFilter} />&nbsp;{cost4.word}
            <hr />
          </div>
        </div>
      </div>
    );
}
export {allItems};
export default ForumFiltering
