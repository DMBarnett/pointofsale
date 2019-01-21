import React from "react";
import "./style.css"

function ItemButton(props){
  
  return(
    <li className="item-li">
      <button type="button" className="item-buttons btn btn-block btn-secondary" data-id={props.item.id} onClick={()=>props.handleClick(props.item.id)}>
        {props.item.name}
      </button>
    </li>
  )
}

export default ItemButton;