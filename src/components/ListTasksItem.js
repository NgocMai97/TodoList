import React, { useState } from "react";
import { Level } from "../constants";
export default function ListTasksItem({ item, index,handleSetTaskSelected}) {
    let [level] = useState(Level);
    
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
          <button type="button" className="btn btn-danger" onClick={()=> handleSetTaskSelected(item)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
