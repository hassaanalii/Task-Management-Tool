import { render, screen } from '@testing-library/react';
import StatusCard from '../components/statuscard/StatusCard';

test('renders StatusCard with title and count', () => {
  render(<StatusCard title="All Tasks" count={5} color="bg-blue-500" />);
  const titleElement = screen.getByText(/All Tasks/i);
  const countElement = screen.getByText(/5/i);
  expect(titleElement).toBeInTheDocument();
  expect(countElement).toBeInTheDocument();
});
