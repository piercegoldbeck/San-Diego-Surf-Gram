import { useState, useEffect } from "react";
import { updateChat } from "../../utils/api";

//materialUI imports
import * as React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

export default function UpdateChat(prop) {
  // function to reveal edit form
  const [showForm, setShowForm] = useState(false);

  // edit form and changed states
  const [formState, setFormState] = useState({ chat: "" });
  useEffect(() => {
    setFormState(prop.chat);
  }, []);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmitUpdateChat = (event) => {
    event.preventDefault();
    updateChat(prop.chat._id, formState)
      .then(() => setShowForm(false))
      .finally(() => prop.getChats());
  };

  return (
    <div className="display-body">
      <div className="edit">
        <div className="form-btn"></div>
        {prop.user?.username === prop.chat.user?.username && (
          <Button
            variant="contained"
            color="success"
            id="edit-btn"
            className="btn btn-primary "
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Edit Chat?
          </Button>
        )}

        {showForm && (
          <div className="edit-form">
            <Box
              sx={{
                p: 1,
                width: 200,
                border: 5,
                borderColor: "text.primary",
              }}
            >
              <form onSubmit={handleSubmitUpdateChat}>
                <Container>
                  <label className="form-label" htmlFor="chat">
                    <b>Chat:</b>
                  </label>

                  <input
                    id="chat"
                    type="text"
                    onChange={handleChange}
                    value={formState.chat}
                  />
                </Container>

                <br />
                <Container>
                  <Button variant="contained" type="submit">
                    Save New Chat
                  </Button>
                </Container>
              </form>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}
