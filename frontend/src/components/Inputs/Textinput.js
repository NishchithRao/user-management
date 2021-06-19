import React from "react";
import { useDispatch } from "react-redux";
import formStore from "../../store";
import TextField from "@material-ui/core/TextField";

const Textinput = ({ type, inputType, label, id }) => {
  const formDispatch = useDispatch(formStore);
  return (
    <div>
      <TextField
        id={id}
        type={inputType}
        onChange={({ target }) =>
          formDispatch({ type: type, value: target.value })
        }
        label={label}
        variant="outlined"
      />
    </div>
  );
};

export default Textinput;
