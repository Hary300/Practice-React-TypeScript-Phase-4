import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import { useAuth } from './contexts/auth/useAuth';
import UserPage from './pages/UserPage';

function App() {
  const { user, isLogin } = useAuth();
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <Link to={'/'}>Home</Link>
        {isLogin ? '' : <Link to={'/login'}>Login</Link>}
        {user && user.role === 'admin' && <Link to={'/admin'}>Admin</Link>}
        {user && user.role === 'user' && <Link to={'/user'}>User</Link>}
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/admin'
          element={
            <ProtectedRoute allowedRole='admin'>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user'
          element={
            <ProtectedRoute allowedRole='user'>
              <UserPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
