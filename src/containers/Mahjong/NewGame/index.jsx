import React from 'react';
import { connect } from 'react-redux';

// import { NEW_GAME } from '../../../store/constants/mahjong.constants';

const NewGame = ({ startNewGame }) => (
  <div className="mahjong__btns">
    {/* <button
      className="btn btn-primary btn-reset"
      type="button"
      onClick={() => startNewGame(NEW_GAME)}
    >
      New Game
    </button> */}
  </div>
);

const mapDispatchToProps = dispatch => ({
  // startNewGame(type) {
  //   dispatch({ type });
  // },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewGame);
