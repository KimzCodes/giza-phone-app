import Container from "../container/Container";

import styles from "./styles.module.css";
const { lightBox } = styles;
const Modal = ({ children, show, close }) => {
  return (
    <>
      {show ? (
        <>
          <div className={lightBox} onClick={close}></div>
          <Container
            style={{
              background: "white",
              width: "400px",
              zIndex: 2,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {children}
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Modal;
