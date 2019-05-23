import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AVAILABLE_CARDS, CURRENT_AREA } from '../../../store/constants/mahjong.constants';

import Dropdown from '../../../components/Dropdown';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: ['2x2', '4x4', '6x6', '8x8'],
      activeArea: '8x8',
      cards: 64,
      dropdownToggle: false,
    };
  }

  componentDidMount() {
    const { setMahjong } = this.props;
    const { cards } = this.state;

    setMahjong(AVAILABLE_CARDS, cards);
    setMahjong(CURRENT_AREA, this.sortArray(this.createArray(cards)));
  }

  componentDidUpdate(prevState) {
    const { setMahjong } = this.props;
    const { cards } = this.state;

    if (cards !== prevState.cards) {
      setMahjong(AVAILABLE_CARDS, cards);
      setMahjong(CURRENT_AREA, this.sortArray(this.createArray(cards)));
    }
  }

  createArray = cards => [...Array(cards / 2).keys()].map(index => index + 1);

  sortArray = array => [].concat(array, array).sort(this.compareRandom);

  compareRandom = () => Math.random() - 0.5;

  getActiveArea = (selected, index, toggle) => {
    const cards = Math.pow((index + 1) * 2, 2);
    this.setState({
      activeArea: selected,
      cards,
      dropdownToggle: !toggle,
    });
  }

  onToggle = (toggle) => {
    this.setState({
      dropdownToggle: !toggle,
    });
  }

  render() {
    const { sizes, activeArea, dropdownToggle } = this.state;
    return (
      <nav className="mahjong__nav">
        <Dropdown
          list={sizes}
          value={activeArea}
          onclick={this.getActiveArea}
          toggle={dropdownToggle}
          onToggle={this.onToggle} />
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setMahjong(type, payload) {
    dispatch({ type, payload });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Nav);
