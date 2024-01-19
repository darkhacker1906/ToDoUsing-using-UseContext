import React, { useContext, useState } from "react";
import Inputfield from "../../comonents/inputField/InputField";
import "./homepage.css";
import Button from "../../comonents/button/Button";
import { TodoAppContext } from "../../context/TodoContext";
import TodoTable from "../../comonents/todoTable/TodoTable";

function HomeDashBoard() {
  const {
    toggle,
    handleClick,
    handleCancel,
    todoText,
    setTodoText,
    todosList,
    handleFilter,
    formError
  } = useContext(TodoAppContext);

  const [inputError, setInputError] = useState("");

  const onHandleKeyDown = (e) => {
    if (e.key === "Enter" && todoText.trim() !== "") {
      e.preventDefault();
      handleClick();
    }
  };
  const handleInputChange = (e) => {
    setTodoText(e.target.value);
    setInputError("");
  };

  return (
    <div>
      <div className="home_div">
        <h2>Todo App</h2>

        {/* form starts here */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input_form">
            <Inputfield
              handleKeyDown={onHandleKeyDown}
              handleChange={handleInputChange}
              value={todoText}
              required
            />
            <div className="button_div">
              {toggle ? (
                <Button
                  type="submit"
                  title="Submit"
                  handleButton={handleClick}
                />
              ) : (
                <>
                  <Button
                    type="submit"
                    title="Update"
                    handleButton={handleClick}
                  />
                  <Button
                    type="submit"
                    title="Cancel"
                    handleButton={handleCancel}
                  />
                </>
              )}
              
            </div>
           
          </div>
          {formError && <p  className="error-message">{formError}</p>}
        </form>
        {/* form ends here */}

        {todosList.length > 0 && (
          <div className="list_button">
            <Button title="All" handleButton={() => handleFilter("all")} />
            <Button
              title="Completed"
              handleButton={() => handleFilter("completed")}
            />
            <Button
              title="Incomplete"
              handleButton={() => handleFilter("incomplete")}
            />
          </div>
        )}

        <TodoTable />
      </div>
    </div>
  );
}

export default HomeDashBoard;
