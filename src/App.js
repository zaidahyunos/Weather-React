import "./App.css";
import "./Weather.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather React App</h1>
        <Weather />

        <p className="footer">
          This project was coded by{" "}
          <a href="https://github.com/zaidahyunos" className="link">
            Zaidah Yunos
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/zaidahyunos/Weather-React"
            className="link"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://delicate-clafoutis-67edbe.netlify.app/"
            className="link"
          >
            Netlify
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
