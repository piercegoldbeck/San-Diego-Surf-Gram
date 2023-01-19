import { useState, useEffect } from "react";
import { updateChat } from "../../utils/api";


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
        <button
          id="edit-btn"
          className="btn btn-primary "
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Edit Chat
        </button>

        {showForm && (
          <div className="edit-form">
            <form onSubmit={handleSubmitUpdateChat}>
              <label className="form-label" htmlFor="chat">
                Chat:
              </label>
              <input
                id="chat"
                type="text"
                onChange={handleChange}
                value={formState.chat}
              />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
