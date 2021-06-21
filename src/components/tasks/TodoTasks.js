import React from 'react';
import PropTypes from 'prop-types';

const TodoTasks = ({ id, task = '', task_labels }) => {
  return <div className='sub-task my-1 p-1'>{task}</div>;
};

TodoTasks.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string,
};

export default TodoTasks;
