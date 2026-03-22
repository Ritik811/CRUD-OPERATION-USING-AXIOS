export const Post = ({ curPost }) => {
  const { body, title } = curPost;
  return (
    <li>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <button className="">Edit</button>
      <button className="btn-delete">Delete</button>
    </li>
  );
};
