import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageComponent from './MessageComponent';

test('renders initial message', () => {
  render(<MessageComponent />);
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
});

test('updates message when button is clicked', () => {
  render(<MessageComponent />);
  fireEvent.click(screen.getByText('Click Me'));
  expect(screen.getByText('Thanks for clicking!')).toBeInTheDocument();
});
