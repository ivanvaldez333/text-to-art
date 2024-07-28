import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Header() { // This is a component/JSX element
  return( 
    <div id="header">
      <h1 id="header-title">IMAGINA</h1>
    </div>
  );
}

function App() {

  const [name, SetName] = useState(""); // This is a hook

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name);
  }

  return (
    <>
      <Header />
      <div className="App">

        <br></br>

        <form onSubmit={handleSubmit}>
          <label id="prompt">How would you like your ad to look like?</label>
          <input id="text-box" type="text" placeholder="Write your prompt here!" value={name} onChange={(e) => SetName(e.target.value)} />
          <button onClick={() => alert(name)}>Submit</button>
       </form>
      </div>
    </>
  );
};

export default App;