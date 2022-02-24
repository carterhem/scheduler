import React from "react";
import DayList from "./DayList";
import { useState } from "react";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";
import { useEffect } from "react";


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];

export default function Application(props) {
  // const [days, setDays] = useState([]);
  // const [day, setDay] = useState("Monday")
  const [state, setState] = useState({
    day:"Monday", 
    days: []
  })
  // console.log(days);
useEffect(() => {
  const testURL = `/api/days`;
  axios.get(testURL).then(response => {
    setState({
      ...state,
      days:response.data
    })
  })
}, [])

const setDay = (day) => setState(prev => ({...prev, day}))

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList 
          days={state.days} 
          value={state.day} 
          onChange={setDay} 
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule" >
      {appointments.map((appointment) => {
          return (<Appointment key={appointment.id} {...appointment} />)
        })}
      </section>
    </main>
  );
}
