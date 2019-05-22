import React, { Component } from 'react';
import { connect } from 'react-redux';

class Area extends Component {
  render() {
    return (
      <div className="mahjong__area">

      </div>
    );
  }
}

const mapStateToProps = state => ({
  // mo: getMahjong(state),
});

const mapDispatchToProps = dispatch => ({
  // setMahjong(type, payload) {
  //   dispatch({ type, payload });
  // },
  // popupToggle(type, payload) {
  //   dispatch({ type, payload });
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Area);
