import React, { Component } from 'react';
import { connect } from 'react-redux';

import Popup from '../Popup';
import * as components from './Components';

class App extends Component {
  render() {
    const { page } = this.props;
    const Content = components[page];

    return (
      <main className="main page">
        <Popup />
        <Content />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
});

export default connect(
  mapStateToProps,
  null,
)(App);
