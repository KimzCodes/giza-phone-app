import { useState, useRef } from "react";
import Input from "../Input/Input";

const InsertUser = ({ insertHandler }) => {
  const firstInput = useRef();
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
      <Input
        placeholder="name"
        value={input.name}
        name="name"
        onChange={inputHandler}
        ref={firstInput}
      />
      <Input
        placeholder="gender"
        name="gender"
        value={input.gender}
        onChange={inputHandler}
      />

      <Input
        placeholder="address"
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
