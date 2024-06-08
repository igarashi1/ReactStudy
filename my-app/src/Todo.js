import React, { useState } from 'react';
import { AddTask } from './AddTask';
import { ShowTasks } from './ShowTasks';
import './Todo.css';
import { AlterTask } from './AlterTask';

const Todo = () => {
  const [tasks,setTasks] = useState([]);
  const [editText, setEditText] = useState('');
  const [selectedTask, setSelectedTask] = useState(null)


  return (
    <div>
      <h1>Todoリスト</h1>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} setTasks={setTasks} setEditText={setEditText} setSelectedTask={setSelectedTask}/>
      <AlterTask editText={editText} setEditText={setEditText} selectedTask={selectedTask} setSelectedTask={setSelectedTask} tasks={tasks} setTasks={setTasks}/>
      
    </div>
  );
};

export default Todo;
/*優先順位
      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="1">低</option>
        <option value="2" selected>中</option>
        <option value="3">高</option>
      </select> */