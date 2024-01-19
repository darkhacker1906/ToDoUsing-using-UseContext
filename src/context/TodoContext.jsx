import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoAppContext = createContext();
const TodoContext = (props) => {
  const [todoText, setTodoText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editItemId, setEditItemId] = useState(null);
  const [checked, setChecked] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
    setFormError("");
  };

  const handleCancel = (e) => {
    setToggle(true);
    setTodoText("");
    setEditItemId(null);
    setFormError("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      setFormError("Please enter any todo.");
      return;
    } 
    else if (todoText && !toggle ) {
      setTodosList(
        todosList.map((prevItem) => {
          if (prevItem.id === editItemId) {
            return { ...prevItem, name: todoText};
          }

          return prevItem;
        })
      );
      setToggle(true);
      setEditItemId(null);
    } 
    
    else if (todoText.trim() !== "" && toggle) {
      const allInputData = { id: uuidv4(), name: todoText};
      setTodosList([...todosList, allInputData]);
    }
    setTodoText("");
    setFormError("");
  };

  const delete_Click = (id) => {
    const updatedItems = todosList.filter((item) => item.id !== id);
    setTodosList(updatedItems);
  };

  const edit_Click = (id) => {
    let newEditItem = todosList.find((item) => {
      return item.id === id;
    });
    setToggle(false);
    setTodoText(newEditItem.name);
    setEditItemId(id);
  };
  const handleCheckBox = (id) => {
    setTodosList((prevTodos) =>
      prevTodos.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e))
    );
  };
  const handleFilter = (type) => {
    setFilterType(type);
  };

  return (
    <TodoAppContext.Provider
      value={{
        todoText,
        handleChange,
        handleClick,
        todosList,
        delete_Click,
        edit_Click,
        toggle,
        handleCancel,
        handleCheckBox,
        checked,
        filterType,
        setFilterType,
        handleFilter,
        formError,
      }}
    >
      {props.children}
    </TodoAppContext.Provider>
  );
};

export default TodoContext;
export { TodoAppContext };
