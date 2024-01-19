import React, { useContext } from "react";
import { MyNoteContext } from "../../context/ToDoState";
import './InputField.css'

function InputField() {
  const { inputText, handleChange,handleClick} = useContext(MyNoteContext);
  
  const onHandleKeyDown=(e)=>{
    if (e.key === "Enter" && inputText.trim() !== "") {
      handleClick();
    }
  }
  return (
    <div className="input_div" >
      <input 
      className="text_todo"
        type="text"
        placeholder="Enter your text"
        value={inputText}
        onChange={handleChange} 
        onKeyDown={onHandleKeyDown}
      />
  
    </div>
  );
}

export default InputField;
