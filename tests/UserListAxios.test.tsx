import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import UserListAxios from '../src/components/UserListAxios';
import axios from 'axios';
vi.mock('axios');
const mockedAxios = vi.mocked(axios.get);

describe('UserListAxios', () => {
  it('deve exibir usuários após o carregamento', async () => {
    mockedAxios.mockResolvedValueOnce({
      data: [
        { id: 1, name: 'Carla' },
        { id: 2, name: 'Diego' }
      ]
    });

    render(<UserListAxios />);

    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Carla')).toBeInTheDocument();
      expect(screen.getByText('Diego')).toBeInTheDocument();
    });
  });
});
