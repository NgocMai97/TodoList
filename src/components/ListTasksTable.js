import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import Modal from "./Modal/modal";
import ListTasksItem from "./ListTasksItem";
function ListTasksTable({ listTasks, handleDeleteTask, handleEditTask }) {
  
  let [taskDelete, setTaskDelete] = useState(null);
  let [isVisible, setIsVisible] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  
  function handleSetTaskDelete(item) {
    setTaskDelete(item);
  }
  
  function handleModalDelete() {
    setIsVisible(true);
  }
  function handleTaskDelete(item) {
    if(isLoading) return;
    setIsLoading(true);
    handleDeleteTask && typeof handleDeleteTask==='function' && 
    handleDeleteTask(item, (responseData)=>{
      setIsLoading(false);
      setTaskDelete(null);
      setIsVisible(false);
    });
    
  }
  function onCancel() {
    setIsVisible(false);
  }
  let injectedProps = {
    isLoading,
    taskDelete,
    title: "Modal title",
    onCancel: onCancel,
    isVisible: isVisible,
    handleTaskDelete
  };
  return (
    <>
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <Table hover>
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Task</th>
              <th style={{ width: "20%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "160px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {listTasks.map((item, index) => {
              return (
                <ListTasksItem
                  item={item}
                  index={index}
                  key={index}
                  handleEditTask={handleEditTask}
                  handleModalDelete={handleModalDelete}
                  handleSetTaskDelete={handleSetTaskDelete}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
      <Modal {...injectedProps}>
        <div>Lorem afaea gag ageag haomll</div>
        <div>Lorem afaea gag ageag haomll</div>
        <div>Lorem afaea gag ageag haomll</div>
      </Modal>
    </>
  );
}
export default ListTasksTable;
