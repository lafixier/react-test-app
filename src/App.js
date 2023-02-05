import "./App.css";


function Icon(props){
  return (
    <img className="icon" src={props.src} alt="icon"/>
  )
}

function Name(props){
  return (
    <strong>{props.name}</strong>
  )
}

function Id(props){
  return (
    <span>@{props.id}</span>
  )
}

function User(props){
  return (
    <div>
      <Icon src={props.user.iconUrl} />
      <Name name={props.user.name} />
      <Id id={props.user.id} />
    </div>
  )
}

function Note(props) {
  return (
    <div>
      <header>
        <User user={props.author} />
      </header>
      <main>
        <p>{props.body}</p>
      </main>
      <footer>
      </footer>
    </div>
  );
}

function App() {
  const author = {
    name: "古手",
    id: "lafixier",
    iconUrl: "https://github.com/lafixier.png"
  }
  const content = "React完全に理解した"
  return (
    <div className="App">
      <Note
        author={author}
        content={content}
      />
    </div>
  );
}

export default App;
