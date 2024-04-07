import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleGenerateQuote = () => {
    fetchRandomQuote();
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <div className="quote-box">
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
      </div>
      <button onClick={handleGenerateQuote} className="button">
        Generate Quote
      </button>
    </div>
  );
}

export default App;
