import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

class AccentColor extends Component {

  selectColor = (e) => {
    let target = e.target;
    if(target.className.includes('color')) {
      let color = target.getAttribute('data-color');
      this.props.actions.selectColorTemplate(color);
    }
  }

  render() {
    return(
      <div className="colors" onClick={this.selectColor}>
        <p>Accent Color</p>
        <div className="colors__content">
          {
            this.props.colors.map(color => (
              <div className="colors__item color" data-color={color} key={color} style={{backgroundColor:color}}></div>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  console.log(state)
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AccentColor);
