import React,{ useState, useEffect } from "react";
import axios from 'axios';

function Home(){

        const [getUsers, setGetUsers] = useState({})

        async function fetchAll(){
           const response = await axios.get('http://localhost:5000/users', { params: { EventPosted: 3/21/21 } })
        return response.data.users_list;
    }

        useEffect(() => {
        fetchAll().then( result => {
        if (result)
                setGetUsers(result);
        });
        }, [] );
   
     return(
        <div class="home">
            <p class="bio">
            Welcome to our site! Below you can find multiple posts.
            By clicking on calendar, you can check out all the events during a certain period of time.
            The forum page is where you can make comments on events or ask questions.
        </p>
        <br/>
        <h1> Recent Posts: </h1>
        <br/>
        <h3> Title:    Example Post1  </h3>
        <br/>
        <bold> Date: Time Y</bold>
        <br/>
        <bold> Location:  Place X </bold>
        <br/>
        <small> Content: PlaceHolder  PlaceHolder Content will be here </small>
        <br/>
        <br/>
        <h3> Title:    Example Post2  </h3>
        <br/>
        <bold> Date: Time Y</bold>
        <br/>
        <bold> Location:  Place X </bold>
        <br/>
        <small> Content: PlaceHolder  PlaceHolder Content will be here </small>
        <br/>
        <h3> Title:    Example Post2  </h3>
        <br/>
        <bold> Date: Time Y</bold>
        <br/>
        <bold> Location:  Place X </bold>
        <br/>
        <small> Content: PlaceHolder  PlaceHolder Content will be here </small>
        </div>
    )
}

export default Home;
