import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';
import * as actions from '../actions/';
import AccentColor from './AccentColor/';
import PersonalDetails from './PersonalDetails/';
import 'draft-js/dist/Draft.css';

class ResumeForm extends Component {

  state = {
    editorState: EditorState.createEmpty()
  }

  fillForm = (e) => {
    let form =  new FormData(e.target.form);
    let data = {
      job: form.get('job'),
      first_name: form.get('first_name'),
      last_name: form.get('last_name'),
      email: form.get('email'),
      phone: form.get('phone')
    }
    this.props.actions.addPersonalDetails(data);
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    return(
      <section className="resume-column resume__form">
        <div className="resume-header">
          <h2 className="resume-header__title">Resumen Ordep</h2>
        </div>
        <AccentColor 
          colors={[
            '#0F141F',
            '#673AB7',
            '#2196F3',
            '#22A860',
            '#FF4D4D'
          ]}
        />
        <PersonalDetails 
          fillForm={this.fillForm}
          details={this.props.details}
        />
        <Editor 
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
        />
      </section>
    )
  }
}  

const mapStateToProps = (state,props) => {
  return {
    selectColor: state.color.selectColor,
    details: state.personalDetails.details
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResumeForm);