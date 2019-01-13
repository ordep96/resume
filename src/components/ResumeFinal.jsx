import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResumeFinal extends Component {

  render() {
    console.log(this.props.details)
    return(
      <section className="resume-column resume__final user-resume">
        <div className="resumen-canvas">
          <div className="user-resume__content-name-description">
            {
              this.props.imgProfile !== null
                ?(
                  <div className="user-resume__img">
                    <img className="user-resume__img" src={this.props.imgProfile} alt="img Profile"/>
                  </div>
                )
                : null
            }
            <div className="user-resume__description">
              <h2>{this.props.details.first_name} {this.props.details.last_name}</h2>
              <p>{this.props.details.job}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    selectColor: state.color.selectColor,
    details: state.personalDetails.details,
    imgProfile: state.imgProfile.img
  }
}

export default connect(mapStateToProps)(ResumeFinal);