import React, { useContext } from 'react';
import ListContext from '../../context/list/listContext';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const listContext = useContext(ListContext);
  const { list } = listContext;
  return (
    <>
      <ul>
        {list.map(listItem => (
          <TodoListItem item={listItem} key={listItem.id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
