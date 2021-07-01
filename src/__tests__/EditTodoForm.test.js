import App from '../App';
import { fireEvent, render } from '@testing-library/react';
test('The edit form must display details of task to be edited', () => {
  const utils = render(<App />);

  //add a new item (we are testing we can't assume that there is data already)
  const addbtn = utils.getByTestId('add-btn');
  fireEvent.click(addbtn);
  const taskname = utils.getByPlaceholderText('Enter task name...');
  fireEvent.change(taskname, { target: { value: 'New Task' } });
  const submitBtn = utils.getByDisplayValue('Add Task');
  fireEvent.click(submitBtn);

  //now open the edit form
  const editArray = utils.queryAllByTestId('editBtn');
  expect(editArray.length).toBeGreaterThanOrEqual(1);

  const oneElement = editArray[0];
  fireEvent.click(oneElement);

  //now the edit form must open
  expect(utils.queryByText('Edit Task')).toBeTruthy();

  //once edit form opens you must be able to save the changes
  const task_name = utils.getByTestId('task-name');
  fireEvent.change(task_name, {
    target: { value: 'Edited task' },
  });

  //expect that task name changes
  expect(task_name.value).toBe('Edited task');

  //once submit or update or save is clicked the changes must be seen in home page
  const submit_btn = utils.getByDisplayValue('Save');
  fireEvent.click(submit_btn);
  expect(utils.getByText('Edited task')).toBeTruthy();
});

test('Pressing the cancel button must not edited anything, just get us back to home', () => {
  const utils = render(<App />);

  //add a new item (we are testing we can't assume that there is data already)
  const addbtn = utils.getByTestId('add-btn');
  fireEvent.click(addbtn);
  const taskname = utils.getByPlaceholderText('Enter task name...');
  fireEvent.change(taskname, { target: { value: 'New Task' } });
  const submitBtn = utils.getByDisplayValue('Add Task');
  fireEvent.click(submitBtn);

  //now open the edit form
  const editArray = utils.queryAllByTestId('editBtn');
  expect(editArray.length).toBeGreaterThanOrEqual(1);

  const oneElement = editArray[0];
  fireEvent.click(oneElement);

  //now the edit form must open
  expect(utils.queryByText('Edit Task')).toBeTruthy();

  //once edit form opens you must be able to save the changes
  const task_name = utils.getByTestId('task-name');
  fireEvent.change(task_name, {
    target: { value: 'Edited task' },
  });

  //now if the user clicks cancel, then the user must be redirecetd to home page and without editing
  const cancel_btn = utils.getByText('Cancel');
  fireEvent.click(cancel_btn);

  //edited task must not exist on page
  expect(utils.queryByText('Edited task')).not.toBeTruthy();
});
