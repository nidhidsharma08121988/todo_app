import React, { useContext } from 'react';
import ListContext from '../../context/list/listContext';
import TodoTasks from '../tasks/TodoTasks';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const TodoListItem = ({ item }) => {
  // hook for using props.history for redirect
  let history = useHistory();

  const { id, todo_title, todo, start_date, todo_labels } = item;
  const listContext = useContext(ListContext);
  const { deleteToDoItem } = listContext;
  // when delete is clicked
  const deleteThisItem = () => {
    deleteToDoItem(id);
  };
  // when edit button is clicked redirect to edit form
  const onEdit = () => {
    // directly call history hook rather than props.history
    history.push({
      pathname: '/editTodo',
      state: {
        todo: item,
      },
    });
  };
  return (
    <div className='card my-1 p-2'>
      <div className='flex-row space-between bb'>
        <div className='flex-row'>
          <h3 className='sub-heading my-1 py-1 m-1'>{todo_title}</h3>
        </div>
        <div className='ctr-btn'>
          <button
            className='btn btn-sm btn-dark my-1 py-1 light-smooth'
            onClick={onEdit}
          >
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
            {'Added on'}
            <div className='flex-row my-1'>
              <i className='fa fa-calendar m-1 i-l'></i>
              <div className='inline-flex m-1'>{start_date}</div>
            </div>
          </>
        </div>
      </div>
      <div className='flex-row'>
        {todo_labels.length > 0 &&
          todo_labels.map(label => (
            <span className='lbl-disp m-1 my-1 p-1'>{label}</span>
          ))}
      </div>
    </div>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default TodoListItem;
