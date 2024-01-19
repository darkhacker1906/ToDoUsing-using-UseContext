import React, { useContext } from "react";
import {TodoAppContext}  from "../../context/TodoContext";
import './InputField.css'

function InputField() {
  const { todoText, handleChange,handleClick} = useContext(TodoAppContext);
  
  const onHandleKeyDown=(e)=>{
    if (e.key === "Enter" && todoText.trim() !== "") {
      handleClick();
    }
  }
  return (
    <div className="input_div" >
      <input 
      className="text_todo"
        type="text"
        placeholder="Enter your text"
        value={todoText}
        onChange={handleChange} 
        onKeyDown={onHandleKeyDown}
      />
  
    </div>
  );
}

export default InputField;
