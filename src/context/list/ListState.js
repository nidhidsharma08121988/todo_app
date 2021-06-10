import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';
import { ONGOING, STUCK, COMPLETED, WAITING } from '../types';
const ListState = props => {
  const initialState = {
    list: [
      {
        id: 1,
        todo_title: 'Complete this app',
        todo: [
          { id: 11, task: 'Implement display list feature', status: COMPLETED },
          { id: 12, task: 'Implement add to list feature', status: COMPLETED },
          {
            id: 13,
            task: 'Implement delete list item feature',
            status: ONGOING,
          },
          {
            id: 14,
            task: 'Implement edit list item feature',
            status: WAITING,
          },
        ],
        start_date: new Date('2021-05-18'),
        finish_date: new Date('2021-06-21'),
        started: true,
        stage: ONGOING,
        stuck: false,
      },
      {
        id: 2,
        todo_title: 'Complete honeypot test',
        todo: [
          { id: 21, task: 'Practice algorithms', status: COMPLETED },
          { id: 22, task: 'Take practice test', status: COMPLETED },
          { id: 23, task: 'Take test', status: COMPLETED },
        ],
        start_date: new Date('2021-4-27'),
        finish_date: new Date('2021-5-21'),
        started: true,
        stage: COMPLETED,
        stuck: false,
      },
      {
        id: 3,
        todo_title: 'Complete logic test',
        todo: [
          { id: 21, task: 'Practice algorithms', status: COMPLETED },
          { id: 22, task: 'Take practice test', status: COMPLETED },
          { id: 23, task: 'Take test', status: STUCK },
        ],
        start_date: new Date('2021-6-1'),
        finish_date: new Date('2021-6-21'),
        started: false,
        stage: STUCK,
        stuck: true,
      },
    ],
  };
  //actions
  //add to do list item
  //remove to do item
  //delete to do item
  //add task item
  //delete task item
  //edit task item
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
