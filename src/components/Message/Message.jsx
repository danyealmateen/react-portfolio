import "./Message.css";

function Message({ message }) {
  return (
    <div className="messages">
      <h1>{message}</h1>
    </div>
  );
}

export default Message;
