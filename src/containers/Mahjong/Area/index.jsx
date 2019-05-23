import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  AVAILABLE_CARDS,
  CURRENT_AREA,
  SET_FIRST_CARD,
} from '../../../store/constants/mahjong.constants';
import { getMahjong } from '../../../store/selectors/mahjong';

class Area extends Component {
  findPair(value, index) {
    const { firstCard } = this.props.mahjong;

    if (!firstCard.value) {
      this.setMahjongArea(index, false, true, true);
      this.setFirstCard({ value, index });
    } else if (firstCard.value === value) {
      this.setMahjongArea(firstCard.index, index, false, true);
      this.setFirstCard({ value: null, card: null });
      this.setAvailableCards();
    } else {
      this.setMahjongArea(firstCard.index, index, true, true);
      this.setFirstCard({ value: null, card: null });
      setTimeout(() => {
        this.setMahjongArea(firstCard.index, index, false, false);
      }, 500);
    }
  }

  setAvailableCards = () => {
    const { setMahjong, mahjong: { availableCards } } = this.props;
    if (availableCards - 2 === 0) { alert("Victory!"); }
    setMahjong(AVAILABLE_CARDS, availableCards - 2);
  }

  setFirstCard = (object) => {
    const { setMahjong } = this.props;
    setMahjong(SET_FIRST_CARD, object);
  }

  setMahjongArea = (firstIndex, secondIndex, active, disabled) => {
    const { setMahjong, mahjong: { currentArea } } = this.props;
    if (firstIndex >= 0) { currentArea[firstIndex] = this.changeCurrentArea(firstIndex, active, disabled); }
    if (secondIndex >= 0) { currentArea[secondIndex] = this.changeCurrentArea(secondIndex, active, disabled); }
    setMahjong(CURRENT_AREA, currentArea);
  }

  changeCurrentArea = (index, active, disabled) => {
    const { currentArea } = this.props.mahjong;
    return { ...currentArea[index], active, disabled };
  };

  render() {
    const { currentArea, columnsCards } = this.props.mahjong;
    return (
      <div className="mahjong__area">
          {currentArea.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`mahjong__area-btn${item.active ? ' active' : ''}`}
              style={{ width: `${100 / columnsCards}%` }}
              onClick={() => this.findPair(item.value, index)}
              disabled={item.disabled}
            >
              {item.value}
            </button>
          ))}
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
