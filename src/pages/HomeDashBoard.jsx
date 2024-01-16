import React from "react";
import NoteState from "../context/NoteState";
import Inputfield from "../comonents/InputField";
import TablePage from "../comonents/TablePage";
import "./HomeDashBoard.css";

function HomeDashBoard() {
  return (
    <div>
      <div className="home_div">
        <NoteState>
          <h1>ToDo App</h1>
          <Inputfield />
          <TablePage />
        </NoteState>
      </div>
    </div>
  );
}

export default HomeDashBoard;
