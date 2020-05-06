import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Level } from "../constants";
import { v4 as uuidv4 } from "uuid";

export default class ControlAddClass extends React.Component {
  constructor(props){
    super(props);
    this.state={
      task: {
        name: '',
        level: 0,
      }
    }
  }
  handleChangeTask =(keyField)=>{
    return(
      (e) => {
        // setTask({
        //   ...task,
        //   [keyField]: e.target.value
        // });
        this.setState({
          task: {
            ...task,
            [keyField]: e.target.value
          }
          
        })
        
      }
    )
    
  }
  addTaskShow = () => {
    return document
      .getElementsByClassName("form-add-task")[0]
      .classList.toggle("form-show");
  };
  handleSubmit = () =>{
   
    this.setState({
      task: {
        id:uuidv4,
      }
    })
    this.props.onChangeAddNewTask(this.state.task);
  }
  render() {
    let {addTaskShow, handleChangeTask,handleSubmit} = this;
    let {task} = this.state;
    console.log(task);
    return (
      <>
        <div className="form-group add-task">
          <Button className="btn btn-info btn-block" onClick={addTaskShow}>
            Add Task
          </Button>
        </div>
        <Form className="form-inline justify-content-between form-add-task">
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
              onChange={handleChangeTask("level")}
            >
              {Level.map((o, index) => (
                <option key={o.name + index} value={index}>
                  {o.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              return document
                .getElementsByClassName("form-add-task")[0]
                .classList.remove("form-show");
            }}
          >
            Cancel
          </Button>
        </Form>
      </>
    );
  }
}
