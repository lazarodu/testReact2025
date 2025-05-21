import { useFetchUsers } from '../hooks/useFetchUsers';

export default function UserListHook() {
  const { users, loading } = useFetchUsers();

  if (loading) return <p>Carregando...</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
