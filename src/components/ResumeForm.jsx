import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Cropper } from 'react-image-cropper';
import AccentColor from './AccentColor/';
import PersonalDetails from './PersonalDetails/';
import Payix from '../assets/payix.jpg';

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

  cropPhoto = () => {
    this.setState({image: this.cropper.crop()})
  }

  openModal = () => {
    this.props.actions.openModal(true);
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
                src={Payix}
                styles={{width:400,height:400}}
                ref={ ref => { this.cropper = ref }}
              />
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