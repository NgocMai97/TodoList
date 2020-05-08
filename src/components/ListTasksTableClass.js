import React from "react";

import Table from 'react-bootstrap/Table';

import ListTasksItemClass from './ListTasksItemClass';

class ListTasksTableClass extends React.Component {
    constructor(props){
        super(props);
        
    }
  render(){
      let {ListTask,handleDeleteTask} = this.props;
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
                  return <ListTasksItemClass item={item} index={index} key={index} handleDeleteTask={handleDeleteTask}/>
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