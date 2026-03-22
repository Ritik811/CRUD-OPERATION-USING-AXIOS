import { useState } from "react";
import { postData } from "../API/GetApi";

export const Form = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const addPostData = async () => {
    try {
      const res = await postData(addData);

      if (res.status === 201) {
        setData([...data, res.data]);
        setAddData({ title: "", body: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    addPostData();
  };

  const handleInputData = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            placeholder="Add Title"
            autoComplete="off"
            name="title"
            id="title"
            value={addData.title}
            onChange={handleInputData}
          />
        </div>

        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            placeholder="Add Post"
            autoComplete="off"
            name="body"
            id="body"
            value={addData.body}
            onChange={handleInputData}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
