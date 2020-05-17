import React, { useState, useCallback } from "react";
import { Level } from "../constants";
import Form from "react-bootstrap/Form";
import Button from './Button/button';

export default function ListTasksItem({
  item,
  index,
  handleEditTask =()=>{} ,
  handleSetTaskDelete = ()=>{},
  handleModalDelete,
}) {
  let [level] = useState(Level);
  let [taskEdit, setTaskEdit] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  const handleClickDelete = useCallback(() => {
    handleSetTaskDelete(item);
    handleModalDelete();
  }, [handleSetTaskDelete,handleModalDelete, item]);

  const handleClickEdit = useCallback(() => {
    setTaskEdit(item);
    
  }, [item]);

  const handleOnCancelTask = useCallback(() => {
    setTaskEdit(null);
  }, []);

  const handleOnChangeTask = useCallback(
    (keyField) => {
      return (e) => {
        setTaskEdit({
          ...taskEdit,
          [keyField]: e.target.value,
        });
      
      };
    },
    [taskEdit]
    
  );
  const handleSaveEdit = useCallback(
    () => {
      setIsLoading(true);
      typeof handleEditTask==='function' &&
      handleEditTask(taskEdit, ()=>{
        setIsLoading(false);
        setTaskEdit(null);
      })
      
    },
    [setIsLoading, taskEdit],
  )
  return (
    <>
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>
          {/* {item.name} */}
          {!taskEdit ? (
            item.name
          ) : (
            <Form.Group>
              <Form.Label className="sr-only" htmlFor="label">
                label
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Task Name"
                id="taskName"
                value={taskEdit.name}
                onChange={handleOnChangeTask('name')}
              ></Form.Control>
            </Form.Group>
          )}
        </td>
        <td className="text-center">
          {!taskEdit ? (
             <span className={`badge ${level[item.level].class}`}>
            {level[item.level].name}
            </span>
          ) : (
            <span className={`badge ${level[taskEdit.level].class}`}>
              <Form.Group>
                <Form.Label className="sr-only" htmlFor="label">
                  label
                </Form.Label>
                <Form.Control
                  name="ds"
                  as="select"
                  required="required"
                  id="taskLevel"
                  value={taskEdit.level}
                  onChange={handleOnChangeTask('level')}
                >
                  {Level.map((o, index) => (
                    <option key={o.name + index} value={index}>
                      {o.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </span>
          )}
        </td>
        <td>
          {!taskEdit ? (
            <button
              onClick={handleClickEdit}
              type="button"
              className="btn btn-warning"
            >
              Edit
            </button>
          ) : (
            <Button
              loading={isLoading}
              onClick={handleSaveEdit}
              type="button"
              className="btn btn-warning"
            >
              Save
            </Button>
          )}
          {!taskEdit ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClickDelete}
            >
              Delete
            </button>
          ) : (
            <button
              onClick={handleOnCancelTask}
              type="button"
              className="btn btn-info"
            >
              Cancel
            </button>
          )}
        </td>
      </tr>
    </>
  );
}
