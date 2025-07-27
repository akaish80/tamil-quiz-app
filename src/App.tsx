import React from 'react';
import Quiz from './components/Quiz';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tamil Letters Quiz</h1>
      <Quiz />
    </div>
  );
}

export default App;