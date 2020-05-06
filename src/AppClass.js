import React from 'react';

import HeaderClass from './components/HeaderClass';
import ControlClass from './components/ControlClass';
import ListTasksTableClass from './components/ListTasksTableClass';

import ListTask from './mock/state';

import Container from 'react-bootstrap/Container';

class AppClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            orderBy: 'name',
            orderDir: 'asc',
            ListTask: ListTask,
        }
        this.onSelectSort = this.onSelectSort.bind();

    }
    onSelectSort = (orderBye, orderDire) =>{
        this.setState({
            orderBy: orderBye,
            orderDir: orderDire,
        })
         
    }
    onChangeAddNewTask = (data)=>{
        ListTask.push(data);
        // console.log(listTasks);
        this.setState({ListTask});
      }
    
    render(){
        let {orderBy, orderDir, ListTask}  = this.state;
        let {onSelectSort,onChangeAddNewTask}  = this;
        let injectedProps = {
            ListTask,
            
        }
        let injectedControl = {
            orderBy, 
            orderDir,
            onSelectSort,
            onChangeAddNewTask,
        }
      
        return(
            <Container>
                 <HeaderClass />
                <ControlClass {...injectedControl} />
                <ListTasksTableClass {...injectedProps}/>
            </Container>
        )
    }
}
export default AppClass;