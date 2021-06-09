import React from 'react';
import { STUCK, COMPLETED } from '../../context/types';
const TodoTasks = ({ id, task, status }) => {
  if (status === COMPLETED) {
    return <span className='sub-task-completed'>{task}</span>;
  } else if (status === STUCK) {
    return <span className='sub-task-stuck'>{task}</span>;
  } else {
    return <span className='sub-task-ongoing'>{task}</span>;
  }
};

export default TodoTasks;
