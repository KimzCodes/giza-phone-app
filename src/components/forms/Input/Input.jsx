import { forwardRef } from "react";

const Input = (props, ref) => {
  return <input type="text" className="form-input" {...props} ref={ref} />;
};

export default forwardRef(Input);
