import React from "react";
import PropTypes from "prop-types";
import Memory from "./Memory";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function MemoryList(props){

  useFirestoreConnect([
    { collection: 'memories' }
  ]);

  const memories = useSelector(state => state.firestore.ordered.memories);

  if (isLoaded(memories)) {
    return (
      <React.Fragment>
        <hr/>
        {memories.map((memory) => {
          return <Memory
            whenMemoryClicked = { props.onMemorySelection }
            name={memory.name}
            location={memory.location}
            detail={memory.detail}
            email={memory.email}
            id={memory.id}
            key={memory.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>'Membering...</h3>
      </React.Fragment>
    )
  }
}

MemoryList.propTypes = {
  onMemorySelection: PropTypes.func
};

export default MemoryList;