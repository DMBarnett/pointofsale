import React from "react";
import "./style.css"

function NavButton(props){
  const isActive = (props.active === props.category.id) ?("navButtons btn btn-light active"):("navButtons btn btn-outline-dark");

  return(
    <li>
      <button type="button" data-id={props.category.id} className={isActive} onClick={()=>props.handleClick(props.category.id, props.category.abbreviation)}>
        {props.category.abbreviation}
      </button>
    </li>
  )
}

export default NavButton;