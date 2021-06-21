import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ListContext from '../../context/list/listContext';

// add the todo item
const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState('');
  const startDate = new Date(Date.now());
  const [labels, setLabels] = useState('');
  const listContext = useContext(ListContext);

  // useHistory hook for page redirect
  // no need of props with this hook
  const history = useHistory();

  const onChange = e => {
    switch (e.target.name) {
      case 'todoTitle':
        setTodoTitle(e.target.value);
        break;
      case 'todoList':
        setTodoList(e.target.value);
        break;
      case 'todo_labels':
        setLabels(e.target.value);
        break;
      default:
        break;
    }
  };
  const submitForm = e => {
    e.preventDefault();

    // handle subtasks
    const todoTask = todoList.split(',');
    const todoTaskList = [];
    for (let i = 0; i < todoTask.length; i++) {
      //if task is empty then skip this iteration
      if (todoTask[i].trim() === '') continue;
      let taskId = Math.floor(Math.random() * 20) + 1;
      let obj = {
        id: taskId,
        task: todoTask[i],
      };
      todoTaskList.push(obj);
    }

    // handle labels
    let final_labels = [];
    let myLabels = labels.split(',');
    for (let i = 0; i < myLabels.length; i++) {
      if (myLabels[i].trim() === '') continue;
      final_labels.push(myLabels[i]);
    }

    // convert date to string
    const myDate =
      startDate.getFullYear().toString() +
      '-' +
      startDate.getMonth().toString() +
      '-' +
      startDate.getDate().toString();
    //create object of the list item
    const todoId = Math.floor(Math.random() * 50) + 1;
    const todoItem = {
      id: todoId,
      todo_title: todoTitle,
      todo: todoTaskList,
      start_date: myDate,
      todo_labels: final_labels,
    };
    //call add todo in the list
    listContext.addTodoItem(todoItem);
    //remaining: set alert that the item is added

    //clear the form
    clearForm();

    alert('Task added');

    //****redirect to home page****
    history.push('/');
  };

  const clearForm = () => {
    setTodoTitle('');
    setTodoList('');
  };

  return (
    <div className='form-container'>
      <div className='flex-row center'>
        <h2>Add New Task</h2>
      </div>
      <form onSubmit={submitForm}>
        <div className='form-controls'>
          <div className='form-control flex-col'>
            <label htmlFor='todoTitle'>Task name</label>
            <input
              id='todoTitle'
              type='text'
              className='text-l input'
              placeholder='Enter title'
              name='todoTitle'
              value={todoTitle}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-control flex-col'>
            <label htmlFor='todoList'>Sub tasks</label>
            <textarea
              id='todoList'
              className='input'
              placeholder='Enter tasks in comma separated list'
              name='todoList'
              value={todoList}
              onChange={onChange}
            />
          </div>
          {/* labels */}
          <label htmlfor='todo_labels'>Add tags</label>
          <textarea
            className='input'
            name='todo_labels'
            id='todo_labels'
            value={labels}
            placeholder='Enter comma separated list of labels'
            onChange={onChange}
          />
        </div>
        {/* buttons */}
        <div className='flex-row center my-1'>
          <input
            className='btn btn-sm btn-dark light-smooth'
            type='submit'
            value='Add Task'
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

export default AddTodoForm;
