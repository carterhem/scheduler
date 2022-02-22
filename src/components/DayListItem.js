import { action } from "@storybook/addon-actions/dist/preview";
import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
const dayClass = classNames("day-list__item", { "day-list__item--selected": props.selected,  "day-list__item--full":  !props.spots });
function formatSpots(props) {
let spotFormat = [];
  if(props.spots > 1)  {
    spotFormat = `${props.spots} spots remaining`;
  } else if (props.spots === 1) {
    spotFormat = `${props.spots} spot remaining`
  } else if (props.spots === 0) {
    spotFormat = `no spots remaining`
  }
  return spotFormat;
}


  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  );
}