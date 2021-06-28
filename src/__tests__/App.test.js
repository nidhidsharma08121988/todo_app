// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

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
  test('Clicking add-btn must open Add form', () => {
      
  });
});
