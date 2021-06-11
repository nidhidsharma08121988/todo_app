import React from 'react';
import { STUCK, COMPLETED } from '../../context/types';
import TodoTasks from '../tasks/TodoTasks';
import PropTypes from 'prop-types';

const TodoListItem = ({ item }) => {
  const { todo_title, todo, start_date, finish_date, stage } = item;
  return (
    <div
      className={`card my-1 p-2 ${
        stage === COMPLETED
          ? 'task-completed'
          : stage === STUCK
          ? 'task-stuck'
          : 'task-ongoing'
      }`}
    >
      <div className='flex-row space-between bb'>
        <div>
          <h3 className='sub-heading my-1 py-1'>{todo_title}</h3>
        </div>
        <div>
          {stage === COMPLETED && (
            <i className='fa fa-check my-1 py-1' style={{ color: 'green' }} />
          )}
        </div>
      </div>
      <div className='task-dates flex-row space-between'>
        <div className='content'>
          <ul className='sub-tasks'>
            {todo.length > 0 &&
              todo.map(task => (
                <li key={task.id}>
                  <TodoTasks {...task} />
                </li>
              ))}
          </ul>
        </div>
        <div className='dates flex-row bl m-1 p-1 my-1'>
          <>
            {'Begun on '}
            <div className='flex-row'>
              <i className='fa fa-calendar m-1 i-l'></i>
              <div className='inline-flex m-1'>
                <div>{start_date.getDate()}</div>
                {'/'}
                <div>{start_date.getMonth()}</div>
                {'/'}
                <div>{start_date.getFullYear()}</div>
              </div>
            </div>
            {'Due by'}
            {finish_date ? (
              <div className='flex-row'>
                <i className='fa fa-calendar m-1 i-l'></i>
                <div className='inline-flex m-1'>
                  <div>{finish_date.getDate()}</div>/
                  <div>{finish_date.getMonth()}</div>/
                  <div>{finish_date.getFullYear()}</div>
                </div>
              </div>
            ) : (
              'No due date'
            )}
          </>
        </div>
      </div>
    </div>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default TodoListItem;
