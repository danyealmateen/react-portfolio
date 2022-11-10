import "./Messages.css";

function Messages(props) {
  return (
    <div className="messages">
      <h1>{props.message}</h1>
    </div>
  );
}

export default Messages;
