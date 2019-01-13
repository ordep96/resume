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

import PictureIcon from '../assets/picture.svg';

class ResumeForm extends Component {

  state = {
    scale: 1,
    imgToCrop: null
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

  openModal = () => {
    this.props.actions.openModal(true);
  }

  onClickSave = () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas()
      this.props.actions.addProfileImg(canvasScaled.toDataURL());
      this.props.actions.openModal(false)
    }
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }

  uploadImage = (e) => {
    console.log(e.target);
    let file = e.target.files[0];
    this.setState({imgToCrop:file})
  }
  
  editOrRemovePicture = (e) => {
    e.preventDefault();
    let target = e.target;
  
    if(target.getAttribute('data-action') === 'edit') {

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
          imgProfile={this.props.imgProfile}
          editOrRemovePicture={this.editOrRemovePicture}
        />
        <ModalContainer>
          <div className="content-wrapper">
            {
              this.state.imgToCrop !== null
                ? (
                  <div className="modal__content-img-cropper">
                    <AvatarEditor
                      ref={this.setEditorRef}
                      image={this.state.imgToCrop}
                      width={250}
                      height={200}
                      scale={this.state.scale}
                    />    
                    <input
                      className="modal__range-field"
                      onChange={this.handleScale}
                      type="range"
                      min="1"
                      max="2"
                      step="0.01"
                      defaultValue="1"
                    />
                    <button onClick={this.onClickSave}>Save</button>              
                  </div>
                )
                : (
                  <div>
                    <h2>Upload Profile Picture</h2>
                    <p>This photo is displayed on your resume</p>
                    <div className="modal__upload-file-content">
                      <img className="modal__upload-icon" src={PictureIcon} alt="upload img"/>
                      <p className="modal__description text-center">Drag & drop or select a photo from your computer. Supported formats: jpeg & png</p>
                      <input className="modal__field" type="file" onChange={this.uploadImage}/>
                    </div>
                  </div>
                )            
            }
          </div>
        </ModalContainer>
      </section>
    )
  }
}  

const mapStateToProps = (state,props) => {
  return {
    selectColor: state.color.selectColor,
    details: state.personalDetails.details,
    imgProfile: state.imgProfile.img
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResumeForm);