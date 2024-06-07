import { render, screen, fireEvent } from '@testing-library/react';
import TaskModal from '../components/taskmodal/TaskModal';

test('renders TaskModal with input fields and buttons', () => {
  render(<TaskModal isVisible={true} onClose={() => {}} />);
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByText(/Add Task/i);
  const cancelButton = screen.getByText(/Cancel/i);
  expect(nameInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});

test('calls onClose when cancel button is clicked', () => {
  const onClose = jest.fn();
  render(<TaskModal isVisible={true} onClose={onClose} />);
  const cancelButton = screen.getByText(/Cancel/i);
  fireEvent.click(cancelButton);
  expect(onClose).toHaveBeenCalledTimes(1);
});
