import React from 'react';

import Area from './Area';
import Status from './Status';
import NewGame from './NewGame';

const Mahjong = () => (
  <div className="mahjong">
    <div className="mahjong__content">
      <Area />
      <Status />
      <NewGame />
    </div>
  </div>
);

export default Mahjong;
