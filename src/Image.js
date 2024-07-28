import React, { useEffect, useState } from "react";
//import axios from "axios";
import OpenAI from "openai";

const ImageApp = () => {
  const [image, setImage] = useState(null);

  const openai = new OpenAI({
    apiKey: "sk-proj-8xgvyDsr7sA0XoHhkyuxT3BlbkFJv7KBCpnTOAICh5gZ9GwD",
    dangerouslyAllowBrowser: true,
  });

  async function generateImage() {
    try {
      const response = await openai.images.generate({
        prompt:
          "create me an advertisement for a dealership that is selling motorcycles",
        n: 1,
        size: "1024x1024",
      });

      const imageUrl = response.data[0].url;
      console.log(imageUrl);
      setImage(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  }

  useEffect(() => {
    generateImage();
  }, []);

  // const handleInputChange = (e) => {
  //   setCity(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          // onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>

      {image ? (
        <>
          <p> {image}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default ImageApp;
