import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditMemoryForm (props) {
  const firestore = useFirestore();
  
  const { memory } = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    props.onEditMemory();
    const propertiesToUpdate = {
      name: event.target.name.value,
      location: event.target.location.value,
      detail: event.target.detail.value
    }
    return firestore.update({collection: 'memories', doc: memory.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditMemoryFormSubmission}
        buttonText="Update Entry" />
    </React.Fragment>
  );
}

EditMemoryForm.propTypes = {
  onEditMemory: PropTypes.func
};

export default EditMemoryForm;