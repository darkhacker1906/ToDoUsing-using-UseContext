import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const MyNoteContext = createContext();
const ToDoState = (props) => {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [toggle,setToggle]=useState(true);
  const [isEditItem,setIsEditItem]=useState(null);
  const [checked,setChecked]=useState(false);
  const [filterType,setFilterType]=useState("all");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCancel=(e)=>{
    setToggle(true);
    setInputText("");
    setIsEditItem(null);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(!inputText){
      setInputText("");
      setToggle(true);
    }
   else if (inputText && !toggle && inputText!=="") {
      setTodosList(
        todosList.map((prevItem,a) => {
          console.log(a);
          if (prevItem.id === isEditItem ) {
            return { ...prevItem, name: inputText };
          }
          setToggle(true);
            setIsEditItem(null);
          return prevItem;
        })
      );
    }
    
    else if (inputText.trim() !== "" && toggle) {
      
      const allInputData={ id: uuidv4(), name: inputText};
      setTodosList([...todosList, allInputData]);
      setInputText("");
    }
    setInputText("");
  };

  const delete_Click = (id) => {
    const updatedItems = todosList.filter(item => item.id !== id);
    setTodosList(updatedItems);
    // setInputText("");
  };

  const edit_Click = (id) => {
    let newEditItem = todosList.find((item) => {
      return item.id === id;
  
    });
    setToggle(false);
    setInputText(newEditItem.name);
    setIsEditItem(id);
  };
  const handleCheckBox = (id) => {
    setTodosList((prevTodos) =>
      prevTodos.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e))
    );
   
  };


  const filteritems=()=>{
    switch (filterType){
      case "all":
        return todosList;
      case "completed":
        return todosList.filter((item)=>item.check)
      case "incomplete":
        return todosList.filter((item)=>!item.check)
        default:
          return todosList;
    }
  }
  return (
    <MyNoteContext.Provider
      value={{ inputText, handleChange, handleClick, todosList,delete_Click,edit_Click,toggle,handleCancel,handleCheckBox,checked,filteritems}}
    >
      {props.children}
    </MyNoteContext.Provider>
  );
};

export default ToDoState;
export { MyNoteContext };
