import styles from "./styles.module.css";

const { item, delBtn } = styles;

const UserItem = ({ user, deleteHandler }) => {
  return (
    <div className={item}>
      <ul>
        <li>name: {user.name}</li>
        <li>gender: {user.gender}</li>
        <li>address: {user.address}</li>
      </ul>
      <div className={delBtn} onClick={() => deleteHandler(user.id)}>
        Delete
      </div>
    </div>
  );
};

export default UserItem;
