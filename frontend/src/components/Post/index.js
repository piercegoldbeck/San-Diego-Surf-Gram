// packages
import * as React from "react";
import { useState, useEffect } from "react";
// utils
import { createPost, showPost } from "../../utils/api";

//materialUI imports
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Box, Typography } from "@mui/material";

export default function Post() {
  const [formData, setFormData] = useState({ post: "" });
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState(false);

  // get chat
  function getPosts() {
    showPost().then((data) => setPosts(data));
  }

  useEffect(() => {
    getPosts();
  }, []);

  //handles
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createPost(formData)
      .then(() => getPosts())
      .finally(() => setFormData({ post: "" }));
  }

  // render JSX
  return (
    <Box>
      <Typography variant="h5" mb={2} mt={2}>
        <u>Check user posts to view possible surf locations in San Diego:</u>
      </Typography>
      <br />
      <div>
        <div>
          <Button
            onClick={() => {
              setShowForm(!showForm);
            }}
            variant="contained"
          >
            Create A New Post
          </Button>
          <br />
          {showForm ? (
            <form>
              <br />
              <Box
                sx={{
                  p: 2,
                  width: 400,
                  border: 10,
                  borderColor: "text.primary",
                }}
              >
                <Container>
                  <b>Enter information here:</b>
                </Container>
                <Container>
                  <input
                    name="location"
                    type="text"
                    placeholder="enter surf location"
                    onChange={handleChange}
                    value={formData.location}
                  />
                </Container>
                <Container>
                  <input
                    name="image"
                    type="text"
                    placeholder="enter image link"
                    onChange={handleChange}
                    value={formData.image}
                  />
                </Container>
                <Container>
                  <input
                    name="rating"
                    type="text"
                    placeholder="enter rating out of 10"
                    onChange={handleChange}
                    value={formData.rating}
                  />
                </Container>
                <Container>
                  <input
                    name="difficulty"
                    type="text"
                    placeholder="enter difficulty"
                    onChange={handleChange}
                    value={formData.difficulty}
                  />
                </Container>
                <Container>
                  <input
                    name="break_type"
                    type="text"
                    placeholder="enter break type"
                    onChange={handleChange}
                    value={formData.break_type}
                  />
                </Container>
                <Button
                  sx={{ borderColor: "error.main", borderRadius: 1 }}
                  onClick={handleSubmit}
                >
                  Submit post
                </Button>
              </Box>
              <br />
            </form>
          ) : null}
        </div>
        <div>
          <h1>
            <u>Posts from User</u>
          </h1>
          {console.log(posts)}
          {posts.map((post, i) => (
            <Box
              sx={{ p: 2, width: 400, border: 2, borderColor: "text.primary" }}
              key={i}
            >
              {" "}
              <div>
                <h1>
                  <b>User: {post.user?.username || "Unknown User"}</b>
                </h1>
              </div>
              <u>Surf Location</u>
              <div>{post.location}</div>
              <div>
                <img src={post.image} width={400} />
              </div>
              <u>Rating out of 10:</u>
              <div>{post.rating}</div>
              <u>Level of difficulty(ex:beginner, itermediate, expert)</u>
              <div>{post.difficulty}</div>
              <u>Break type: (ex:sand, reef, rock)</u>
              <div>{post.break_type}</div>
              <br />
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );
}
