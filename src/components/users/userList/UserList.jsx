import UserItem from "../userItem/UserItem";

const UserList = ({ users, deleteHandler }) => {
  const usersHandler = users.map((user) => (
    <UserItem user={user} key={user.id} deleteHandler={deleteHandler} />
  ));

  return <div style={{ marginTop: "10px" }}>{usersHandler}</div>;
};

export default UserList;
