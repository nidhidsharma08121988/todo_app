import React from 'react';
import { ONGOING, STUCK, COMPLETED } from '../../context/types';

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
      <div>
        <h3 className='sub-heading'>{todo_title}</h3>
      </div>
      <div className='flex-row space-between'>
        <div className='content'>
          <p>{todo}</p>
        </div>
        <div className='flex-col bl m-1 p-1 my-1'>
          <>
            <div className='flex-row'>
              <i className='fa fa-calendar' style={{ color: 'steelblue' }}></i>
              <div className='inline-flex m-1'>
                <div>{start_date.getDay().toString()}</div>
                {'/'}
                <div>{start_date.getMonth().toString()}</div>
                {'/'}
                <div>{start_date.getYear().toString()}</div>
              </div>
            </div>
            <div className='flex-row'>
              <i className='fa fa-calendar' style={{ color: 'steelblue' }}></i>
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
