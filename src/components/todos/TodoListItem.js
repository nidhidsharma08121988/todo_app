import React from 'react';
import { STUCK, COMPLETED } from '../../context/types';
import TodoTasks from './TodoTasks';

const TodoListItem = ({ item }) => {
  console.log(item);
  const {
    todo_title,
    todo,
    start_date,
    finish_date,
    started,
    reminder,
    stage,
  } = item;
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
            {todo.map(task => (
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
                <div>{start_date.getDay().toString()}</div>
                {'/'}
                <div>{start_date.getMonth().toString()}</div>
                {'/'}
                <div>{start_date.getYear().toString()}</div>
              </div>
            </div>
            {'Due by'}
            <div className='flex-row'>
              <i className='fa fa-calendar m-1 i-l'></i>
              <div className='inline-flex m-1'>
                <div>{finish_date.getDay().toString()}</div>
                {'/'}
                <div>{finish_date.getMonth().toString()}</div>
                {'/'}
                <div>{finish_date.getYear().toString()}</div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
