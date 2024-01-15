import React, { useContext } from "react";
import ButtonPage from "./ButtonPage";
import { MyNoteContext } from "../context/NoteState";

function InputForm() {
  const { todo, handleChange } = useContext(MyNoteContext);
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <input
        style={{ width: "100%" }}
        type="text"
        placeholder="Enter your text"
        value={todo}
        onChange={handleChange}
      />
      <ButtonPage />
    </div>
  );
}

export default InputForm;
