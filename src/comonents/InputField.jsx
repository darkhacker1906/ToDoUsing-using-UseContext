import React, { useContext } from "react";
import Button from "./Button";
import { MyNoteContext } from "../context/NoteState";
import "./InputField.css";

function InputField() {
  const { inputText, handleChange } = useContext(MyNoteContext);
  return (
    <div className="input_div">
      <input
        className="text_todo"
        type="text"
        placeholder="Enter your text"
        value={inputText}
        onChange={handleChange}
      />
      <Button />
    </div>
  );
}

export default InputField;
