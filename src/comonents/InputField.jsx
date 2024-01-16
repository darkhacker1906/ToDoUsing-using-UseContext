import React, { useContext } from "react";
import Button from "./Button";
import { MyNoteContext } from "../context/NoteState";
import './InputField.css'

function InputField({handleClick,toggle}) {
  const { inputText, handleChange } = useContext(MyNoteContext);
  console.log(toggle);
  return (
    <div className="input_div" >
      <input 
      className="text_todo"
        type="text"
        placeholder="Enter your text"
        value={inputText}
        onChange={handleChange} 
      />
        {!toggle ? (
        <Button title="Submit" onClick={handleClick} />
      ) : (
        <>
          <Button title="Update" onClick={handleClick} />
          <Button title="Cancel" onClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default InputField;
