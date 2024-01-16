import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const MyNoteContext = createContext();
const NoteState = (props) => {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = () => {
    if (inputText.trim() !== "") {
      const allInputData={ id: uuidv4(), name: inputText };
      setTodosList([...todosList, allInputData]);
      setInputText("");
    }
    setInputText("");
  };
  console.log(todosList);
const delete_Click=(index)=>{
  const updateditems=(item)=>{
    return index !== item.id;
  }
  setTodosList(updateditems);
}

  return (
    <MyNoteContext.Provider
      value={{ inputText, handleChange, handleClick, todosList,delete_Click }}
    >
      {props.children}
    </MyNoteContext.Provider>
  );
};

export default NoteState;
export { MyNoteContext };
