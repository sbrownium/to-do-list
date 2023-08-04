import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first To Do', () => {
  render(<App />);
  const firstTodoText = screen.getByText(/Initial 1/i);
  expect(firstTodoText).toBeInTheDocument();
  const deleteButton = screen.getAllByText(/delete/i);
  expect(deleteButton).toBeInTheDocument();
});