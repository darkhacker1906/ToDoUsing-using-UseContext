import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const MyNoteContext = createContext();
const NoteState = (props) => {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [toggle,setToggle]=useState(true);
  const [isEditItem,setIsEditItem]=useState(null);

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


  const delete_Click = (id) => {
    const updatedItems = todosList.filter(item => item.id !== id);
    setTodosList(updatedItems);
  };

  // const edit_Click=(id)=>{
  // let EditItem=todosList.find(item=>item.id===id);
    
  // }
  // }
  const edit_Click = (id) => {
    let newEditItem = todosList.find((item) => {
      return item.id === id;
    });
    setToggle(false);
    setData(newEditItem.name);
    setIsEditItem(id);
  };

  return (
    <MyNoteContext.Provider
      value={{ inputText, handleChange, handleClick, todosList,delete_Click,edit_Click}}
    >
      {props.children}
    </MyNoteContext.Provider>
  );
};

export default NoteState;
export { MyNoteContext };
