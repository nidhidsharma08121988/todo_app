import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('The form must display properly', () => {
  const utils = render(<App />);
  const addBtn = utils.getByTestId('add-btn');
  fireEvent.click(addBtn);

  //form should have title
  expect(utils.getByText('Add New Task')).toBeTruthy();

  //There must be a form
  const myForm = utils.queryByTestId('add-new-form');
  expect(myForm).toBeTruthy();

  //1. Task title
  //There must be a someplace to enter task name
  const taskName = utils.queryByPlaceholderText('Enter task name...');
  expect(taskName).toBeTruthy();

  //If the user types into it, it must update
  fireEvent.change(taskName, { target: { value: 'New Task' } });
  expect(taskName.value).toBe('New Task');

  //2. sub tasks
  //There must be a place to enter sub tasks
  const subtasks = utils.queryByPlaceholderText(
    'Enter tasks in comma separated list...'
  );
  expect(subtasks).toBeTruthy();

  //user must be able to enter value and change the value in that area
  fireEvent.change(subtasks, { target: { value: 'one, two, three' } });
  expect(subtasks.value).toBe('one, two, three');

  //3.Labels
  //There must be a place to enter labels or tags
  const myLabels = utils.queryByPlaceholderText(
    'Enter labels beginning with #...'
  );
  expect(myLabels).toBeTruthy();

  //user must be able to be enter labels and change its value
  fireEvent.change(myLabels, { target: { value: '#urgent #completed' } });
  expect(myLabels.value).toBe('#urgent #completed');

  //4.Cancel button must be there
  //check cancel button exists
  const cancelBtn = utils.queryByText('Cancel');
  expect(cancelBtn).toBeTruthy();

  //now check that cancel button routes back to the home page
  fireEvent.click(cancelBtn);
  expect(utils.queryByText('Things to do')).toBeTruthy();
});
