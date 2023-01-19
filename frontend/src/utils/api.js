import axios from "axios";

// sign up function
export async function signUp(formData) {
  const { data } = await axios.post("user/signup", formData);
  return data;
}

//Log in to User Account
export async function loginToAccount(formData) {
  const { data } = await axios.post("user/login", formData);
  return data;
}

// create a chat
export async function createChat(formData) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.post("chat", formData, config);
  return data;
}
// create a post
export async function createPost(formData) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.post("post", formData, config);
  return data;
}

//show chat
export async function showChat() {
  const { data } = await axios.get("chat");
  return data;
}

//show post
export async function showPost() {
  const { data } = await axios.get("post");
  return data;
}

// update a chat
export async function updateChat(chatId, formData) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.put(`chat/${chatId}`, formData, config);
  return data;
}

// delete a post
export async function deletePost(postId) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  await axios.delete(`post/${postId}`, config);
}

//getUser
export async function getUser() {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.get(`user/token`, config);
  return data;
}
