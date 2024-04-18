// src/ButtonReturn.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import ButtonReturn from './ButtonReturn';

test('ButtonReturn navigates to /chat when clicked', () => {
  render(
    <Router>
      <ButtonReturn />
    </Router>
  );
  
  // Ensure that the button text is rendered
  expect(screen.getByText('Chat list')).toBeInTheDocument();
  
  // Simulate a click on the button
  fireEvent.click(screen.getByText('Chat list'));
  
  // Check if the navigation occurred
  expect(window.location.pathname).toBe('/chat');
});
