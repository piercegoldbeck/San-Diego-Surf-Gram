// packages
import { useState, useEffect } from "react";
// utils
import { createPost, showPost } from "../../utils/api";

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
    <div>
      <div>
        <button
          onClick={() => {
            setDisplayPosts(!displayPosts);
          }}
        >
          View User Posts
        </button>
      </div>
      {displayPosts ? (
        <div>
          <div>
            <button
              
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Create a User Post
            </button>
            {showForm ? (
              <form>
                <input
                  name="location"
                  type="text"
                  placeholder="enter surf location"
                  onChange={handleChange}
                  value={formData.location}
                />
                 <input
                  name="image"
                  type="text"
                  placeholder="enter image link"
                  onChange={handleChange}
                  value={formData.image}
                />
                 <input
                  name="rating"
                  type="text"
                  placeholder="enter rating out of 10"
                  onChange={handleChange}
                  value={formData.rating}
                />
                 <input
                  name="difficulty"
                  type="text"
                  placeholder="enter difficulty"
                  onChange={handleChange}
                  value={formData.difficulty}
                />
                 <input
                  name="break_type"
                  type="text"
                  placeholder="enter break type"
                  onChange={handleChange}
                  value={formData.break_type}
                />

                <button onClick={handleSubmit}>
                  submit post
                </button>
              </form>
            ) : null}
          </div>
          <div>
            <h1>
              <u>Posts from User</u>
            </h1>
            {console.log(posts)}
            {posts.map((post, i) => (
              <div key={i}>
                {" "}
                {post.user?.username || "Unknown User"}: {post.post}{" "}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}