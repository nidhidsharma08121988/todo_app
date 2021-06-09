import React from 'react';
import TodoList from '../todos/TodoList';

const Home = () => {
  return (
    <div className='sub-container'>
      <div>
        <h2 className='heading text-xl'>Things to do...</h2>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
