export type Role = 'admin' | 'user';

export type User = {
  name: string;
  role: Role;
};

export type AuthContextType = {
  user: User | null;
  isLogin: boolean;
  login: (user: User) => void;
  logout: () => void;
};
