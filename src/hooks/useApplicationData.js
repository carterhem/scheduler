import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function useApplicationData(props) {
  // function updateSpots() {
  //   return axios.get(`/api/days`).then((response) => {
  //     console.log("bookintervew response.data", response.data);
  //     const days = response.data;
  //     setState((prev) => ({...prev, days}))
  //   });
  // }

  function updateSpots(newAppointments) {
    
return state.days.map((eachDay) => {
  let freeSpots = 0;

  for (let appID of eachDay.appointments) {
    if (!newAppointments[appID].interview){
      freeSpots++
    }
  }
  return {...eachDay, spots: freeSpots}

})
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    //appointment is the one we are adding - we know appoinment id here
    console.log("bookInterview appointment", appointment);
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    // console.log("bookInterview appointments", appointments);
    console.log("pre update book Spots", state)
    const days = updateSpots(appointments);
    console.log("post update book spots", state)

    //at this point all info is already in appointments - client already, not sent to server



    return axios
      .put(`/api/appointments/${appointment.id}`, {
        interview,
      })
      .then(() => {
        setState({
          ...state,
          appointments,
          days
          //new state should be applied here when promise resolves - with the new copy of appointments
        });
      })
      // .then(() => {
      //  updateSpots();
      // })

  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    console.log("cancelInterview appointment", appointment);
    //appointment is the one we are deleting

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    console.log("cancelInterview appointments", appointments);
    //appointments is the list of all appointments
    console.log("pre update cancel Spots", state)
    const days = updateSpots(appointments);
    console.log("pre update cancel Spots", state)

    return axios
      .delete(`/api/appointments/${appointment.id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
          days
          //new state should be applied here when promise resolves - with the new copy of appointments
        });
      })
      // .then(() => {
      //   updateSpots();
      //  })
  }

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // useEffect(() => {
  //   console.log("state", state);
  // }, [state]);

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      console.log("all", all);

      // console.log(all[1].data);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
