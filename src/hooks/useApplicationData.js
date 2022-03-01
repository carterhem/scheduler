import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

  
export default function useApplicationData(props) {
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${appointment.id}`, {
        interview,
      })
      .then(() => {
        setState({
          ...state,
          appointments,
        });
      });
  }


  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
return axios.delete(`/api/appointments/${appointment.id}`, {
  interview
}).then(() => {
  setState({
    ...state,
    appointments,
  });
});
  }

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    console.log("state", state);
  }, [state]);

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
    cancelInterview
  }



}


  
  