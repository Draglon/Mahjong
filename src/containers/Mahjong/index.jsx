import React from 'react';

import Nav from './Nav';
import Area from './Area';
import Status from './Status';
import NewGame from './NewGame';

const Mahjong = () => (
  <div className="mahjong">
    <div className="mahjong__content">
      <Nav />
      <Area />
      <Status />
      <NewGame />
    </div>
  </div>
);

export default Mahjong;
