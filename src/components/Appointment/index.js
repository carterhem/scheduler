import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import { useEffect } from "react";
import { action } from "@storybook/addon-actions";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    props.interview? SHOW : EMPTY
  );
useEffect(() => {
  console.log("mode is now create", mode);

}, [mode])
  return (
    <div className="appointment" >
      <Header time={props.time}  />
     {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

     {mode === SHOW && (
       <Show 
       student={props.interview.student}
       interviewer={props.interview.interviewer}
       />
     )}
     {mode === CREATE && <Form interviewers={[]} onCancel={() => back(EMPTY)} onSave={action("onSave")} />}
    </div>
  );

//   {props.interview ? (
//     <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/>
// ) : (
//     <Empty  />
// )}

  // if (!props.time) return <article className="appointment" >No Appointments</article>
  //   if (props.time) return <article className="appointment" >Appointment at {props.time}</article>
}
