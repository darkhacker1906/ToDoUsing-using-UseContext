import React from "react";
import NoteState from "../context/NoteState";
import InputForm from "../comonents/InputForm";

function HomePage() {
  return (
    <div style={{width:"60%",margin:'auto'}}>
      <NoteState>
        <h1 style={{textAlign:"center"}}>ToDo App</h1>
        <InputForm />
      </NoteState>
    </div>
  );
}

export default HomePage;
