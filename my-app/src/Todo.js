import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [input,setInput] = useState('');
  const [tasks,setTasks] = useState([]);
  const [id,setId] = useState(1);
  const [selectedTask, setSelectedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const addTask = ()=>{
    if(input.trim()){//入力があるかつ空白のみでない場合
      setTasks([...tasks,{id: id,text:input,completed: false}])
      setId(id+1);
    }
  };

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

  return (
    <div>
      <h1>Todoリスト</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        /*  e: イベントオブジェクト。このオブジェクトには、イベントに関する情報が含まれています。
            e.target: イベントが発生した要素（この場合は<input>要素）。
            e.target.value: <input>要素の現在の値。*/
        placeholder="タスクを入力"
      />
      {/*優先順位
      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="1">低</option>
        <option value="2" selected>中</option>
        <option value="3">高</option>
      </select> */}
      <button onClick={addTask}>追加</button>
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
