import React from "react";
import "./style.css"

function ItemButton(props){
  
  return(
    <li>
      <button type="button" data-id={props.item.id} onClick={()=>props.handleClick(props.item.id)}>
        {props.item.name}
      </button>
    </li>
  )
}

export default ItemButton;