import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";
import { useEffect } from "react";
import { action } from "@storybook/addon-actions";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  transition(SAVING)
      props
      .bookInterview(props.id, interview)
    .then(() => 
     transition(SHOW)
    )
    .catch(error => transition(ERROR_SAVE, true));
  }

function destroy() {
  transition(DELETING, true);
props
.cancelInterview(props.id)
.then(() => {
  transition(EMPTY)
}).catch(error => transition(ERROR_DELETE, true));
}

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
       onDelete={() => transition(CONFIRM)}
       onEdit={() => transition(EDIT)}
       />
     )}
     {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back(EMPTY)} onSave={save} />}
     {mode === SAVING && <Status message="Saving" />}
     {mode === DELETING && <Status message="Deleting" /> }
     {mode === CONFIRM && <Confirm message="Are you sure you would like to delete?" onConfirm={destroy} onCancel={() => back(SHOW)}/>}
     {mode === EDIT && <Form interviewers={props.interviewers} student={props.interview.student} interviewer={props.interview.interviewer.id} onCancel={() => back(SHOW)} onSave={save} />}
     {mode === ERROR_SAVE && <Error message="Could not save appointment." onClose={() => back(SHOW)} />}
     {mode === ERROR_DELETE && <Error message="Could not cancel appointment." onClose={() => back(SHOW)} />}
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
