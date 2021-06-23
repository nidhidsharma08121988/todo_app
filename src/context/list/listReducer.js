import { ADD_TO_DO, DELETE_TO_DO, EDIT_TO_DO } from '../types';

const listReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_TO_DO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      };
    case EDIT_TO_DO:
      return {
        ...state,
        list: [
          ...state.list.filter(item => item.id !== action.payload.id),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default listReducer;
