import React from 'react';

const List = ({ list, classNameList }) => (
  <ul className={`${classNameList}__list`}>
    {list.map((item, index) => <li key={index} className={`${classNameList}__item`}>{item}</li>)}
  </ul>
);

export default List;
