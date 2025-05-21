import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../src/components/Counter';

describe('Componente Counter', () => {
  it('deve renderizar com contador 0', () => {
    render(<Counter />);
    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
  });

  it('deve incrementar o contador ao clicar', () => {
    render(<Counter />);
    const button = screen.getByText('Incrementar');
    fireEvent.click(button);
    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
  });
});

