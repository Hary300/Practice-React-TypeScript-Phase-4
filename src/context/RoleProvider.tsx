import { RoleContext } from './RoleContext';

type RoleProviderProps = {
  children: React.ReactNode;
};

export function RoleProvider({ children }: RoleProviderProps) {
  const userRole = {
    name: 'Harry',
    role: 'admin',
  };

  return (
    <RoleContext.Provider value={userRole}>{children}</RoleContext.Provider>
  );
}
