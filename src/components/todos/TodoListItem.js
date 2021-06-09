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
    <div className='card my-1 p-1'>
      <div>
        <h3>{todo_title}</h3>
      </div>
    </div>
  );
};

export default TodoListItem;
