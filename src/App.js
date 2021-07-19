import React from 'react';
import Weather from './Weather';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Detroit"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
