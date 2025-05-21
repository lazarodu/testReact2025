import { useState } from 'react';

export default function GreetingForm({ onGreet }: { onGreet: (name: string) => void }) {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('O nome é obrigatório.');
      return;
    }

    setError('');
    onGreet(name);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Seu nome:</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button type="submit">Enviar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submitted && <p>Olá, {name}!</p>}
    </form>
  );
}
