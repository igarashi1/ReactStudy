import React, { useState } from 'react';
import { AlterTask } from './AlterTask';
import { DeteteTask } from './DeleteTask';

export const ShowTasks = ({tasks,setTasks}) =>{
  const [editText, setEditText] = useState('');
  const [selectedTask, setSelectedTask] = useState(null)


  const handleSelectTask = (e) => {//選択した課題を編集対象とする
    const taskId = parseInt(e.target.value,10);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      setSelectedTask(task);
      setEditText(task.text);
    }else {
      setSelectedTask(null);
      setEditText('');
    }
  };

  const handleUpPriority = (index) => {
    if(index == 0) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index-1],updatedTasks[index]] = [updatedTasks[index],updatedTasks[index-1]];
    setTasks(updatedTasks);
  };

  const handleDownPriority = (index) => {
    if(index == tasks.length -1) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index+1],updatedTasks[index]] = [updatedTasks[index],updatedTasks[index+1]];
    setTasks(updatedTasks);
  };
  
  
  return(
    <>
    <ul>
        {tasks.map((task,index) => (
          <li key={task.id}>
            {task.text}
            {task.id}
            {index}
            <button value={task.id} onClick={handleSelectTask}>編集</button>

            <button onClick={() => handleUpPriority(index)}>△</button>
            <button onClick={() => handleDownPriority(index)}>▽</button>
            <DeteteTask tasks={tasks} setTasks={setTasks} id={task.id} />
          </li>
        ))}
    </ul>
    <AlterTask tasks={tasks} editText={editText} selectedTask={selectedTask} setTasks={setTasks} setEditText={setEditText} setSelectedTask={setSelectedTask}/>
    </>
  );
}