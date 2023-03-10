// packages
import { useState, useEffect } from "react";

// utils
import { createChat, showChat } from "../../utils/api";
import UpdateChat from "../../pages/UpdateChat";

//materialUI imports
import * as React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

export default function Chat({ user }) {
  const [formData, setFormData] = useState({ chat: "" });
  const [showForm, setShowForm] = useState(false);
  const [chats, setChats] = useState([]);
 

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
              <Box
                sx={{
                  p: 1.5,
                  width: 250,
                  border: 10,
                  borderColor: "text.primary",
                }}
              >
                <br />
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
                <Container>
                  <Button
                    color="secondary"
                    variant="contained"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    submit chat
                  </Button>
                </Container>
              </Box>
              <br />
            </form>
          ) : null}

        </div>
        <div>
          <h1>
            <u>Chats</u>
          </h1>

          {chats.map((chat, i) => (
            <Box
              sx={{ p: 3, width: 250, border: 2, borderColor: "text.primary" }}
              key={i}
            >
              <b>{chat.user?.username || "Unknown User"}</b>: {chat.chat}
             
              <UpdateChat chat={chat} getChats={getChats} user={user}/>
            
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );
}
