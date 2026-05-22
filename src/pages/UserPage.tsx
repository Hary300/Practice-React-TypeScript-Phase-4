import { useAuth } from '../contexts/auth/useAuth';

export default function UserPage() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>this is user page</h1>
      <p>Hello {user && user.name} (user)</p>
      <button
        onClick={logout}
        className='cursor-pointer px-4 py-1 rounded-lg text-white bg-red-400'
      >
        Logout
      </button>
    </div>
  );
}
