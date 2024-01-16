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
    if(!inputText){

    }
    else if (inputText && !toggle) {
      setTodosList(
        todosList.map((prevItem) => {
          if (prevItem.id === isEditItem) {
            return { ...prevItem, name: inputText };
          }
          return prevItem;
        })
      );
    }
    
    else if (inputText.trim() !== "") {
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

  const edit_Click = (id) => {
    let newEditItem = todosList.find((item) => {
      return item.id === id;
  
    });
    console.log(newEditItem);
    setToggle(false);
    setInputText(newEditItem.name);
    setIsEditItem(id);
    // setErrors("");
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
