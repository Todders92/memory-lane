import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'

class MemoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null,
      editing: false,
      userEmail: "string"
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.state.selectedMemory != null) {
      this.setState({
        selectedMemory: null,
        editing: false
      });
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewMemoryToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedMemory = (id) => {
    this.props.firestore.get({collection: 'memories', doc: id}).then((memory) => {
      const firestoreMemory = {
        name: memory.get("name"),
        location: memory.get("location"),
        detail: memory.get("detail"),
        id: memory.id
      }
      this.setState({selectedMemory: firestoreMemory });
    });
  }

  handleDeletingMemory = (id) => {
    this.props.firestore.delete({collection: 'memories', doc: id});
    this.setState({selectedMemory: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingMemoryInList = () => {
    this.setState({
      editing: false,
      selectedMemory: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      console.log(auth.currentUser.email);
      // let userEmail = auth.currentUser.email;
      this.state.userEmail = auth.currentUser.email;
      if (this.state.editing ) {      
        currentlyVisibleState = <EditMemoryForm memory = {this.state.selectedMemory} onEditMemory = {this.handleEditingMemoryInList} />
        buttonText = "Return to Memory List";
      } else if (this.state.selectedMemory != null) {
        currentlyVisibleState = 
        <MemoryDetail 
          memory = {this.state.selectedMemory} 
          onClickingDelete = {this.handleDeletingMemory} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Memory List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewMemoryForm onNewMemoryCreation={this.handleAddingNewMemoryToList}  />;
        buttonText = "Return to Memory List";
      } else {
        currentlyVisibleState = <MemoryList onMemorySelection={this.handleChangingSelectedMemory} />;
        buttonText = "Add Memory";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

MemoryControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default withFirestore(MemoryControl);