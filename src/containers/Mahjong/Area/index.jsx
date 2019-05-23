import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMahjong } from '../../../store/selectors/mahjong';
import { AVAILABLE_CARDS, CURRENT_AREA } from '../../../store/constants/mahjong.constants';

class Area extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: 64,
    };
  }

  componentDidMount() {
    const { setMahjong } = this.props;
    // setMahjong(AVAILABLE_CARDS, 64);
    // setMahjong(CURRENT_AREA, [...Array(32).keys()].map(index => index + 1));
  }

  render() {
    const { mahjong } = this.props;
    // const {area} = this.state;
    return (
      <div className="mahjong__area">
          {/* {map.area} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mahjong: getMahjong(state),
});

const mapDispatchToProps = dispatch => ({
  setMahjong(type, payload) {
    dispatch({ type, payload });
  },
  popupToggle(type, payload) {
    dispatch({ type, payload });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Area);
