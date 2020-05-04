import React from "react";
import PropTypes from "prop-types";

function Memory(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMemoryClicked(props.id)}>
        <h3>{props.location} - {props.name}</h3>
        <p><em>{props.detail}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
        <p>{props.email}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Memory.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  detail: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.string,
  whenMemoryClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Memory;