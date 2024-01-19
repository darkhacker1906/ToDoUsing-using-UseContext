import React, { useContext, useState } from "react";
import Inputfield from "../../comonents/inputField/InputField";
import TablePage from "../../comonents/tablePage/TablePage";
import "./homepage.css";
import Button from "../../comonents/button/Button";
import { MyNoteContext } from "../../context/ToDoState";

function HomeDashBoard() {
  const {
    toggle,
    handleClick,
    handleCancel,
    inputText,
    setInputText,
    todosList,
    handleFilter,
    formError
  } = useContext(MyNoteContext);

  const [inputError, setInputError] = useState("");

  const onHandleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      e.preventDefault();
      handleClick();
    }
  };
  const handleInputChange = (e) => {
    setInputText(e.target.value);
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
              value={inputText}
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

        <TablePage />
      </div>
    </div>
  );
}

export default HomeDashBoard;
