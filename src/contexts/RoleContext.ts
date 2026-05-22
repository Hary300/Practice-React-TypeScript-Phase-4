import { createContext } from 'react';

type RoleContextType = {
  name: string;
  role: string;
};

export const RoleContext = createContext<RoleContextType | null>(null);
