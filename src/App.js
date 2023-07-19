import { useState } from "react";
import { UserList } from "./components/users";
import { Container } from "./components/layout";
import InsertUser from "./components/forms/insertUser/InsertUser";

const App = () => {
  const [users, setUser] = useState([
    { id: 1, name: "kareem", address: "harem", gender: "male" },
    { id: 2, name: "ahmed", address: "giza", gender: "male" },
    { id: 3, name: "reem", address: "giza", gender: "female" },
  ]);

  const deleteHandler = (id) => {
    const deleteUser = users.filter((el) => el.id !== id);
    setUser(deleteUser);
  };

  const insertHandler = (user) => {
    setUser((prev) => [...prev, user]);
  };

  return (
    <Container>
      <InsertUser insertHandler={insertHandler} />
      <UserList users={users} deleteHandler={deleteHandler} />
    </Container>
  );
};

export default App;
