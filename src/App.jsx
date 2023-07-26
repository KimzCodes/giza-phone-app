import { useState } from "react";
import { UserList } from "./components/users";
import { Container, Modal } from "./components/layout";
import { InsertUser, Button, Input } from "./components/forms";

const App = () => {
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
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
    modalToggleHandler();
  };

  const modalToggleHandler = () => {
    setShowModal(!showModal);
  };

  const userHandler = () => {
    const result = filter
      ? users.filter((user) => user.name.includes(filter))
      : users;
    return result;
  };

  return (
    <>
      <Modal show={showModal} close={modalToggleHandler}>
        <InsertUser insertHandler={insertHandler} />
      </Modal>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        <Button
          style={{ padding: "8px", width: "50%", alignSelf: "center" }}
          onClick={modalToggleHandler}
        >
          Insert New User
        </Button>
        <Input
          placeholder="Filter user"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <UserList users={userHandler()} deleteHandler={deleteHandler} />
      </Container>
    </>
  );
};

export default App;
