// packages
import { useState, useEffect } from "react";
// utils
import { createChat, showChat } from "../../utils/api";

export default function Chat() {
  const [formData, setFormData] = useState({ chat: "" });
  const [showForm, setShowForm] = useState(false);
  const [chats, setChats] = useState([]);
  const [displayChats, setDisplayChats] = useState(false);

  // get chat
  async function getChats() {
    await showChat().then((data) => setChats(data));
  }

  useEffect(() => {
    getChats();
  }, []);

  //handles
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createChat(formData)
      .then(() => getChats())
      .finally(() => setFormData({ chat: "" }));
  }

  // render JSX
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setDisplayChats(!displayChats);
          }}
        >
          SurfChat
        </button>
      </div>
      {displayChats ? (
        <div>
          <div>
            <button
              
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Leave a chat
            </button>
            {showForm ? (
              <form>
                <input
                  name="chat"
                  type="text"
                  placeholder="leave a chat here"
                  onChange={handleChange}
                  value={formData.chat}
                />

                <button className="btn btn-primary" onClick={handleSubmit}>
                  submit chat
                </button>
              </form>
            ) : null}
          </div>
          <div>
            <h1>
              <u>Chats</u>
            </h1>
            {console.log(chats)}
            {chats.map((chat, i) => (
              <div key={i}>
                {" "}
                {chat.user?.username || "Unknown User"}: {chat.chat}{" "}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
