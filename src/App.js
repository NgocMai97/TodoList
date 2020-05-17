import React, { useState, useMemo, useEffect } from "react";

import Header from "./components/Header";
import ListTasksTable from "./components/ListTasksTable";
import Control from "./components/Control";

import Container from "react-bootstrap/Container";

import initListTasks from "./mock/state";
import {LIST_TASK_KEY}   from './constants';


function App() {
  let [listTasks, setListTasks] = useState(initListTasks);
  let [orderBy, setOrderBy] = useState("name");
  let [orderDir, setOrderDir] = useState("asc");
  let [searchText, setSearchText] = useState("");

  useEffect(()=>{
    localStorage.setItem(LIST_TASK_KEY ,JSON.stringify(listTasks));
  },[listTasks]);

  function onSelectSort(orderBy, orderDir) {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }
  function onChangleSearchText(searchText) {
    setSearchText(searchText);
    // console.log(searchText);
  }
  function onChangeAddNewTask(data) {
    listTasks.push(data);
    // console.log(listTasks);
    setListTasks([...listTasks]);
  }

  function handleDeleteTask(task, callback) {
    setTimeout(() => {
      let newList = listTasks.filter((o) => o.id !== task.id);
      setListTasks(newList);
      callback && typeof callback === "function" && callback();
    }, 2000);
  }
  let injectedProps = {
    orderBy,
    orderDir,
    searchText,
    onSelectSort,
    onChangeAddNewTask,
    onChangleSearchText,
  };
  const listTasksSearch = useMemo(() => {
    return listTasks.filter((task) => {
      let nameLower = task.name.toLowerCase(),
        queryLower = searchText.toLowerCase();
      return nameLower.indexOf(queryLower) !== -1;
    });
  }, [searchText, listTasks]);

  const listTasksSearchAndSort = useMemo(() => {
    let returnIndex = 1; //default for asc
    if (orderDir === "asc") returnIndex = -1;
    listTasksSearch.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return returnIndex;
      else if (a[orderBy] > b[orderBy]) return -1 * returnIndex;
      return 0;
    });

    return [...listTasksSearch];
  }, [orderBy, orderDir, listTasksSearch]);

  function handleEditTask(item, callback) {
    setTimeout(() => {
      let findIndex = listTasks.findIndex((task)=>{
        return task.id === item.id
      })
      if(findIndex !== -1){
        listTasks[findIndex].name = item.name;
        listTasks[findIndex].level = item.level;
        setListTasks([...listTasks]);

      }
      callback && typeof callback==='function' && callback();
      console.log('edit task',item);
    }, 2000);
  }
  return (
    <Container>
      <Header />
      <Control {...injectedProps} />
      <ListTasksTable
        handleEditTask={handleEditTask}
        listTasks={listTasksSearchAndSort}
        handleDeleteTask={handleDeleteTask}
      />
    </Container>
  );
}

export default App;
