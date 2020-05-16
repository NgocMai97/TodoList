import React from "react";
import { Level } from "../constants";
export default class ListTasksItemClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            level: Level,
        };
       
    }
   
  render() {
      let {item, index} = this.props;
      let {level} = this.state;
     
    return (
      <>
        <tr>
          <td className="text-center">{index + 1}</td>
          <td>{item.name}</td>
          <td className="text-center">
            <span className={`badge ${level[item.level].class}`}>
              {level[item.level].name}
            </span>
          </td>
          <td>
            <button type="button" className="btn btn-warning">
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
<<<<<<< HEAD
              onClick={
                () => {
                  this.props.handleDeleteTask(item);
                }
                }
=======
              onClick={()=>this.props.handleSetTaskSelected(item)}
>>>>>>> 09c1df0fc04e2cd895766efd5c10d048613a9a55
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}
