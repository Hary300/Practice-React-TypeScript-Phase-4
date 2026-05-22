import { useState } from 'react';
import { AuthContext } from './AuthContext';
import type { User } from './types';

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isLogin = !!user;

  function login({ name, role }: User) {
    setUser({ name, role });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
