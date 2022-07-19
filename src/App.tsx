import React from 'react';
import './App.css';
import { ProjectList } from 'views/project-list';
import { TsReactTest } from './test/try-use-array';
import { Login } from './views/login';

function App() {
  return (
    <div className='App'>
      {/*<ProjectList />*/}
      {/*<TsReactTest />*/}
      <Login />
    </div>
  );
}

export default App;
