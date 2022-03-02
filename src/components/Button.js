import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
  
   let buttonClass = classNames("button", {"button--confirm": props.confirm, "button--danger": props.danger})
//adding buttonconfirm and button danger onto the button class if they appear in props// if true
//returining button while defining the onClick, disabled and className
   return (
      <button 
      onClick={props.onClick}
      disabled={props.disabled}
      className={buttonClass}
      >
         {props.children}
         </button>
   ); 

}
