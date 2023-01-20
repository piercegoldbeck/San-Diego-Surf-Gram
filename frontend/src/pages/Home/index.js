import { useState } from "react";
import * as React from "react";
//components for app

import Chat from "../../components/Chat";
import Post from "../../components/Post";
//pages for app
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import { getUser } from "../../utils/api";
//materialUI imports
import { Container, Typography, Button, Grid } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//styles for home
import "../../styles.css";

function Home() {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [user, setUser] = useState(null);

  async function getUserFromBacked() {
    await getUser().then((data) => setUser(data.user));
    setLoginStatus(true);
  }
  React.useEffect(() => {
    if (localStorage.token) {
      getUserFromBacked();
    }
  }, []);
  return (
    <div class="App">
      <div class="title">
        <Typography variant="h2">
          SAN DIEGO SURFGRAM
          {isLoggedIn && (
            <div class="logoutButton">
              <Button
                class
                variant="outlined"
                onClick={() => {
                  setLoginStatus(false);
                  localStorage.clear();
                }}
              >
                LogOut
              </Button>
            </div>
          )}
        </Typography>
      </div>
      {isLoggedIn && (
        <div class="info">
          <Grid container>
            <Grid xs={12} md={8} lg={6}>
              <Post user={user} />
            </Grid>
            <Grid xs={12} md={4} lg={6}>
              <Chat isLoggedIn={isLoggedIn} />
            </Grid>
          </Grid>
        </div>
      )}
      {!isLoggedIn && (
        <div class="home">
          <br/>
          <Container>
            <Typography variant="h6">
              Welcome to San Diego SurfGram. This website was specifically
              designed for anyone who would like to chat to others, give
              feedback, and gain an understanding of where the best places are
              to surf in San Diego. We understand that finding the best places
              to surf can be a very difficult task so we created a more
              efficient way to do so. Think of us as the Reddit for surfing lol.
              As always, please respect the fellow members in the community and
              spread positive vibes all the time!
            </Typography>
          </Container>
          <Container>
            <h5>
              In order to Join our local community and get this awesome
              information, you must sign up or log in to an existing account.
            </h5>
          </Container>
          <Container>
            <SignUp
              isLoggedIn={isLoggedIn}
              setLogInStatus={setLoginStatus}
              setUser={setUser}
            />
          </Container>
          <Container>
            <Login
              isLoggedIn={isLoggedIn}
              setLogInStatus={setLoginStatus}
              setUser={setUser}
            />
          </Container>
          <br />

          <Typography variant="h6">
            <u>Connect to San Diego SurfGram</u>
            <Container>
              <nav>
                <ul>
                  <Container>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/pierce-goldbeck-b36a1623b/"
                    >
                      LinkedIn
                    </a>
                  </Container>
                  <Container>
                    <a target="_blank" href="https://github.com/piercegoldbeck">
                      Github
                    </a>
                  </Container>
                  <Container>Phone number: (949)-572-9790</Container>
                  Email: pgoldbeck1103@gmail.com
                </ul>
              </nav>
            </Container>
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Home;
