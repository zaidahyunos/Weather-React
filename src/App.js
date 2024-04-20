import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather React App</h1>
        <Weather city="Seoul" />
      </header>
    </div>
  );
}

export default App;
