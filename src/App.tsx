import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const darkModeEvent = (e: KeyboardEvent): void => {
      if (e.key === 't') {
        document.documentElement.classList.toggle(
          'dark-mode',
        );
      }
    };

    document.addEventListener('keypress', darkModeEvent);

    return () => {
      document.removeEventListener(
        'keypress',
        darkModeEvent,
      );
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <hr />
        <ol>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ol>
        <button type="button">Click me</button>
      </header>
    </div>
  );
};

export default App;
