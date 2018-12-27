import React from 'react';
import boyIcon from '../../assets/boy.svg';

const PersonalDetails = props => (
  <div>
    <h2>Personal Details</h2>
    <div className="content-form">
      <form className="content-form__form" action="" onChange={props.fillForm}>
        <div className="content-form__item">
          <label className="content-form__label" htmlFor="name">Job Title</label>
          <input className="content-form__field" type="text" name="job" defaultValue={props.details.job}/>
        </div>
        <div className="content-form__item content-form__item-upload-image" onClick={props.openModal}>
          <div className="content-form__img-content-logo">
            <img className="content-form__img" src={boyIcon} alt="boy"/>
          </div>
          <p className="content-form__item-upload-image--title">Upload photo</p>
        </div>
        <div className="content-form__item">
          <label className="content-form__label" htmlFor="name">First Name</label>
          <input className="content-form__field" type="text" name="first_name" defaultValue={props.details.first_name}/>
        </div>
        <div className="content-form__item">
          <label className="content-form__label" htmlFor="name">Last Name</label>
          <input className="content-form__field" type="text" name="last_name" defaultValue={props.details.last_name}/>
        </div>
        <div className="content-form__item">
          <label className="content-form__label" htmlFor="name">Email</label>
          <input className="content-form__field" type="text" name="email"/>
        </div>
        <div className="content-form__item">
          <label className="content-form__label" htmlFor="name">Phone</label>
          <input className="content-form__field" type="text" name="phone"/>
        </div>
      </form>
    </div>
  </div>
);

export default PersonalDetails;