import { useEffect } from "react";
import { getPost } from "./API/GetApi";

const App = () => {
  const getData = async () => {
    const res = await getPost();
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return <h1>Curd Operation</h1>;
};

export default App;
