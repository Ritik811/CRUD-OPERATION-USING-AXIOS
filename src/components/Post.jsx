import { deleteData } from "../API/GetApi";

export const Post = ({ curPost, data, setData, handleUpdatePost }) => {
  const { body, title, id } = curPost;
  const handleDeletePost = async (id) => {
    console.log("Delete");
    try {
      const res = await deleteData(id);
      console.log(res);
      if (res.status === 200 || res.status === 204) {
        const updatePostData = data.filter((curPost) => curPost.id !== id);
        setData(updatePostData);
      } else {
        console.log("Bhai delete nhi hua");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <li>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <button onClick={() => handleUpdatePost(curPost)}>Edit</button>
      <button className="btn-delete" onClick={() => handleDeletePost(id)}>
        Delete
      </button>
    </li>
  );
};
