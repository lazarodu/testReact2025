import { render, screen, waitFor } from '@testing-library/react';
import UserListHook from '../src/components/UserListHook';
import { describe, expect, it, vi } from 'vitest';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Elias' }])
  })
) as any;

describe('UserListHook', () => {
  it('deve exibir usuários carregados pelo hook', async () => {
    render(<UserListHook />);
    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Elias')).toBeInTheDocument();
    });
  });
});
