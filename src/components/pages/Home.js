import React from 'react';
import TodoList from '../todos/TodoList';

const Home = () => {
  return (
    <div className='sub-container'>
      <div className='flex-row space-between'>
        <h2 className='heading text-xl'>Things to do...</h2>
      </div>
      <div>
        <button aria-hidden='true' className='btn btn-primary'>
          Add new task
        </button>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
