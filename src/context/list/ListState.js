import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';
import { ADD_TO_DO, DELETE_TO_DO } from '../types';
const ListState = props => {
  const initialState = {
    list: [
      {
        id: 1,
        todo_title: 'Complete this app',
        todo: [
          { id: 11, task: 'Implement display list feature' },
          { id: 12, task: 'Implement add to list feature' },
          {
            id: 13,
            task: 'Implement delete list item feature',
          },
          {
            id: 14,
            task: 'Implement edit list item feature',
          },
        ],
        start_date: '2021-05-18',
        todo_labels: ['completed', 'fast'],
      },
      {
        id: 2,
        todo_title: 'Complete honeypot test',
        todo: [
          { id: 21, task: 'Practice algorithms' },
          { id: 22, task: 'Take practice test' },
          { id: 23, task: 'Take test' },
        ],
        start_date: '2021-04-27',
        todo_labels: ['completed', 'successfully'],
      },
      {
        id: 3,
        todo_title: 'Complete logic test',
        todo: [
          { id: 21, task: 'Practice algorithms' },
          { id: 22, task: 'Take practice test' },
          { id: 23, task: 'Take test' },
        ],
        start_date: '2021-06-1',
        todo_labels: ['completed', 'successful', 'waiting for result'],
      },
    ],
  };
  //actions
  //add to do list item
  const addTodoItem = todoListItem => {
    dispatch({
      type: ADD_TO_DO,
      payload: todoListItem,
    });
  };

  //delete to do
  const deleteToDoItem = id => {
    dispatch({
      type: DELETE_TO_DO,
      payload: id,
    });
  };

  //edit task

  const [state, dispatch] = useReducer(listReducer, initialState);
  return (
    <ListContext.Provider
      value={{
        list: state.list,
        addTodoItem,
        deleteToDoItem,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
