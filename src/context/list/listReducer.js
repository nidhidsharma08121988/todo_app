import { ADD_TO_DO } from '../types';

const listReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;
