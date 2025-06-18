import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🪶Quillen Code✒️ </h1>
        <p>
          Where Imagination and Technology take turns holding the quill. 
        </p>
      </header>

      <main className="App-main">
        <div className="book_cover">
          <button className="start-button">Begin writing your tale...</button>
        </div>

        <section className="story_annals">
          <h2>Recall an old tale?</h2>
          <p>Maybe someday...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
