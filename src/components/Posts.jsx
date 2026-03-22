import { useEffect, useState } from "react";
import { getPost } from "../API/GetApi";
import { Post } from "./Post";

export const Posts = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="section-post">
      <ol>
        {data.map((curPost) => {
          return <Post key={curPost.id} curPost={curPost} />;
        })}
      </ol>
    </section>
  );
};
