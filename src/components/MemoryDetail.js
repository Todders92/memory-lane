import React from "react";
import PropTypes from "prop-types";

function MemoryDetail(props){
  const { memory, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Memory Detail</h1>
      <h3>{memory.location} - {memory.name}</h3>
      <p><em>{memory.detail}</em></p>
      <button onClick={ props.onClickingEdit }>Update Memory</button>
      <button onClick={()=> onClickingDelete(memory.id) }>Close Memory</button>
      <hr/>
    </React.Fragment>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MemoryDetail;