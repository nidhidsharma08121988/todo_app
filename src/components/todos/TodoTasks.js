import React from 'react';
import { STUCK, COMPLETED } from '../../context/types';
const TodoTasks = ({ id, task, status }) => {
  if (status === COMPLETED) {
    return <div className='sub-task sub-task-completed my-1 p-1'>{task}</div>;
  } else if (status === STUCK) {
    return <div className='sub-task sub-task-stuck my-1 p-1'>{task}</div>;
  } else {
    return <div className='sub-task sub-task-ongoing my-1 p-1'>{task}</div>;
  }
};

export default TodoTasks;
