import axios from "axios";

// sign up function
export async function signUp(formData) {
  const { data } = await axios.post(
    "http://localhost:8000/user/signup",
    formData
  );
  return data;
}

//Log in to User Account
export async function loginToAccount(formData) {
  const { data } = await axios.post(
    "http://localhost:8000/user/login",
    formData
  );
  return data;
}

// create a chat
export async function createChat(formData) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  console.log(formData)
  const { data } = await axios.post(
    "http://localhost:8000/chat",
    formData,
    config
  );
  return data;
}
// create a post
export async function createPost(formData) {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.post(
      "http://localhost:8000/post",
      formData,
      config
    );
    return data;
  }

//show chat
export async function showChat() {
  const { data } = await axios.get("http://localhost:8000/chat");
  return data;
}

//show post
export async function showPost() {
    const { data } = await axios.get("http://localhost:8000/post");
    return data;
  }



// update user account
export async function updateUser(userId, formData) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const { data } = await axios.put(
    `http://localhost:8000/user/${userId}`,
    formData,
    config
  );
  return data
}

// delet user account
export async function deleteUser(userId) {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  await axios.delete(`http://localhost:8000/user/${userId}`, config);
}

//getUser
export async function getUser(userid) {
  const { data } = await axios.get(`http://localhost:8000/user/${userid}`);
  return data;
}
