import { useAuth } from '../contexts/AuthContext';

export default function AuthStatus() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Bem-vindo, {user}!</p>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <button onClick={() => login('João')}>Entrar</button>
      )}
    </div>
  );
}

