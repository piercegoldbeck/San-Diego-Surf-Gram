// packages
import { useState, useEffect } from "react";

// utils
import { createPost, showPost } from "../../utils/api";
import { deletePost } from "../../utils/api";

//materialUI imports
import * as React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

export default function Post({ user }) {
  const [formData, setFormData] = useState({
    location: "",
    image: "",
    rating: "",
    difficulty: "",
    break_type: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);

  // get post
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
      .then(() => setShowForm(false))
      .finally(() =>
        setFormData({
          location: "",
          image: "",
          rating: "",
          difficulty: "",
          break_type: "",
        })
      );
  }

  // delete post function
  const destroyPost = (postId) => {
    alert("Do you want to delete this post?");
    deletePost(postId).finally(() => getPosts());
  };

  // render JSX
  return (
    <Box>
      <Typography variant="h5" mb={2} mt={2}>
        <u>Check user posts to view possible surf locations in San Diego:</u>
      </Typography>
      <div>
        <div>
          <Container>
            <Button
              onClick={() => {
                setShowForm(!showForm);
              }}
              variant="contained"
            >
              Create A New Post
            </Button>
          </Container>
          <br />
          {showForm ? (
            <form>
              <br />
              <Box
                sx={{
                  p: 2,
                  width: 320,
                  border: 3,
                  borderColor: "text.primary",
                }}
              >
                <Container>
                  <b>Enter information here:</b>
                </Container>
                <br />
                <Container>
                  <u>
                    <b>Surf Location:</b>
                  </u>
                </Container>
                <br />
                <Container>
                  <input
                    name="location"
                    type="text"
                    placeholder="enter surf location"
                    onChange={handleChange}
                    value={formData.location}
                  />
                </Container>
                <br />
                <Container>
                  <u>
                    <b>Image of Surf Location:</b>
                  </u>
                </Container>
                <br />
                <Container>
                  <input
                    name="image"
                    type="text"
                    placeholder="enter image link"
                    onChange={handleChange}
                    value={formData.image}
                  />
                </Container>
                <br />
                <Container>
                  <u>
                    <b>Rating out of 10:</b>
                  </u>
                </Container>
                <br />
                <Container>
                  <input
                    name="rating"
                    type="text"
                    placeholder="enter rating out of 10"
                    onChange={handleChange}
                    value={formData.rating}
                  />
                </Container>
                <br />
                <Container>
                  <u>
                    <b>
                      Level of difficulty ex:(beginner, itermediate, expert)
                    </b>
                  </u>
                </Container>
                <br />
                <Container>
                  <input
                    name="difficulty"
                    type="text"
                    placeholder="enter difficulty"
                    onChange={handleChange}
                    value={formData.difficulty}
                  />
                </Container>
                <br />
                <Container>
                  <u>
                    <b>Break type: (ex:sand, reef, rock)</b>
                  </u>
                </Container>
                <br />
                <Container>
                  <input
                    name="break_type"
                    type="text"
                    placeholder="enter break type"
                    onChange={handleChange}
                    value={formData.break_type}
                  />
                </Container>
                <br />
                <Container>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                  >
                    Submit post
                  </Button>
                </Container>
              </Box>
              <br />
            </form>
          ) : null}
        </div>
        <div>
          <Container>
            <h1>
              <u>Posts from Users</u>
            </h1>
          </Container>
          {posts.map((post, i) => (
            <Box
              sx={{ p: 2, width: 320, border: 3, borderColor: "text.primary" }}
              key={i}
            >
              {" "}
              <div>
                <h1>
                  <b>User: {post.user?.username || "Unknown User"}</b>
                </h1>
              </div>
              <div>
                <b>
                  <u>Surf Location:</u>
                </b>
                <br />
                {post.location}
              </div>
              <br />
              <div class="picture">
                <img src={post.image} width={300} border={5} />
              </div>
              <br />
              <div>
                <b>
                  <u>Rating out of 10:</u>
                </b>
                <br />
                {post.rating}
              </div>
              <div>
                <b>
                  <u>Level of difficulty ex:(beginner, itermediate, expert)</u>
                </b>
                <br />
                {post.difficulty}
              </div>
              <div>
                <b>
                  <u>Break type: (ex:sand, reef, rock)</u>
                </b>
                <br />
                {post.break_type}
              </div>
              <br />
              { user?.username === post.user?.username && (
                <Button
                  id="edit-btn"
                  variant="contained"
                  color="error"
                  onClick={() => destroyPost(post._id)}
                >
                  Delete Post
                </Button>
              )}
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );
}
