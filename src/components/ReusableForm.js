import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      {/* <input
          type='hidden'
          name='email'
          value={this.state.userEmail} /> */}
        <input
          type='text'
          name='name'
          placeholder='User Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='detail'
          placeholder='Describe your memory' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
