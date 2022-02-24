import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  
  return (
    <Fragment>
      <Header time={props.time} />
      {props.interview ? (
        <Fragment>
          <Show student={"Lydia Miller Jones"} interviewer={"Sylvia Palmer"}/>
        </Fragment>
      ) : (
        <Fragment>
          <Empty />
        </Fragment>
      )}
    </Fragment>
  );

  // if (!props.time) return <article className="appointment" >No Appointments</article>
  //   if (props.time) return <article className="appointment" >Appointment at {props.time}</article>
}
