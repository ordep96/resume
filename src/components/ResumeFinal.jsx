import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResumeFinal extends Component {

  render() {
    console.log(this.props.details)
    return(
      <section className="resume-column resume__final">
        <div className="resumen-canvas">
          <h2>{this.props.details.first_name} {this.props.details.last_name}</h2>
          <p>{this.props.details.job}</p>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    selectColor: state.color.selectColor,
    details: state.personalDetails.details
  }
}

export default connect(mapStateToProps)(ResumeFinal);