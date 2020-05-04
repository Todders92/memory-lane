import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditMemoryForm (props) {
  const firestore = useFirestore();
  
  const { memor } = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    props.onEditMemory();
    const propertiesToUpdate = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value
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