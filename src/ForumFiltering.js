import React from "react";
import "./ForumFiltering.css";

function ForumFiltering (){
  
  var keyword1 = {word: "Sports", type: "keyWords", checked: false}
  var keyword2 = {word: "Community", type: "keyWords", checked: false}
  var keyword3 = {word: "School", type: "keyWords", checked: false}
  var keyword4 = {word: "Music", type: "keyWords", checked: false}
  var keyword5 = {word: "Art", type: "keyWords", checked: false}
  var cost1 = {word: "Free", type: "Cost", checked: false}
  var cost2 = {word: "About 5 Dollars", type: "Cost", checked: false}
  var cost3 = {word: "About 10 Dollars", type: "Cost", checked: false}
  var cost4 = {word: "More than 10 Dollars", type: "Cost", checked: false}


  let allkeywords = [keyword1,keyword2,keyword3,keyword4,keyword5];
  let allcosts = [cost1,cost2,cost3,cost4];


  async function getData(filter) {
    console.log(filter)
    try {
        const response = fetch('http://localhost:5000/filter', {
            method: "POST",
            headers: {
                'Content-Type': 'application',
                'Access-Control-Allow-Origin': 'POST'
            },
            body: JSON.stringify(filter)
        });
        return response.data.posts_list;
    } catch (error) {
        console.log(error);
        return false;
    }
    }

  function submitFilter(){
    var allItems = allkeywords.concat(allcosts)
    var i = 0;
    var array = []
    console.log(allItems[1])
    while (i < allItems.length){
        if(allItems[i].checked === true ) {
            console.log("here")
            var object = {};
            object[allItems[i].word] = allItems[i].type;
            var json = JSON.stringify(object)
            console.log(json)
            array.push(json)
        }
        i++;
    }
    console.log(array.length)
    var temp
    getData(array).then((result) => {
      temp = result
    });
    allkeywords.forEach(x => x.checked =false)
    console.log(temp)
    //props.upPost(temp)
  }
  function handleClick(name){
    console.log(name)
    console.log(name.checked)
    name.checked = !name.checked;
    console.log(name.checked)


  }
    return (
      <div>
        <h1>Don't know what to search?</h1>
        <h1>Search by category or cost!</h1>
        <br />
        <text>Category</text> 
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(keyword1)} />&nbsp;{keyword1.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(keyword2)} />&nbsp;{keyword2.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(keyword3)} />&nbsp;{keyword3.word}
            <hr />
          </div>
        </div> 
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(keyword4)} />&nbsp;{keyword4.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(keyword5)} />&nbsp;{keyword5.word}
            <hr />
          </div>
        </div>
        <br />
        <text>Cost</text>    
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(cost1)} />&nbsp;{cost1.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(cost2)} />&nbsp;{cost2.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(cost3)} />&nbsp;{cost3.word}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={handleClick(cost4)} />&nbsp;{cost4.word}
            <hr />
          </div>
        </div>
        <input type="button"
          value="Submit" onClick={submitFilter}></input>
      </div>
    );
    }
  
export default ForumFiltering