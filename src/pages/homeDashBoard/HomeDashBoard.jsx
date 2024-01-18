import React, { useContext } from "react";
import Inputfield from "../../comonents/inputField/InputField";
import TablePage from "../../comonents/tablePage/TablePage";
import "./homepage.css";
import Button from "../../comonents/button/Button";
import { MyNoteContext } from "../../context/ToDoState";

function HomeDashBoard() {
  const { toggle, handleClick, handleCancel, inputText, setInputText,todosList,setFilterType} =
    useContext(MyNoteContext);

  const onHandleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      handleClick();
    }
  };
  const handleInputChange = (e) => {
    // console.log("kjhgfdcxhjmghfgdfd");
    setInputText(e.target.value);
  };
  return (
    <div>
      <div className="home_div">
        <h2>Todo App</h2>

        {/* form starts here */}
        <form>
          <div className="input_form">
            <Inputfield
              handleKeyDown={onHandleKeyDown}
              handleChange={handleInputChange}
              value={inputText}
            />
            <div className="button_div">
              {toggle ? (
                <Button type="submit" title="Submit" handleButton={handleClick} />
              ) : (
                <>
                  <Button type="submit" title="Update" handleButton={handleClick} />
                  <Button type="submit" title="Cancel" handleButton={handleCancel} />
                </>
              )}
            </div>
          </div>
        </form>
        {/* form ends here */}

        {todosList.length>0 &&(
          <div className="list_button" >
          <Button title="All" handleButton={()=>setFilterType("all")}/>
          <Button title="Completed" handleButton={()=>setFilterType("completed")}/>
          <Button title="Incomplete" handleButton={()=>setFilterType("incomplete")}/>
          </div>
        )
          
        }

        <TablePage />
      </div>
    </div>
  );
}

export default HomeDashBoard;
