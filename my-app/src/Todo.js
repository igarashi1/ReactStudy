import React, { useState } from 'react';
import { AddTask } from './AddTask';
import { ShowTasks } from './ShowTasks';
import './Todo.css';

const Todo = () => {
  const [tasks,setTasks] = useState([]);

  return (
    <div>
      <h1>Todoリスト</h1>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default Todo;