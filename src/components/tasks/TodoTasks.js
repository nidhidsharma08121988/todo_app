import React from 'react';
import PropTypes from 'prop-types';

const TodoTasks = ({ task = '' }) => {
  return <div className='sub-task my-1 p-1'>{task}</div>;
};

TodoTasks.propTypes = {
  task: PropTypes.string,
};

export default TodoTasks;
