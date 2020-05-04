import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewMemoryForm(props){

  const firestore = useFirestore();

  function addMemoryToFirestore(event) {
    event.preventDefault();
    console.log("in add Memory to Firestore")
    firestore.collection('memories').add(
      {
        name: event.target.name.value,
        location: event.target.location.value, 
        detail: event.target.detail.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
    props.onNewMemoryCreation();
    return;
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addMemoryToFirestore}
        buttonText="Do you member?!" />
    </React.Fragment>
  );
}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
};

export default NewMemoryForm;