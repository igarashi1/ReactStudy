import React, { useState } from 'react';


export const ShowTasks = ({tasks,setTasks,setEditText,setSelectedTask}) =>{
  
  const handleSelectTask = (e) => {//選択した課題を編集対象とする
    const taskId = parseInt(e.target.value,10);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      setSelectedTask(task);
      setEditText(task.text);
    } else {
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
    <ul>
        {tasks.map((task,index) => (
          <li key={task.id}>
            {task.text}
            <button value={task.id} onClick={handleSelectTask}>編集</button>

            <button onClick={() => handleUpPriority(index)}>△</button>
            <button onClick={() => handleDownPriority(index)}>▽</button>
          </li>
        ))}
      </ul>
  );
}