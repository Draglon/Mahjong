import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './index';

describe('<NotFound /> container', () => {
  const NotFoundContainer = shallow(<NotFound />);

  it('renders without crashing', () => {
    expect(NotFoundContainer.find('h2').text()).toEqual('Page not found');
    expect(NotFoundContainer.find('h1').text()).toEqual('404');
  });

  it('render property', () => {
    expect(NotFoundContainer).toMatchSnapshot();
  });
});
