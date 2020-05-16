import React, { useState } from "react";
import { Level } from "../constants";
export default function ListTasksItem({ item, index,setTaskSelected, handleDeleteTask }) {
    let [level] = useState(Level);
   function _handleDeleteTask(){
    setTaskSelected(item);
    console.log(item);
    handleDeleteTask(item);
   }
  return (
    <>
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span className={`badge ${level[item.level].class}`}>{level[item.level].name}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning">
            Edit
          </button>
          <button type="button" className="btn btn-danger" onClick={_handleDeleteTask}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
