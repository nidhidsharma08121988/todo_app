import React, { useContext } from 'react';
import ListContext from '../../context/list/listContext';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const listContext = useContext(ListContext);
  const { list } = listContext;
  return (
    <>
      <ul>
        <div className='sub-cards'>
          {list.length > 0 &&
            list.map(item => (
              <li key={item.id}>
                <TodoListItem item={item} />
              </li>
            ))}
        </div>
      </ul>
    </>
  );
};

export default TodoList;
