import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Get Request and Read Operation
export const getPost = () => {
  return api.get("/posts");
};

// Post Method and Create Operation
export const postData = (post) => {
  return api.post("/posts", post);
};

// Delete Method and Delete Operation
export const deleteData = (id) => {
  return api.delete(`/posts/${id}`);
};

// put Method and Update Operation

export const updatePost = (id, updateData) => {
  return api.put(`/posts/${id}`, updateData);
};
