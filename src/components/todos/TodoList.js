import React, { useContext } from 'react';
import ListContext from '../../context/list/listContext';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const listContext = useContext(ListContext);
  const { list } = listContext;
  console.log(list);
  return (
    <>
      <ul>
        {list.length > 0 &&
          list.map(listItem => (
            <li key={listItem.id}>
              <TodoListItem item={listItem} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
