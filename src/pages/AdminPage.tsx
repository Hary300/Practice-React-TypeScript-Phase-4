import { useAuth } from '../contexts/auth/useAuth';

export default function AdminPage() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>Hello {user && user.name} (admin)</h1>
      <button
        onClick={logout}
        className='cursor-pointer px-4 py-1 rounded-lg text-white bg-red-400'
      >
        Logout
      </button>
    </div>
  );
}
