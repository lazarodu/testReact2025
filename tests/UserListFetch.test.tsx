import { render, screen, waitFor } from '@testing-library/react';
import UserListFetch from '../src/components/UserListFetch';
import { describe, expect, it, vi } from 'vitest';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
  })
) as any;

describe('UserListFetch', () => {
  it('deve exibir usuários após o carregamento', async () => {
    render(<UserListFetch />);

    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });
  });
});
