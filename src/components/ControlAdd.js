import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {Level} from "../constants";
import { v4 as uuidv4 } from 'uuid';

export default function ControlAdd({onChangeAddNewTask}) {
  let [task, setTask]= useState({
    name: '',
    level: 0,
  })
  function handleChangeTask(keyField){
    return(
      (e) => {
      
        setTask({
          ...task,
          [keyField]: e.target.value
        });
        
      }
    )
      
  }
  function handleSubmit(){
  
    let data = {
        id: uuidv4(),
        ...task
    }
   
    onChangeAddNewTask(data);
  }
 
  let addTaskShow = () => {
    return document
      .getElementsByClassName("form-add-task")[0]
      .classList.toggle("form-show");
  };
  return (
    <>
      <div className="form-group add-task">
        <Button className="btn btn-info btn-block" onClick={addTaskShow}>
          Add Task
        </Button>
      </div>
      <Form
        className="form-inline justify-content-between form-add-task"
       
      >
        <Form.Group>
          <Form.Label className="sr-only" htmlFor="label">
            label
          </Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Task Name"
            id="taskName"
            value={task.name}
            onChange={handleChangeTask('name')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="sr-only" htmlFor="label">
            label
          </Form.Label>
          <Form.Control
            name="ds"
            as="select"
            required="required"
            id="taskLevel"
            
            onChange={handleChangeTask('level')}
          >
            {
              Level.map((o, index)=> <option key={o.name + index} value={index}>{o.name}</option> )
            }
           
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        <Button
          variant="secondary"
          onClick={() => {
            return (
              document
              .getElementsByClassName("form-add-task")[0]
              .classList.remove("form-show")
            )
          }}
        >
          Cancel
        </Button>
      </Form>
    </>
  );
}
