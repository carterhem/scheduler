import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export function formatSpots(number) {

if (number === 0) return "no spots remaining";
if (number === 1) return "1 spot remaining";
return `${number} spots remaining`;
//anything 2 and above is already formatted - this is specifically for formatting purposes for 0 spots or 1 spot left

  }


export default function DayListItem(props) {
const dayClass = classNames("day-list__item", { "day-list__item--selected": props.selected,  "day-list__item--full":  props.spots === 0 });
//if selected or full are in props, that class is true and adds onto dayClass

  return (
    <li data-testid="day" onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}