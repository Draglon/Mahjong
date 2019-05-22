import React, { Component } from 'react';
import { connect } from 'react-redux';

import './popup.scss';
import { POPUP_TOGGLE } from '../../store/constants/ui.constants';

class Popup extends Component {
  popupClose = () => {
    const { popupToggle } = this.props;
    popupToggle(POPUP_TOGGLE, {
      title: '',
      message: '',
      btnClose: true,
    });
  }

  render() {
    const { popup } = this.props;

    return (
      <>
        {popup.show ? (
          <div className="popup">
            <div className="popup__container">
              <header className="popup__header">
                <div role="button" tabIndex="0" className="popup__close" onClick={this.popupClose}>
                  <i className="icon-cross" />
                </div>
                <h2 className="popup__title">{popup.title}</h2>
              </header>
              <div className="popup__content">
                <div className="popup__msg">
                  {popup.message}
                </div>
                <div className="popup__btns">
                  <button
                    type="button"
                    className="btn btn--small btn-primary btn-popup"
                    onClick={this.popupClose}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
            <div role="button" tabIndex="-1" className="popup__overlay" onClick={this.popupClose} />
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => ({
  popup: state.reducers.ui.popupToggle,
});

const mapDispatchToProps = dispatch => ({
  popupToggle: (type, payload) => {
    dispatch({ type, payload });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Popup);
