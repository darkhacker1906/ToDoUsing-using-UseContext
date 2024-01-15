import React, { createContext, useState } from "react";
const MyNoteContext = createContext();
const NoteState = (props) => {
  const [todo, setTodo] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = (data) => {
    if (data != "") {
      setArr([...arr, data]);
      setTodo("");
    }
  };

  return (
    <MyNoteContext.Provider value={{ todo, handleChange, handleClick }}>
      {props.children}
    </MyNoteContext.Provider>
  );
};

export default NoteState;
export { MyNoteContext };
