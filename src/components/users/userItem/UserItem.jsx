import { Button } from "../../forms";
import styles from "./styles.module.css";

const { item, delButton } = styles;

const UserItem = ({ user, deleteHandler }) => {
  return (
    <div className={item}>
      <ul>
        <li>name: {user.name}</li>
        <li>gender: {user.gender}</li>
        <li>address: {user.address}</li>
      </ul>
      <Button
        className={delButton}
        variant="danger"
        onClick={() => deleteHandler(user.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default UserItem;
