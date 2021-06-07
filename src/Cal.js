import React, {useState, useEffect} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';

import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Cal() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchAll().then((result) => {
      if (result) {
        setEvents(result);
      }
    });
  }, []);

    async function fetchAll() {
      try {
        const response = await axios.get('https://getinvolvedapi.herokuapp.com/forum');
        let eventsList = []
        let postsList = response.data.posts_list;
        for (let i = 0; i < postsList.length; i++) {
          if (postsList[i].DateEvent !== "") {
            let start_time = moment.utc(postsList[i].DateEvent).toDate();
            let end_time = start_time;
            let event = {
              start: start_time,
              end: end_time,
              title: postsList[i].title,
            }
            eventsList.push(event)
          }
        }
      return eventsList;
      } catch (error) {
        console.log(error);
        return false;
      }
    }



    return (
      <div className="cal">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{height: '100vh'}}
        />
      </div>
    );
}

export default Cal;
