import React, { useState } from 'react';
import Home from './components/Home';
import Routine from './components/Routine';
import Praise from './components/Praise';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'routine', 'praise'
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const startRoutine = (routineType) => {
    setSelectedRoutine(routineType);
    setCurrentView('routine');
  };

  const completeRoutine = () => {
    setCurrentView('praise');
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedRoutine(null);
  };

  return (
    <>
      {currentView === 'home' && <Home onStart={startRoutine} />}
      {currentView === 'routine' && <Routine routineType={selectedRoutine} onComplete={completeRoutine} onBack={goHome} />}
      {currentView === 'praise' && <Praise onGoHome={goHome} />}
    </>
  );
}

export default App;
