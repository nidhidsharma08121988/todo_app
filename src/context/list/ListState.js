import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';
import { ONGOING, STUCK, COMPLETED } from '../types';
const ListState = props => {
  const initialState = {
    list: [
      {
        id: 1,
        todo_title: 'Complete this app',
        todo: '1. Do this 2. do that 3. such',
        start_date: new Date(2021, 5, 12, 14, 0, 0),
        finish_date: new Date(2021, 6, 21, 8, 0, 0, 0),
        started: true,
        reminder: false,
        stage: ONGOING,
      },
      {
        id: 2,
        todo_title: 'Complete honeypot test',
        todo: '1. do this 2. do that',
        start_date: new Date(2021, 4, 27, 14, 0, 0),
        finish_date: new Date(2021, 5, 21, 12, 0, 0, 0),
        reminder: false,
        stage: COMPLETED,
      },
      {
        id: 3,
        todo_title: 'Complete logic test',
        todo: '1. do this 2. do that',
        start_date: new Date(2021, 6, 1, 14, 0, 0),
        finish_date: new Date(2021, 6, 21, 12, 0, 0, 0),
        reminder: false,
        stage: STUCK,
      },
    ],
  };
  //actions
  //add to do list item
  //remove to do item
  //delete to do item
  //add reminder
  //clear reminder
  //edit task

  const [state, dispatch] = useReducer(listReducer, initialState);
  return (
    <ListContext.Provider
      value={{
        list: state.list,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
