import { useState } from "react";
import { signUp } from "../../utils/api";
import { useNavigate } from "react-router-dom";

//materialUI imports
import Button from '@mui/material/Button';
export default function SignUp(props) {
  //states for signUp page
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    signUp(formState).then((data) => {
      localStorage.token = data.token;
      localStorage.user_Id = data.user._id;
      props.setLogInStatus(true);
      props.setUser(data.user);
      console.log(data.user);
    });
    navigate("/home");
  }

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <p>Username:</p>
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="password">
            <p>Password:</p>
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              required
            />
          </label>
          <Button variant="contained" type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}
