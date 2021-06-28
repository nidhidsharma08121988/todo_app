// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react';

// test what is visible on screen
describe('App must display properly', () => {
  test('Must match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('Must have title', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Todo')).toBeTruthy();
  });

  test('Must display menu with link home and About us', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Home')).toBeTruthy();
    expect(queryByText('About us')).toBeTruthy();
  });

  test('Must have Things to do', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Things to do')).toBeTruthy();
  });

  test('Must have add button on screen', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('add-btn')).toBeTruthy();
  });
});

// test the user events produce expected results
describe('Check event interaction', () => {
  //check whether clicking that button displays the Add New Task form
  test('Clicking + button must open Add form', () => {
    const { getByTestId, getByText } = render(<App />);
    const myAddBtn = getByTestId('add-btn');

    fireEvent.click(myAddBtn);

    expect(getByText('Add New Task')).toBeTruthy();
  });

  test('Clicking About us link must display About us page', () => {
    const { getByText, getAllByText } = render(<App />);
    const myAboutLink = getByText('About us');

    fireEvent.click(myAboutLink);

    expect(getAllByText('About us').length).toBeGreaterThan(1);
  });

  test('Clicking the home link must display home page', () => {
    const { getByText } = render(<App />);
    const myHomeLink = getByText('Home');

    fireEvent.click(myHomeLink);

    expect(getByText('Things to do')).toBeTruthy();
  });
});
