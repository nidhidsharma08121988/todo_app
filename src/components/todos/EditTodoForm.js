import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditTodoForm = () => {
  // hook for getting data from location
  const location = useLocation();

  //hook to redirecting back to home page
  const [todoItem, setTodoItem] = useState(location.state.todo);

  useEffect(() => {
    // on load set the state of todo
    setTodoItem(location.state.todo);
  }, [location]);

  const { todo_title, todo, todo_labels } = todoItem;
  const onChange = e => {
    setTodoItem({
      ...todoItem,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeTodo = e => {};
  const onChangeLabels = e => {};
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='form-container'>
      <div className='flex-row center'>
        <h2>Edit Task</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-controls'>
          <div className='form-control flex-col'>
            <label htmlFor='todoTitle'>Task name</label>
            <input
              id='todoTitle'
              type='text'
              className='text-l input'
              placeholder='Enter title'
              name='todo_title'
              value={todo_title}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-control flex-col'>
            <label htmlFor='todoList'>Sub tasks</label>
          </div>
          {/* labels */}
          <div className='form-control flex-col'>
            <label htmlFor='todo_labels'>Labels</label>
          </div>
        </div>
        {/* buttons */}
        <div className='flex-row center my-1'>
          <input
            className='btn btn-sm btn-dark light-smooth'
            type='submit'
            value='Update task'
          />
          <Link to='/'>
            <button className='btn btn-sm btn-danger light-smooth'>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditTodoForm;
