import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth/useAuth';
import type { Role } from '../contexts/auth/types';

type ProtectedRouteProps = {
  allowedRole?: Role;
  children: React.ReactNode;
};

export default function ProtectedRoute({
  allowedRole,
  children,
}: ProtectedRouteProps) {
  const { user, isLogin } = useAuth();

  if (!isLogin) {
    return <Navigate to={'/login'} />;
  }

  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to={'/'} />;
  }

  return children;
}
