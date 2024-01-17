import React, { useContext } from "react";
import Inputfield from "../../comonents/inputField/InputField";
import TablePage from "../../comonents/tablePage/TablePage";
import './homepage.css'
import Button from "../../comonents/button/Button";
import { MyNoteContext } from "../../context/ToDoState";
import ToDoState from "../../context/ToDoState";

function HomeDashBoard() {
  const {toggle,handleClick,handleCancel,edit_Click}=useContext(MyNoteContext);
// console.log(toggle,"  ");
  return (
    <div>
      <div className="home_div">
          <h2>Todo App</h2>
          <div className="input_form">
            <Inputfield />
            <div className="button_div">
       
            {toggle ? (
             <Button title="Submit" handleButton={handleClick}/>
      ) : (
        <>
          <Button title="Update" handleButton={handleClick} />
          <Button title="Cancel" handleButton={handleCancel}/>
        </>
      )}
      </div>
          </div>
          
          <TablePage />

      </div>
    </div>
  );
}

export default HomeDashBoard;
