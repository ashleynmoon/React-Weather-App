import React from 'react';
import Background from './Background';
import Weather from './Weather';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
        <div className="container">
         <Weather defaultCity="Detroit"/>
          <Footer />
        </div>
    </div>
  );
}

export default App;
