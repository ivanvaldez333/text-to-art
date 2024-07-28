import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Header() { // This is a component/JSX element
  return <h1>Adio</h1>;
}

function App() {

  const [name, SetName] = useState(""); // This is a hook

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name);
  }

  return (
    <><Header />
    
    <div className="text-box">

      <br></br>

      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e) => SetName(e.target.value)} />
        <button onClick={() => alert(name)}>Submit</button>
      </form>
    </div></>
  );
}

export default App;