import React from "react";
import "./styles.scss";

export default function Appointment(props) {
  if (!props.time) return <article className="appointment">No Appointments</article>
  if (props.time) return <article className="appointment">Appointment at {props.time}</article>


}
