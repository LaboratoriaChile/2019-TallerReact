import * as actions from '../actions/actionTypes';

export default (
  state = {
    name: 'Bulbasaur',
    hp: '100',
  },
  action
) => {
  switch (action.type) {
    case actions.EVOLUCIONAR_POKEMON:
      return {
        ...state,
        name: 'Ivysaur'
      };
    default:
      return {...state};
  }
};