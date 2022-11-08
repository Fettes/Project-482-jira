import React from 'react';
import { ProjectList } from './project-list';
import { useAuth } from '../context/auth-context';

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectList />
      <button onClick={logout}>登出</button>
    </div>
  );
};
