import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/';

class ModalContainer extends Component {

    closeModal = () => {
        this.props.actions.openModal(false);
    }

    render() {
        return createPortal(
            <div className={`modal-wrapper ${this.props.openModal ? 'active' : ''}`}>
                <div className={`modal ${this.props.openModal ? 'active-modal' : ''}`}>
                    <button onClick={this.closeModal} className="modal-close">x</button>
                    {this.props.children}
                </div>
            </div>,
            document.getElementById('modal-container')
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
      openModal: state.modal.openModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);