const DEFAULT = 'TEST';

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case 'HOME':
      return `${DEFAULT} - Tic Tac Toe`;
    default:
      return `${DEFAULT} - Not Found`;
  }
};
