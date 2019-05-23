import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMahjong } from '../../../store/selectors/mahjong';
import { AVAILABLE_CARDS, CURRENT_AREA } from '../../../store/constants/mahjong.constants';

class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCard: null,
      secondCard: null,
    };
  }

  findPair(value, index) {
    const { firstCard, secondCard } = this.state;

    if (!firstCard) {
      this.setState({
        firstCard: {
          value,
          index,
        },
      });
    } else {
      this.setState({
        secondCard: {
          value,
          index,
        },
      });
    }

    if (firstCard && secondCard) {
      
    }
  }

  render() {
    const { currentArea, columnsCards } = this.props.mahjong;
    const { firstCard, secondCard } = this.state;
    return (
      <div className="mahjong__area">
          {currentArea.map((item, index) => (
            <button
              key={index}
              type="button"
              className="mahjong__area-btn"
              style={{ width: `${100 / columnsCards}%` }}
              onClick={() => this.findPair(item, index)}
              disabled={(firstCard !== null && firstCard.index === index) || (secondCard !== null && secondCard.index === index)}
            >
              {item}
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
