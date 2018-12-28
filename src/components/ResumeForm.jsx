import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/';
//import { Cropper } from 'react-image-cropper';
import Cropper from 'react-cropper';
import AccentColor from './AccentColor/';
import PersonalDetails from './PersonalDetails/';
import Payix from '../assets/payix.jpg';
import 'cropperjs/dist/cropper.css';

import ModalContainer from './widgets/ModalContainer';

class ResumeForm extends Component {

  state = {
    img: null
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

  onCrop = () => {
    const dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();
    return dataUrl;
  }

  openModal = () => {
    this.props.actions.openModal(true);
  }

  selectCrop = () => {
    this.setState({
      img: this.onCrop()
    })
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
          openModal={this.openModal}
        />
        <ModalContainer>
          <div className="content-wrapper">
            <Cropper
              ref='cropper'
              src={Payix}
              crop={this.onCrop}
              guides={true}
            />
            {
              this.state.img !== null 
                ? ( 
                  <img src={this.state.img} alt=""/>
                )
                : null
            }
            <button onClick={this.selectCrop}>Select Crop</button>
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