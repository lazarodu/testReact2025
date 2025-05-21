import { render, screen, fireEvent } from '@testing-library/react';
import UserTable from '../src/components/UserTable';
import { describe, expect, it } from 'vitest';

const mockUsers = [
  { id: 1, name: 'Ana Clara', email: 'ana@example.com' },
  { id: 2, name: 'Bruno Souza', email: 'bruno@example.com' },
  { id: 3, name: 'Carlos Silva', email: 'carlos@example.com' }
];

describe('UserTable', () => {
  it('deve renderizar todos os usuários', () => {
    render(<UserTable users={mockUsers} />);
    expect(screen.getByText('Ana Clara')).toBeInTheDocument();
    expect(screen.getByText('Bruno Souza')).toBeInTheDocument();
    expect(screen.getByText('Carlos Silva')).toBeInTheDocument();
  });

  it('deve filtrar usuários pelo nome', () => {
    render(<UserTable users={mockUsers} />);
    fireEvent.change(screen.getByPlaceholderText('Filtrar por nome'), {
      target: { value: 'bruno' }
    });

    expect(screen.getByText('Bruno Souza')).toBeInTheDocument();
    expect(screen.queryByText('Ana Clara')).not.toBeInTheDocument();
    expect(screen.queryByText('Carlos Silva')).not.toBeInTheDocument();
  });

  it('deve exibir mensagem se nenhum usuário for encontrado', () => {
    render(<UserTable users={mockUsers} />);
    fireEvent.change(screen.getByPlaceholderText('Filtrar por nome'), {
      target: { value: 'xyz' }
    });

    expect(screen.getByText('Nenhum usuário encontrado')).toBeInTheDocument();
  });
});
