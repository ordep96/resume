import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/';
/*import { Cropper } from 'react-image-cropper';*/
/*import Cropper from 'react-cropper';*/
import AvatarEditor from 'react-avatar-editor'
import AccentColor from './AccentColor/';
import PersonalDetails from './PersonalDetails/';
import Payix from '../assets/payix.jpg';
/*import 'cropperjs/dist/cropper.css';*/

import ModalContainer from './widgets/ModalContainer';

class ResumeForm extends Component {

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

  openModal = () => {
    this.props.actions.openModal(true);
  }

  onClickSave = () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas()
      console.log(canvasScaled.toDataURL());
    }
  }

  setEditorRef = (editor) => this.editor = editor

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
          openModal={this.openModal}
        />
        <ModalContainer>
          <div className="content-wrapper">
           <AvatarEditor
            ref={this.setEditorRef}
            image={Payix} 
            width={450}
            height={200}
            scale={1.2}
           />
            <button onClick={this.onClickSave}>Select Crop</button>
          </div>
        </ModalContainer>
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