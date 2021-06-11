import React from 'react';
import { ONGOING, STUCK, COMPLETED } from '../../context/types';
import PropTypes from 'prop-types';

const TodoTasks = ({ id, task = '', status = ONGOING }) => {
  if (status === COMPLETED) {
    return <div className='sub-task sub-task-completed my-1 p-1'>{task}</div>;
  } else if (status === STUCK) {
    return <div className='sub-task sub-task-stuck my-1 p-1'>{task}</div>;
  } else {
    return <div className='sub-task sub-task-ongoing my-1 p-1'>{task}</div>;
  }
};

TodoTasks.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  task: PropTypes.string,
};

export default TodoTasks;
