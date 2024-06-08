import React,{useState} from "react";

export const AlterTask = ({editText,setEditText,selectedTask,setSelectedTask,tasks,setTasks}) =>{
  const [isEditing, setIsEditing] = useState(false);
  

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
  return(
    <>
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
    </>
  );
}