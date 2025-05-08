import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserData from './UserData';

// Mocking the axios module
// This is necessary to avoid making actual API calls during tests
jest.mock('axios', () => ({
  get: jest.fn(),
}));

import axios from 'axios';

test('displays user data after API call', async () => {
  const mockUser = { name: 'John Doe', email: 'john@example.com' };
  axios.get.mockResolvedValueOnce({ data: mockUser });

  render(<UserData />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText(/john doe/i)).toBeInTheDocument());
  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
});
