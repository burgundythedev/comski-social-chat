import { describe, it, vi, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonReturn from './ButtonReturn';


vi.mock('react-router-dom', async () => {
  const originalModule = await vi.importActual('react-router-dom');
  const mockNavigate = vi.fn(); 
  return {
    ...originalModule,
    useNavigate: () => mockNavigate, 
  };
});

describe('ButtonReturn', () => {
  it('navigates back to "/chat" on button click', async () => {
    const { useNavigate } = await import('react-router-dom');
    const navigate = useNavigate(); 

    render(
      <MemoryRouter>
        <ButtonReturn />
      </MemoryRouter>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith('/chat'); 
  });
});
