import { useEffect, useState } from "react";
import { postData, updatePost } from "../API/GetApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const isEmpty = Object.keys(updateDataApi).length === 0;

  const showData = () => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  };

  useEffect(() => {
    showData();
  }, [updateDataApi]);

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

  const updatePostData = async () => {
    try {
      const res = await updatePost(updateDataApi.id, addData);
      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curData) => {
            return curData.id === res.data.id ? res.data : curData;
          });
        });
        setAddData({ title: "", body: "" });
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    const action = evt.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
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
        <button type="submit" value={isEmpty ? "Add" : "Edit"}>
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};
