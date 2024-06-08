import React, { useState } from 'react';
import { AddTask } from './AddTask';
import { ShowTasks } from './ShowTasks';
import './Todo.css';

const Todo = () => {
  const [tasks,setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedTasks = tasks.map(task =>
      task.id === selectedTask.id ? { ...task, text: editText } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setSelectedTask(null);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditText(selectedTask.text);
    setSelectedTask(null);
  };

  return (
    <div>
      <h1>Todoリスト</h1>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} setTasks={setTasks} handleSelectTask={() => handleSelectTask(e.target.value)} />
      {/*優先順位
      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="1">低</option>
        <option value="2" selected>中</option>
        <option value="3">高</option>
      </select> */}
      {selectedTask && (
        <div>
          <h2>選択されたタスク</h2>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={handleSaveClick}>保存</button>
              <button onClick={handleCancelClick}>キャンセル</button>
            </div>
          ) : (
            <div>
              <p>タスク: {selectedTask.text}</p>
              <button onClick={handleEditClick}>修正</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Todo;
