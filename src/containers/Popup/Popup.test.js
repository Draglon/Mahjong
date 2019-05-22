import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedPopup, { Popup } from './index';

describe('<Popup /> container', () => {
  const mockStore = configureStore();
  const initialState = {
    reducers: {
      ui: {
        popupToggle: {
          title: '',
          message: '',
          btnClose: true,
          show: false,
        },
      },
    },
  };
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedPopup store={store} />);
  });

  it('render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  it('render property', () => {
    expect(container).toMatchSnapshot();
  });
});
