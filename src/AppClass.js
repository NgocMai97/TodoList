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
            searchText: '',
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
    onChangeSearchText = (searchText) => {
        this.setState({
            searchText: searchText,
        });
       
    }
    listTasksSearch = () =>{
        return this.state.ListTask.filter(task=> {
            let nameLower = task.name.toLowerCase(),
                queryLower = this.state.searchText.toLowerCase();
                return nameLower.indexOf(queryLower) !== -1;
          });
          
    }
    listTasksSearchAndSort = () => {
        let returnIndex = 1; //default for asc
        if(this.state.orderDir === 'asc') returnIndex = -1;
        this.listTasksSearch.sort((a,b)=>{
          if(a[this.state.orderBy] < b[this.state.orderBy]) return returnIndex;
          else if(a[this.state.orderBy] > b[this.state.orderBy] ) return (-1)*returnIndex;
          return 0;
        })
    }
    handleDeleteTask =(task)=>{
        console.log(task);
        let newList = ListTask.filter(o=> o.name !== task.name);
        this.setState({ListTask: [...newList]});
        console.log(newList);
        console.log(ListTask);
        
      }
    render(){
        let {orderBy, orderDir,searchText, ListTask}  = this.state;
        let {onSelectSort,onChangeAddNewTask,onChangeSearchText,handleDeleteTask,listTasksSearch,listTasksSearchAndSort}  = this;
        
        let injectedControl = {
            orderBy, 
            orderDir,
            searchText,
            onSelectSort,
            onChangeAddNewTask,
            onChangeSearchText,
        }
      
        return(
            <Container>
                <HeaderClass />
                <ControlClass {...injectedControl} />
                <ListTasksTableClass ListTask={listTasksSearch()} handleDeleteTask={handleDeleteTask}/>
            </Container>
        )
    }
}
export default AppClass;