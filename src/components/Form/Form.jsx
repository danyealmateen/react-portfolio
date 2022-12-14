import "./Form.css";
import { useState } from "react";
import Message from "../Message/Message";
import Footer from "../Footer/Footer";

function Form() {
  const [city, setCity] = useState("");
  const [race, setRace] = useState("");
  const [clear, setClear] = useState("");
  const [message, setMessage] = useState("");
  const [opacity, setOpacity] = useState(false);

  const inputData = [];

  let cityName = "malmo";
  let raceName = "chihuahua";
  let driveName = "driving";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city === "" && race === "" && clear === "") {
      setMessage("No cheating! Fill in all the empty options");
      return;
    }

    if (city === cityName && race === raceName && clear === driveName) {
      setOpacity(true);
      setMessage(
        <div>
          <p className="contentUnlockedText">
            [Content unlocked <i class="fa-solid fa-unlock-keyhole"></i>]
          </p>
        </div>
      );
      return;
    }
    setMessage(
      <p className="errorText">
        Wrong. Have you ever seen a <br />
        <span className="drivingText">DRIVING </span>
        <span className="chihuahuaText">CHIHUAHUA </span>
        in <span className="cityText">MALMO? </span>
      </p>
    );

    inputData.push(city, race, clear);
    console.log(inputData);
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="quizHeader">Quick Quiz</h1>
        <h3>Locked content! Fill in the correct answers to proceed.</h3>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          type="text"
          placeholder="What city do I live in?"
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
        {message === "" ? <div></div> : <Message message={message} />}
        {!!opacity && <Footer opacity={opacity} />}
      </form>
    </div>
  );
}

export default Form;
