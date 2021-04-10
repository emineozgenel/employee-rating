import { ADD_VOTE, GET_LIST } from './actions';
import { combineReducers } from 'redux';

export default combineReducers({
  employees: listReducer,
});

export function listReducer(state = {}, action) {
  switch (action.type) {
    case GET_LIST:
      return { ...state, ...action.payload };
    case ADD_VOTE:
      return {
        ...state,
        ...Object.values(state)
          .map((user) =>
            user.id === action.id ? { ...user, vote: user.vote + 1 } : user
          )
          .sort((a, b) => b.vote - a.vote),
      };
    default:
      return state;
  }
}
