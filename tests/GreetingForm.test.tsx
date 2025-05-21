import { render, screen, fireEvent } from '@testing-library/react';
import GreetingForm from '../src/components/GreetingForm';
import { describe, expect, it, vi } from 'vitest';

describe('GreetingForm', () => {
  it('deve renderizar o formulário', () => {
    render(<GreetingForm onGreet={() => { }} />);
    expect(screen.getByLabelText('Seu nome:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('deve chamar onGreet com o nome digitado', () => {
    const mockGreet = vi.fn();
    render(<GreetingForm onGreet={mockGreet} />);

    fireEvent.change(screen.getByPlaceholderText('Digite seu nome'), {
      target: { value: 'Ana' }
    });
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(mockGreet).toHaveBeenCalledWith('Ana');
    expect(screen.getByText('Olá, Ana!')).toBeInTheDocument();
  });

  it('deve exibir mensagem de erro ao tentar enviar nome vazio', () => {
    const mockGreet = vi.fn();
    render(<GreetingForm onGreet={mockGreet} />);

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(screen.getByText('O nome é obrigatório.')).toBeInTheDocument();
    expect(mockGreet).not.toHaveBeenCalled();
    expect(screen.queryByText(/Olá/)).not.toBeInTheDocument();
  });
});
