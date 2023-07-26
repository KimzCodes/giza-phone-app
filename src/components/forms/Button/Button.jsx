import styles from "./styles.module.css";

const Button = ({ children, onClick, variant, className, style }) => {
  let checkVariant = styles[variant] ? styles[variant] : styles["primary"];
  return (
    <button
      className={`${styles.button} ${checkVariant} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
