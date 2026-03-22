import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Get Request and Read Operation
export const getPost = () => {
  return api.get("/posts");
};

// Post Request and Create Operation
export const PostData = (post) => {
  return api.post("/posts", post);
};
