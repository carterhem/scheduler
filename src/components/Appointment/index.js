import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";





export default function Appointment(props) {

  return (
    <div className="appointment" >
      <Header time={props.time}  />
      {props.interview ? (
          <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/>
      ) : (
          <Empty />
      )}
    </div>
  );

  // if (!props.time) return <article className="appointment" >No Appointments</article>
  //   if (props.time) return <article className="appointment" >Appointment at {props.time}</article>
}
