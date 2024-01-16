import React, { useContext } from "react";
import { MyNoteContext } from "../context/NoteState";
import "./TablePage.css";

function TablePage() {
  var { todosList,delete_Click,edit_Click } = useContext(MyNoteContext);
  console.log(todosList,"hbbbbbbbbb");
  return (
    <div>
      <table id="todos">
        <thead>
          <tr>
            <th>Todos</th>
          </tr>
        </thead>
        <tbody>
          {todosList.map((item) => (
            <tr key={item.id}>
              <div className="row_div">
                <td>
                  <div className="main_div">{item.name}</div>
                </td>
                <div className="icon_div">
                  <div className="delete_icon">
                    <i className="material-icons" onClick={()=>delete_Click(item.id)}>delete</i>
                  </div>
                  <div>
                    <i className="fa-regular fa-pen-to-square" onClick={edit_Click(item.id)}></i>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
