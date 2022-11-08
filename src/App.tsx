import React from 'react';
import './App.css';
import { useAuth } from './context/auth-context';
import { AuthenticatedApp } from './views/authenticated_app';
import { UnauthenticatedApp } from './views/unanthenticated_app';

function App() {
  const { user } = useAuth();
  return <div className='App'>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
}

export default App;
