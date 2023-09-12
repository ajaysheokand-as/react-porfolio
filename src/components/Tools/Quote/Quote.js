import React, { useEffect, useState } from "react";
import "./Quote.css";

export const Quote = () => {
  const [state, setState] = useState({
    quoteText: "Today is a good day for search a new quote",
    quoteAuthor: "Anonymous",
    count: 0,
    curColor: "",
  });
  useEffect(() => {
    handleNewQuote();
  }, []);
  const getNewQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        // console.log("This is datra", data, data.lenthg)
        const index = Math.floor(Math.random() * data.length);
        setState({
          quoteText: data[index].text,
          quoteAuthor: data[index].author.split(", type.fit").join(''),
        });
      });
  };
  const handleNewQuote = () => {
    const colors = ["gray", "dark", "green", "purple", "blueish"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    console.log("color", color);
    setState({
      curColor: color,
    });
    getNewQuote();
  };
  return (
    <main id="quote-box">
      {console.log("Class", state.curColor)}
      <div id="quote-content">
        <div id="text">{state.quoteText ? state.quoteText : "Loading..."}</div>
        <div id="author">- {state.quoteAuthor}</div>
      </div>
      <div id="bottom">
        <button onClick={handleNewQuote} id="new-quote">
          New Quote
        </button>
        {/* <p id="new-quote">Submit Your Own </p> */}
        <a
          href={`https://wa.me/?text=` + state.quoteText}
          id="new-quote"
          target="_blank"
        >
          WhatsApp Share
        </a>
      </div>
    </main>
  );
};
