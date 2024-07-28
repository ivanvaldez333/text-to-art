import React, { useState } from 'react';
import OpenAI from 'openai';
import './App.css';

function Header() {
  return( 
    <div id="header">
      <h1 id="header-title">IMAGINA</h1>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const openai = new OpenAI({
    apiKey: "YOUR_API_KEY",
    dangerouslyAllowBrowser: true,
  });

  const generateImage = async (prompt) => {
    console.log("Generating image for prompt:", prompt); // Debugging statement
    try {
      const response = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });

      const imageUrl = response.data[0].url;
      console.log("Generated image URL:", imageUrl); // Debugging statement
      setImage(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with prompt:", name); // Debugging statement
    generateImage(name);
  };

  return (
    <>
      <Header />
      <div className="App">
        <br />
        <form onSubmit={handleSubmit}>
          <label id="prompt">How would you like your ad to look like?</label>
          <input 
            id="text-box" 
            type="text" 
            placeholder="Write your prompt here!" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <button type="submit">Submit</button>
        </form>
        {image ? (
          <div>
            <img src={image} alt="Generated Ad" className="generated-image" />
          </div>
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    </>
  );
}

export default App;
