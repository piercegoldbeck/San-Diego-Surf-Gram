// packages
import { useState, useEffect } from "react";
// utils
import { createChat, showChat } from "../../utils/api";

//materialUI imports
import * as React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

export default function Chat({ isLoggedIn }) {
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
    <Box>
      <Typography variant="h5" mb={2} mt={2}>
        <u>Check out surf chat below to connect with others:</u>
      </Typography>
      {/* <div>
        <Button
          variant="contained"
          disabled={!isLoggedIn}
          onClick={() => {
            setDisplayChats(!displayChats);
          }}
        >
          SurfChat
        </Button>
      </div>
      <br /> */}

      <div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Make a chat
          </Button>
          <br />
          <br />
          {showForm ? (
            <form>
              <Container>
                <input
                  name="chat"
                  type="text"
                  placeholder="leave a chat here"
                  onChange={handleChange}
                  value={formData.chat}
                />
              </Container>
              <br />
              <Button
                variant="outlined"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                submit chat
              </Button>
              <br />
            </form>
          ) : null}
        </div>
        <div>
          <h1>
            <u>Chats</u>
          </h1>

          {console.log(chats)}

          {chats.map((chat, i) => (
            <Box sx={{ p: 3, width: 250, border: 2, borderColor: "text.primary" }} key={i}>
              {" "}
              {chat.user?.username || "Unknown User"}: {chat.chat}{" "}
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );
}
