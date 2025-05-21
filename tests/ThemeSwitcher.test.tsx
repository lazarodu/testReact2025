import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import ThemeSwitcher from '../src/components/ThemeSwitcher';
import { describe, expect, it } from 'vitest';

function renderWithProvider(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('ThemeSwitcher', () => {
  it('deve alternar entre tema claro e escuro', () => {
    renderWithProvider(<ThemeSwitcher />);
    expect(screen.getByText(/Tema atual: light/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Alternar tema'));
    expect(screen.getByText(/Tema atual: dark/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Alternar tema'));
    expect(screen.getByText(/Tema atual: light/i)).toBeInTheDocument();
  });
});
