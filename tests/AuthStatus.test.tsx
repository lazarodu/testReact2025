import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider } from '../src/contexts/AuthContext';
import AuthStatus from '../src/components/AuthStatus';
import { describe, expect, it } from 'vitest';

function renderWithProvider(ui: React.ReactElement) {
  return render(<AuthProvider>{ui}</AuthProvider>);
}

describe('AuthStatus', () => {
  it('deve exibir botão de login e fazer login', () => {
    renderWithProvider(<AuthStatus />);
    fireEvent.click(screen.getByText('Entrar'));
    expect(screen.getByText('Bem-vindo, João!')).toBeInTheDocument();
  });

  it('deve permitir logout', () => {
    renderWithProvider(<AuthStatus />);
    fireEvent.click(screen.getByText('Entrar'));
    fireEvent.click(screen.getByText('Sair'));
    expect(screen.getByText('Entrar')).toBeInTheDocument();
  });
});
