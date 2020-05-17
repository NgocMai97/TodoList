import React from "react";

import Table from "react-bootstrap/Table";

import ListTasksItemClass from "./ListTasksItemClass";
import Modal from "./Modal/modal";

class ListTasksTableClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskSelected: null,
      isVisible: false,
    };
  }
  handleSetTaskSelected = (item) => {
    this.setState({
      taskSelected:item,
    })
    //this.props.handleDeleteTask(item);
    // setTaskSelected(null);
  };
  handleTaskDelete = ()=>{
    this.props.handleDeleteTask(this.state.taskSelected);
    this.setState({
      isVisible: false,
    })
  }
  onCancel = () => {
    this.setState({isVisible:false});
  };
  handleModalDelete = ()=>{
    this.setState({
      isVisible: true,
    })
  }

  render() {
    let { ListTask } = this.props;
   
    let injectedProps = {
      title: "Modal title",
      onCancel: this.onCancel,
      isVisible: this.state.isVisible,
     
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
              {ListTask.map((item, index) => {
                return (
                  <ListTasksItemClass
                    item={item}
                    index={index}
                    key={index}
                    handleSetTaskSelected={this.handleSetTaskSelected}
                    handleModalDelete={this.handleModalDelete}
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
}
export default ListTasksTableClass;
