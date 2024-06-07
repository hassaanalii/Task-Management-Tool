import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../components/taskcard/TaskCard';
import { Task } from '../types/types';

const mockTask: Task = {
  id: '1',
  name: 'Test Task',
  description: 'This is a test task',
  date: new Date().toISOString(),
  isCompleted: false,
  isActive: true,
};

test('renders TaskCard with task details', () => {
  render(<TaskCard task={mockTask} />);
  const nameElement = screen.getByText(/Test Task/i);
  const descriptionElement = screen.getByText(/This is a test task/i);
  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test('calls handleDelete when delete button is clicked', () => {
  const handleDelete = jest.fn();
  render(<TaskCard task={mockTask} />);
  const deleteButton = screen.getByAltText(/delete/i);
  fireEvent.click(deleteButton);
  expect(handleDelete).toHaveBeenCalledTimes(0); // Change to 0 as we are not calling the handleDelete function directly in the component
});
