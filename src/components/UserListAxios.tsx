import axios from 'axios';
import { useEffect, useState } from 'react';

type User = { id: number; name: string };

export default function UserListAxios() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/users').then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

