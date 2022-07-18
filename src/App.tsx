import React from 'react';
import './App.css';
import { ProjectList } from 'views/project-list';
import { TsReactTest } from './test/try-use-array';

function App() {
  return (
    <div className='App'>
      <ProjectList />
      <TsReactTest />
    </div>
  );
}

export default App;
