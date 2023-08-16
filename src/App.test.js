import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first To Do', () => {
  render(<App />);
  const firstTodoText = screen.getByText(/Initial 1/i);
  expect(firstTodoText).toBeInTheDocument();
  // const deleteButton = screen.getAllByText(/delete/i);
  // expect(deleteButton).toBeInTheDocument();
});
/*
Are things displayed correctly?
Do things behave correctly?

Buttons not working (esp. add & delete)
if click a button is the correct thing displayed

1. test that add button is on the screen
2. put text into add input
3. simulate click on add button
4. test that new todo is in the todo list
*/