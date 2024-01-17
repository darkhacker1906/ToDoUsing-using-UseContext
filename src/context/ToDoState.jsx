import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const MyNoteContext = createContext();
const ToDoState = (props) => {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [toggle,setToggle]=useState(true);
  const [isEditItem,setIsEditItem]=useState(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCancel=(e)=>{
    setToggle(true);
    setInputText("");
    setIsEditItem(null);
  }

  const handleClick = () => {
    if(!inputText){
      console.log(inputText,"hhhhhhhh");
    }
    else if (inputText && !toggle) {
    
      setTodosList(
        todosList.map((prevItem) => {
          if (prevItem.id === isEditItem) {
            return { ...prevItem, name: inputText };
          }
          setToggle(true);
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
    setInputText("");
  };

  const edit_Click = (id) => {
    let newEditItem = todosList.find((item) => {
      return item.id === id;
  
    });
    setToggle(false);
    setInputText(newEditItem.name);
    setIsEditItem(id);
  };

  return (
    <MyNoteContext.Provider
      value={{ inputText, handleChange, handleClick, todosList,delete_Click,edit_Click,toggle,handleCancel}}
    >
      {props.children}
    </MyNoteContext.Provider>
  );
};

export default ToDoState;
export { MyNoteContext };
