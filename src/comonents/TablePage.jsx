import React, { useContext } from "react";
import { MyNoteContext } from "../context/NoteState";
import "./TablePage.css";

function TablePage() {
  var { todosList,delete_Click } = useContext(MyNoteContext);
  return (
    <div>
      <table id="todos">
        <thead>
          <tr>
            <th>Todos</th>
          </tr>
        </thead>
        <tbody>
          {todosList.map((item, index) => (
            <tr key={index}>
              <div className="row_div">
                <td>
                  <div className="main_div">{item.name}</div>
                </td>
                <div className="icon_div">
                  <div className="delete_icon">
                    <i class="material-icons" onClick={delete_Click}>delete</i>
                  </div>
                  <div>
                    <i class="fa-regular fa-pen-to-square"></i>
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
