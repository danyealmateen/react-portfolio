import "./Form.css";
import { useState } from "react";

function Form() {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Correct! The city I live in is ${city}`);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Quick Quiz</h1>
        <h2>Let's see if u've paid attention</h2>
        <h3>Make sure your answers are correct to unlock the next content</h3>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Where was I born?"
          id="cityInput"
        />
        <input type="text" placeholder="What race is Nelson?" id="raceInput" />
        <input type="text" placeholder="What clears my mind?" id="mindInput" />
        <button type="submit" className="readyBtn">
          Ok, I'm ready!
        </button>
        <button className="resetBtn">No, no, reset!</button>
      </form>
    </div>
  );
}

export default Form;
