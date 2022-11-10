import "./Form.css";
import { useState } from "react";

function Form() {
  const [city, setCity] = useState("");
  const [race, setRace] = useState("");
  const [clear, setClear] = useState("");
  const inputData = [];

  const handleSubmit = (event) => {
    event.preventDefault();

    inputData.push(city, race, clear);
    console.log(inputData);

    if (
      inputData[0] === "malmo" &&
      inputData[1] === "chihuahua" &&
      inputData[2] === "driving"
    ) {
      console.log("Good job - new content unlocked!");
    } else {
      console.log("You failed somewhere!");
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="quizHeader">Quick Quiz</h1>
        <h3>To unlock the next content</h3>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Where was I born?"
          id="cityInput"
        />
        <input
          value={race}
          onChange={(e) => setRace(e.target.value)}
          type="text"
          placeholder="What race is Nelson?"
          id="raceInput"
        />
        <input
          value={clear}
          onChange={(e) => setClear(e.target.value)}
          type="text"
          placeholder="What clears my mind?"
          id="mindInput"
        />
        <button type="submit" className="readyBtn">
          Submit <i className="fa-solid fa-circle-check"></i>
        </button>
        <button className="resetBtn">
          Reset <i className="fa-solid fa-trash-arrow-up"></i>
        </button>
      </form>
    </div>
  );
}

export default Form;
