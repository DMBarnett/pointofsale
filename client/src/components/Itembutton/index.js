import React from "react";
import "./style.css"

function ItemButton(props){
  let quant = props.item.quantity;
  const isActive = (quant === 0) ?("item-buttons btn btn-block btn-secondary disabled"):("item-buttons btn btn-block btn-secondary");
  
  return(
    <li className="item-li">
      <button type="button" className={isActive} data-id={props.item.id} onClick={()=>props.handleClick(props.item.id, quant)}>
        {props.item.name}:{quant}
      </button>
    </li>
  )
}

export default ItemButton;