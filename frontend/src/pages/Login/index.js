import { useState } from "react";
import { loginToAccount } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function LogIn(props) {
  //states for login page
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });


  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loginToAccount(formState).then((data) => {
      localStorage.token = data.token;
      props.setLogInStatus(true);
      props.setUser(data.user);
    });
    navigate("/");
  };

  return (
    <div>
      <div>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              defaultValue={formState.username}
            />
            <br/>
            <label htmlFor="password">
              <h1></h1>
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              defaultValue={formState.password}
            />
            <Button variant="contained" type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
