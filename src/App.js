import React, { useState } from "react";
import "./styles.css";

const emoji_db = {
  "🎾": "Tennis",
  "🏐": "Vollyball",
  "🏀": "BasketBall",
  "⚽": "Soccer",
  "🏏": "Cricket",
  "🏓": "Ping Pong"
};

export default function App() {
  const listStyle = {
    display: "inline",
    margin: "0.5rem",
    cursor: "pointer",
    fontSize: "2rem"
  };

  const outputDiv = {
    margin: "1rem 0"
  };

  const [inputText, setText] = useState("");
  function handleClick(event) {
    let value = event.target.value;
    let output_Data = emoji_db[value];
    if (output_Data) {
      setText(output_Data);
    } else {
      setText("Emoji is not available");
    }
  }

  function showInfo(value) {
    setText(emoji_db[value]);
  }

  const emojilist = () => {
    let emoji_keys = Object.keys(emoji_db);
    let emojiList = emoji_keys.map((item, index) => {
      return (
        <li key={index} style={listStyle} onClick={() => showInfo(item)}>
          {item}
        </li>
      );
    });
    return emojiList;
  };

  const displayList = emojilist();

  return (
    <div className="App">
      <h1>FindMoji</h1>
      <input
        style={{ fontSize: "1.5rem" }}
        onChange={handleClick}
        placeholder="Please Enter Emoji"
      />
      <div style={outputDiv}>{inputText}</div>
      <h2>Emoji's we have</h2>
      <ol style={{ listStyleType: "none" }}>{displayList}</ol>
    </div>
  );
}
