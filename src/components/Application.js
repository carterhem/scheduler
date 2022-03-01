import React from "react";
import DayList from "./DayList";
// import { useState } from "react";
import "components/Application.scss";
import Appointment from "components/Appointment";
// import axios from "axios";
// import { useEffect } from "react";
import { getAppointmentsForDay } from "../helpers/selectors";
import { getInterview } from "../helpers/selectors";
import { getInterviewersForDay } from "../helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
 const {
   state,
   setDay,
   bookInterview,
   cancelInterview
 } = useApplicationData();
 
 
  // const [days, setDays] = useState([]);
  // const [day, setDay] = useState("Monday")
  // const [appointments, setAppointments] = useState({})

  // function bookInterview(id, interview) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview },
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment,
  //   };

  //   return axios
  //     .put(`/api/appointments/${appointment.id}`, {
  //       interview,
  //     })
  //     .then(() => {
  //       setState({
  //         ...state,
  //         appointments,
  //       });
  //     });
  // }


//   function cancelInterview(id, interview) {
//     const appointment = {
//       ...state.appointments[id],
//       interview: { ...interview },
//     };
//     const appointments = {
//       ...state.appointments,
//       [id]: appointment,
//     };
// return axios.delete(`/api/appointments/${appointment.id}`, {
//   interview
// }).then(() => {
//   setState({
//     ...state,
//     appointments,
//   });
// });
//   }

  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {},
  // });


  // useEffect(() => {
  //   console.log("state", state);
  // }, [state]);

  // const setDay = (day) => setState((prev) => ({ ...prev, day }));

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/days"),
  //     axios.get("/api/appointments"),
  //     axios.get("/api/interviewers"),
  //   ]).then((all) => {
  //     console.log("all", all);

  //     // console.log(all[1].data);
  //     setState((prev) => ({
  //       ...prev,
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data,
  //     }));
  //   });
  // }, []);
  // console.log("day.interviewers", all.interviewers)
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const allAppointments = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    console.log("interview", interview);
    const interviewers = getInterviewersForDay(state, state.day);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });
  console.log("daily", dailyAppointments);

  // useEffect(() => {
  //   axios.get("/api/days").then(response => {
  //     // console.log(response)
  //     // console.log(typeof(response.data))
  //     setState((prev) => ({
  //       ...prev,
  //       days: response.data
  //     }))getAppointmentsForDay
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
            // formerly onChange{setDays}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {allAppointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
