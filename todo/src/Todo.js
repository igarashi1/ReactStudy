import React, { useState } from 'react';
import './App.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {//trim()両端の空白を除く:スペースが入力された場合追加しない
      setTasks([...tasks, { text: input, completed: false }]);//tasksに新しいタスクを追加する
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
        <h1>Todoリスト</h1>
        <hr />
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="タスクを入力"
        />
        <button onClick={addTask}>追加</button>
        <ul>
            {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
                <button onClick={() => toggleComplete(index)}>
                {task.completed ? '未完了' : '完了'}
                </button>
                <button onClick={() => deleteTask(index)}>削除</button>
            </li>
            ))}
        </ul>
    </div>
  );
};

export default Todo;