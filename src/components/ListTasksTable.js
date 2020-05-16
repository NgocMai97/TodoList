import React, { useState } from "react";

import Table from 'react-bootstrap/Table';

import ListTasksItem from './ListTasksItem';
function ListTasksTable({listTasks, handleDeleteTask}) {
  let [taskSelected, setTaskSelected] = useState(null);
  console.log(taskSelected);
  function handleSetTaskSelected(item){
    setTaskSelected(item);
    handleDeleteTask(item);
    setTaskSelected(null);
  }
  return (
    <>
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <Table hover>
          <thead>
            <tr>
              <th style={{width: '10%'}} className="text-center">#</th>
              <th>Task</th>
              <th style={{width: '20%'}} className="text-center">Level</th>
              <th style={{width: '160px'}}>Action</th>
            </tr>
          </thead>
          <tbody>
              { listTasks.map((item, index) => {
                  return <ListTasksItem item={item} index={index} key={index} handleSetTaskSelected={handleSetTaskSelected}/>
                })

               }
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default ListTasksTable;
