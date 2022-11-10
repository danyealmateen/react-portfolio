import "./Form.css";
import { useState } from "react";
import Messages from "../Messages/Messages";

function Form() {
  const [city, setCity] = useState("");
  const [race, setRace] = useState("");
  const [clear, setClear] = useState("");
  const [message, setMessage] = useState("");
  const inputData = [];

  let cityName = "malmo".toLowerCase();
  let raceName = "chihuahua".toLowerCase();
  let driveName = "driving".toLowerCase();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city === "" && race === "" && clear === "") {
      setMessage("No cheating! Fill in all the empty options");
      return;
    }

    if (city === cityName && race === raceName && clear === driveName) {
      setMessage(
        <div>
          <p>
            [Content unlocked <i class="fa-solid fa-unlock-keyhole"></i>]
          </p>
        </div>
      );
      return;
    }
    setMessage(<p className="errorText">Failed</p>);

    inputData.push(city, race, clear);
    console.log(inputData);
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="quizHeader">Quick Quiz</h1>
        <h3>Oops, locked content! Fill in the correct answers to proceed.</h3>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          type="text"
          placeholder="Where was I born?"
          id="cityInput"
        />
        <input
          value={race}
          onChange={(e) => setRace(e.target.value.toLowerCase())}
          type="text"
          placeholder="What race is Nelson?"
          id="raceInput"
        />
        <input
          value={clear}
          onChange={(e) => setClear(e.target.value.toLowerCase())}
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
        {message === "" ? <div></div> : <Messages message={message} />}
      </form>
    </div>
  );
}

export default Form;
