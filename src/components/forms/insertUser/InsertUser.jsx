import { useState } from "react";

const InsertUser = ({ insertHandler }) => {
  const [input, setInput] = useState({
    id: null,
    name: "",
    gender: "",
    address: "",
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);

    insertHandler({ ...input, id });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="name"
        className="form-input"
        value={input.name}
        name="name"
        onChange={inputHandler}
      />
      <input
        type="text"
        placeholder="gender"
        className="form-input"
        name="gender"
        value={input.gender}
        onChange={inputHandler}
      />
      <input
        type="text"
        placeholder="address"
        className="form-input"
        name="address"
        value={input.address}
        onChange={inputHandler}
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default InsertUser;
