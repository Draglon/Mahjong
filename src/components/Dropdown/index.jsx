import React from 'react';

const DropdownBtn = ({
  value,
  list,
  onclick,
  onToggle,
  toggle,
}) => (
  <div className={`dropdown${toggle ? ' active' : ''}`}>
    <div className="dropdown__value" onClick={() => onToggle(toggle)}>{value}</div>
    <ul className="dropdown__list">
      {list.map(
        (item, index) => (
          <li key={index} className="dropdown__item" onClick={() => onclick(item, index)}>
            {item}
          </li>
        ),
      )}
    </ul>
  </div>
);

export default DropdownBtn;
