import React, { useContext } from "react";
import { MyNoteContext } from "../../context/ToDoState";
import "./TablePage.css";
import CheckBox from "../checkbox/CheckBox";

function TablePage() {
  var {
    todosList,
    delete_Click,
    edit_Click,
    handleCheckBox,
    filterType,
  } = useContext(MyNoteContext);
  const sortedTodos = todosList.filter((item) => {
    if (filterType === "all") {
      return true;
    } else if (filterType === "completed") {
      return item.checked;
    } else if (filterType === "incomplete") {
      return !item.checked;
    }
    return true;
  });

  return (
    <>
      <table id="todos">
        <tbody>
          {sortedTodos.map((item) => (
            <tr key={item.id}>
              <div className="row_div">
                <td>
                  <div className="check_div">
                    {" "}
                    <CheckBox
                      checked={item.checked}
                      checkBoxClick={() => handleCheckBox(item.id)}
                    />
                  </div>
                  <div className="main_div">{item.name}</div>
                </td>
                <div className="icon_div">
                  <div className="delete_icon">
                    <i
                      className="material-icons"
                      onClick={() => delete_Click(item.id)}
                    >
                      delete
                    </i>
                  </div>
                  <div>
                    <i
                      className="fa-regular fa-pen-to-square"
                      onClick={() => edit_Click(item.id)}
                    ></i>
                  </div>
                  {item.checked && <p className="para">Completed</p>}
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TablePage;
