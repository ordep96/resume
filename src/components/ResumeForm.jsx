import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import AvatarEditor from 'react-avatar-editor'
import AccentColor from './AccentColor/';
import PersonalDetails from './PersonalDetails/';
import Payix from '../assets/payix.jpg';

import ModalContainer from './widgets/ModalContainer';

import PictureIcon from '../assets/picture.svg';

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
    console.log(data)
    this.props.actions.addPersonalDetails(data);
  }

  openModal = () => {
    this.props.actions.openModal(true);
  }

  onClickSave = () => {
    if (this.editor) {
      console.log(this.editor);
      const canvasScaled = this.editor.getImageScaledToCanvas()
      this.props.actions.addProfileImg(canvasScaled.toDataURL());
      this.props.actions.openModal(false)
    }
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.props.actions.scaleImg(scale);
  }

  uploadImage = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.props.actions.addImgToCrop(reader.result);
    }
    reader.readAsDataURL(file);
  }
  
  editOrRemovePicture = (e) => {
    e.preventDefault();
    let target = e.target;
  
    if(target.getAttribute('data-action') === 'edit') {
      this.props.actions.openModal(true)
    }

    if(target.getAttribute('data-action') === 'delete') {
      this.props.actions.deleteImg();
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
          imgProfile={this.props.imgCrop}
          editOrRemovePicture={this.editOrRemovePicture}
        />
        <ModalContainer>
          <div className="content-wrapper">
            {
              this.props.imgToCrop !== null
                ? (
                  <div className="modal__content-img-cropper">
                    <AvatarEditor
                      ref={this.setEditorRef}
                      image={this.props.imgToCrop}
                      width={250}
                      height={200}
                      scale={this.props.scaleImg}
                    />    
                    <input
                      className="modal__range-field"
                      onChange={this.handleScale}
                      type="range"
                      min="1"
                      max="2"
                      step="0.01"
                      defaultValue={this.props.scaleImg}
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
  console.log(state)
  return {
    selectColor: state.color.selectColor,
    details: state.personalDetails.details,
    imgToCrop: state.imgProfile.imgToCrop,
    imgCrop: state.imgProfile.imgCrop,
    scaleImg: state.imgProfile.scaleImg
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResumeForm);