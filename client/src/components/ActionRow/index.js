import React from "react";
import "./style.css"

function ActionRow(props){
  const isManager = (props.isManager)?("action-btn btn btn-primary"):("btn btn-primary disabled");

  return(
    <div>
      <a href="/MLogin" className={isManager}>Add Customer</a>
      <a href="/" className="action-btn btn btn-primary">Lookup Customer</a>
    </div>
  )
}

export default ActionRow