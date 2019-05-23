const DEFAULT = 'TEST';

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case 'HOME':
      return `${DEFAULT} - Mahjong`;
    default:
      return `${DEFAULT} - Not Found`;
  }
};
