import React, { useContext } from 'react';
import { COMPLETED } from '../../context/types';
import ListContext from '../../context/list/listContext';
import TodoTasks from '../tasks/TodoTasks';
import PropTypes from 'prop-types';

const TodoListItem = ({ item }) => {
  const { id, todo_title, todo, start_date, finish_date, stage } = item;
  const listContext = useContext(ListContext);
  const { deleteToDoItem } = listContext;
  const deleteThisItem = () => {
    deleteToDoItem(id);
  };
  return (
    <div className='card my-1 p-2'>
      <div className='flex-row space-between bb'>
        <div className='flex-row'>
          {stage === COMPLETED && (
            <i className='fa fa-check my-1 py-1' style={{ color: 'green' }} />
          )}
          <h3 className='sub-heading my-1 py-1 m-1'>{todo_title}</h3>
        </div>
        <div className='ctr-btn'>
          <button className='btn btn-sm btn-dark my-1 py-1 light-smooth'>
            <i className='fa fa-edit' />
          </button>
          <button
            className='btn btn-sm btn-danger my-1 py-1 light-smooth'
            onClick={deleteThisItem}
          >
            <i className='fa fa-trash' />
          </button>
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
        <div className='dates flex-col bl m-1 p-1 my-1'>
          <>
            {'Begun on '}
            <div className='flex-row my-1'>
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
              <div className='flex-row my-1'>
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
