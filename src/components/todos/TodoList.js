import React, { useContext } from 'react';
import ListContext from '../../context/list/listContext';
import TodoListItem from './TodoListItem';
import { STUCK, COMPLETED, ONGOING, NOT_STARTED } from '../../context/types';

const TodoList = () => {
  const listContext = useContext(ListContext);
  const { list } = listContext;
  const list_completed =
    list.length > 0 && list.filter(item => item.stage === COMPLETED);
  const list_stuck =
    list.length > 0 && list.filter(item => item.stage === STUCK);
  const list_ongoing =
    list.length > 0 && list.filter(item => item.stage === ONGOING);
  const list_not_started =
    list.length > 0 && list.filter(item => item.stage === NOT_STARTED);
  return (
    <>
      <ul>
        <div className='sub-cards'>
          {list_ongoing.length > 0 && (
            <h3 className='task-ongoing py-1'>Ongoing Tasks</h3>
          )}
          {list_ongoing.length > 0 &&
            list_ongoing.map(item => (
              <li key={item.id}>
                <TodoListItem item={item} />
              </li>
            ))}
        </div>

        <div className='sub-cards'>
          {list_not_started.length > 0 && (
            <h3 className='task-not-started py-1'>Yet to start</h3>
          )}
          {list_not_started.length > 0 &&
            list_not_started.map(item => (
              <li key={item.id}>
                <TodoListItem item={item} />
              </li>
            ))}
        </div>

        <div className='sub-cards'>
          {list_completed.length > 0 && (
            <h3 className='task-completed py-1'>Completed Tasks</h3>
          )}
          {list_completed.length > 0 &&
            list_completed.map(item => (
              <li key={item.id}>
                <TodoListItem item={item} />
              </li>
            ))}
        </div>

        <div className='sub-cards'>
          {list_stuck.length > 0 && (
            <h3 className='task-stuck py-1'>Stuck tasks</h3>
          )}
          {list_stuck.length > 0 &&
            list_stuck.map(item => (
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
