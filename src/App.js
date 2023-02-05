import logo from "./logo.svg";
import "./App.css";

function Logo() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

function Text(props) {
  return <p>{props.text}</p>;
}

function Link(props) {
  return (
    <a
      className="App-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Text text="Edit src/App.js and save to reload." />
        <Link href="https://reactjs.org" text="Learn React" />
      </header>
    </div>
  );
}

export default App;
