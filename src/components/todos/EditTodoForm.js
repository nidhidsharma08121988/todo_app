import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import ListContext from '../../context/list/listContext';

const EditTodoForm = () => {
  const { todoItemId } = useParams();
  const [todoItem, setTodoItem] = useState(null);
  const [title, setTitle] = useState('');
  const [subTasks, setSubTasks] = useState('');
  const [labels, setLabels] = useState('');
  const listContext = useContext(ListContext);
  const { list, editTodoItem } = listContext;
  const history = useHistory();
  //find the list itme with id from list in list context
  const findItem = () => {
    // parseInt is very important
    let temp = list.filter(item => item.id === parseInt(todoItemId));
    if (temp[0]) setTodoItem(temp[0]);
  };

  // load sub tasks into form field
  const loadSubtask = () => {
    let temp = [];
    if (todoItem) {
      console.log(todoItem);
      for (let i = 0; i < todoItem.todo.length; i++) {
        //todo is array of objects that has task property
        temp.push(todoItem.todo[i].task);
      }
    }
    setSubTasks(temp.join(', '));
  };

  //load labels into form field
  const loadLabels = () => {
    let temp = [];
    if (todoItem) {
      const { todo_labels } = todoItem;
      for (let i = 0; i < todo_labels.length; i++) {
        temp.push('#' + todo_labels[i]);
      }
    }
    setLabels(temp.join(' '));
  };

  // load title
  const loadTitle = () => {
    if (todoItem) setTitle(todoItem.todo_title);
  };

  // load when the component is first mounted
  useEffect(() => {
    findItem();
    loadSubtask();
    loadLabels();
    loadTitle();
    //eslint-disable-next-line
  }, [todoItemId, todoItem]);

  const onChange = e => {
    switch (e.target.name) {
      case 'todoTitle':
        setTitle(e.target.value);
        break;
      case 'subTask':
        setSubTasks(e.target.value);
        break;
      case 'label-ta':
        setLabels(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitForm = e => {
    //prevent default
    e.preventDefault();

    //handle subtasks
    let tempArrSubTask = subTasks.split(', ');
    let finalSubTasks = [];
    for (let i = 0; i < tempArrSubTask.length; i++) {
      if (tempArrSubTask[i].trim() === '') continue;
      finalSubTasks.push({
        task: tempArrSubTask[i],
      });
    }

    //handle labels
    let tempArrLabel = labels.split('#');
    let finalLabels = [];
    for (let i = 0; i < tempArrLabel.length; i++) {
      if (tempArrLabel[i].trim() === '') continue;
      finalLabels.push(tempArrLabel[i]);
    }
    //create update todoItem object
    let updatedTodoItem = {
      ...todoItem,
      todo_title: title,
      todo: finalSubTasks,
      todo_labels: finalLabels,
    };

    //call edittodoitem method
    editTodoItem(updatedTodoItem);

    //redirect to home
    history.push('/');
  };

  return todoItem === null ? (
    <div>Nothing here</div>
  ) : (
    <div className='form-container'>
      <div className='flex-row center'>
        <h2>Edit Task</h2>
      </div>
      <form onSubmit={submitForm}>
        <div className='form-controls'>
          {/* edit heading */}
          <div className='form-control flex-col'>
            <label htmlFor='todoTitle'>Task Name</label>
            <input
              type='text'
              className='text-l input'
              value={title}
              onChange={onChange}
              name='todoTitle'
              id='todoTitle'
            />
          </div>
          {/* edit sub task */}
          <div className='form-control flex-col'>
            <label htmlFor='subTask'>Task Name</label>
            <textarea
              className='input'
              value={subTasks}
              onChange={onChange}
              name='subTask'
              id='subTask'
            />
          </div>
          {/* edit labels */}
          <div className='form-control flex-col'>
            <label htmlFor='label-ta'>Labels</label>
            <textarea
              className='input textarea-sm'
              value={labels}
              onChange={onChange}
              name='label-ta'
              id='label-ta'
            />
          </div>
        </div>
        {/* buttons */}
        <div className='flex-row center my-1'>
          <input
            className='btn btn-sm btn-dark light-smooth'
            type='submit'
            value='Save'
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
