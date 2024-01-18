import React, { useContext } from "react";
import { MyNoteContext } from "../../context/ToDoState";
import "./TablePage.css";
import CheckBox from "../CheckBox";

function TablePage() {
  var { todosList,delete_Click,edit_Click,handleCheckBox} = useContext(MyNoteContext);
  return (
    < >
      <table id="todos">
        <thead>
          <tr>
    
           
          </tr>
        </thead>
        <tbody>
          {todosList.map((item) => (
            <tr key={item.id}>
              <div className="row_div">
                <td>
                  
                  <div className="main_div">{item.name}</div>
                  <CheckBox checked={item.checked} checkBoxClick={() => handleCheckBox(item.id)}/>
                </td>
                <div className="icon_div">
                  <div className="delete_icon">
                    <i className="material-icons" onClick={()=>delete_Click(item.id)}>delete</i>
                  </div>
                  <div>       
                       <i className="fa-regular fa-pen-to-square" onClick={()=>edit_Click(item.id)}></i>
                  </div>
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
