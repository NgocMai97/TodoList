import React from "react";

import Table from 'react-bootstrap/Table';

import ListTasksItemClass from './ListTasksItemClass';

class ListTasksTableClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
          taskSelected: null,
        }
    }
    handleSetTaskSelected = (item) => {
      // this.setState({
      //   taskSelected:item,
      // })
      this.props.handleDeleteTask(item);
     // setTaskSelected(null);
    }
  render(){
      let {ListTask} = this.props;
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
              { ListTask.map((item, index) => {
<<<<<<< HEAD
                  return <ListTasksItemClass item={item} index={index} key={index} handleDeleteTask={this.props.handleDeleteTask}/>
=======
                  return <ListTasksItemClass item={item} index={index} key={index} handleSetTaskSelected={this.handleSetTaskSelected}/>
>>>>>>> 09c1df0fc04e2cd895766efd5c10d048613a9a55
                })

               }
          </tbody>
        </Table>
      </div>
    </>
  );
  }
  
}
export default ListTasksTableClass;