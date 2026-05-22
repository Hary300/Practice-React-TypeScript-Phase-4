import { useState } from 'react';
import { useAuth } from '../contexts/auth/useAuth';
import type { Role } from '../contexts/auth/types';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [nameInput, setNameInput] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(event.target.value);
    setError(false);
  }

  function handleClick(role: Role) {
    if (nameInput === '') {
      setError(true);
      return;
    }

    login({ name: nameInput, role });
    if (role === 'admin') {
      navigate('/admin');
      return;
    }

    navigate('/user');
  }
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4 items-center'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={nameInput}
          onChange={handleChange}
          className={`px-4 py-1 rounded-lg border  ${error ? 'border-red-500' : ''}`}
        />
        {error && <p className='text-red-500'>Please write your name</p>}
      </div>
      <div className='flex gap-4 '>
        <button
          onClick={() => handleClick('admin')}
          className='bg-blue-500 py-1 px-4 rounded-lg text-white cursor-pointer transition duration-100 active:scale-99'
        >
          Login as Admin
        </button>
        <button
          onClick={() => handleClick('user')}
          className='bg-green-500 py-1 px-4 rounded-lg text-white cursor-pointer transition duration-100 active:scale-99'
        >
          Login as User
        </button>
      </div>
    </div>
  );
}
