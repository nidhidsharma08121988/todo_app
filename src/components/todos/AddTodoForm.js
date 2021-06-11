import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NOT_STARTED } from '../../context/types';
import ListContext from '../../context/list/listContext';

// add the todo item
const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState('');
  const [startDate, setStartDate] = useState(Date.now());
  const [finishDate, setFinishDate] = useState(Date.now());
  const listContext = useContext(ListContext);

  const onChange = e => {
    switch (e.target.name) {
      case 'todoTitle':
        setTodoTitle(e.target.value);
        break;
      case 'todoList':
        setTodoList(e.target.value);
        break;
      case 'startDate':
        setStartDate(e.target.value);
        break;
      case 'finishDate':
        setFinishDate(e.target.value);
        break;
      default:
        break;
    }
  };
  const submitForm = e => {
    e.preventDefault();
    const todoTask = todoList.split(',');
    const todoTaskList = [];
    //push sub tasks in the todo task list
    for (let i = 0; i < todoTask.length; i++) {
      //if task is empty then skip this iteration
      if (todoTask[i].trim() === '') {
        continue;
      }
      let taskId = Math.floor(Math.random() * 20) + 1;
      let obj = {
        id: taskId,
        task: todoTask[i],
        status: NOT_STARTED,
      };
      todoTaskList.push(obj);
    }
    //create object of the list item
    const todoId = Math.floor(Math.random() * 50) + 1;
    const todoItem = {
      id: todoId,
      todo_title: todoTitle,
      todo: todoTaskList,
      start_date: new Date(startDate),
      finish_date: new Date(finishDate),
      stage: NOT_STARTED,
      stuck: false,
    };
    //call add todo in the list
    listContext.addTodoItem(todoItem);
    //remaining: set alert that the item is added

    //clear the form
    clearForm();
  };

  const clearForm = () => {
    setTodoTitle('');
    setTodoList('');
    setStartDate(Date.now());
    setFinishDate(Date.now());
  };

  return (
    <div className='form-container'>
      <div className='flex-row center'>
        <h2>Add New task</h2>
      </div>
      <form onSubmit={submitForm}>
        <div className='form-controls'>
          <div className='form-control flex-col'>
            <label htmlFor='todoTitle'>Task Name</label>
            <input
              id='todoTitle'
              type='text'
              className='text-l input'
              placeholder='Enter title'
              name='todoTitle'
              value={todoTitle}
              onChange={onChange}
              isRequired
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
          <div className='form-control flex-col'>
            <label htmlFor='startDate'>Start Date</label>
            <input
              className='input'
              id='startDate'
              type='date'
              name='startDate'
              value={startDate}
              onChange={onChange}
            />
          </div>
          <div className='form-control flex-col'>
            <label htmlFor='finishDate'>Due on</label>
            <input
              id='finishDate'
              className='input'
              type='date'
              name='finishDate'
              value={finishDate}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='flex-row center'>
          <input
            className='btn btn-sm btn-dark'
            type='submit'
            value='Add Task'
          />
          <Link to='/'>
            <button className='btn btn-sm btn-danger' onClick={clearForm}>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
