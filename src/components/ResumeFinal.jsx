import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResumeFinal extends Component {

  renderProfile = () => {
    let contentProfile = document.querySelector('.content-profile');
        contentProfile.innerHTML = this.props.profile
  }

  componentDidMount() {
    this.renderProfile()
  }

  componentDidUpdate() {
    this.renderProfile();
  }

  render() {
    return(
      <section className="resume-column resume__final user-resume">
        <div className="resumen-canvas">
          <div className="user-resume__content-name-description">
            {
              this.props.imgCrop !== null
                ?(
                  <div className="user-resume__img">
                    <img className="user-resume__img" src={this.props.imgCrop} alt="img Profile"/>
                  </div>
                )
                : null
            }
            <div className="user-resume__description">
              <h2>{this.props.details.first_name} {this.props.details.last_name}</h2>
              <p>{this.props.details.job}</p>
            </div>
          </div>
          <div className="content-profile">
            <h2>Profile</h2>
          </div>
          <div className="resumen-canvas__content">
            <div></div>
            <div className="user-resume__details">
              <h2>Details</h2>
              <p>{this.props.details.email}</p>
              <p>{this.props.details.phone}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    selectColor: state.color.selectColor,
    details: state.personalDetails.details,
    imgCrop: state.imgProfile.imgCrop,
    profile: state.profile.profile
  }
}

export default connect(mapStateToProps)(ResumeFinal);