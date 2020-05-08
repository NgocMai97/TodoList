import React, { useState, useMemo } from 'react';

import Header from './components/Header';
import ListTasksTable from './components/ListTasksTable';
import Control from './components/Control';

import Container from 'react-bootstrap/Container';

import initListTasks from './mock/state';

function App() {
  let [listTasks, setListTasks] = useState(initListTasks);
  let [orderBy, setOrderBy] = useState('name');
  let [orderDir, setOrderDir] = useState('asc');
  let [searchText, setSearchText] = useState('');
  function onSelectSort(orderBy, orderDir){
    setOrderBy(orderBy);
    setOrderDir(orderDir);
    
  }
  function onChangleSearchText(searchText){
    setSearchText(searchText);
    // console.log(searchText);
  }
  function onChangeAddNewTask(data){
    listTasks.push(data);
    // console.log(listTasks);
    setListTasks([...listTasks]);
  }

  function handleDeleteTask(task){
    
    let newList = listTasks.filter(o=> o.name !== task.name);
    setListTasks(newList);
  }
  let injectedProps={
    orderBy,
    orderDir,
    searchText,
    onSelectSort,
    onChangeAddNewTask,
    onChangleSearchText
  }
  const listTasksSearch = useMemo(() => {
    console.log('search run');
      return listTasks.filter(task=> {
        let nameLower = task.name.toLowerCase(),
            queryLower = searchText.toLowerCase();
            return nameLower.indexOf(queryLower) !== -1;
      });
  }, [searchText, listTasks])

  const listTasksSearchAndSort = useMemo(() => {
    console.log('sort run');
    let returnIndex = 1; //default for asc
    if(orderDir === 'asc') returnIndex = -1;
    listTasksSearch.sort((a,b)=>{
      if(a[orderBy] < b[orderBy]) return returnIndex;
      else if(a[orderBy] > b[orderBy] ) return (-1)*returnIndex;
      return 0;
    })
    
    
    return [...listTasksSearch];
  }, [orderBy, orderDir, listTasksSearch])
  return (
    <Container>
      <Header />
      <Control {...injectedProps}/>
      <ListTasksTable listTasks={listTasksSearchAndSort} handleDeleteTask={handleDeleteTask} />
    </Container>
  );
}

export default App;
