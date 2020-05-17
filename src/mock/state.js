import { v4 as uuidv4 } from 'uuid';
import {LIST_TASK_KEY}   from '../constants';
console.log(localStorage);
let listTasks = localStorage.getItem(LIST_TASK_KEY);
if(!listTasks){
    listTasks = []
} else {
    listTasks = JSON.parse(listTasks);
}

// let listTasks = [
//     {
//         id: uuidv4(),
//         name: "A Reactjs",
//         level: 0 //high
//     },
//     {
//         id: uuidv4(),
//         name: "B Javascript",
//         level: 1 //medium
//     },
//     {
//         id: uuidv4(),
//         name: "Lam bt Wordpress",
//         level: 2 //small
//     },
// ]
export default listTasks;