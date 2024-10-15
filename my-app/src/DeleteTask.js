export const DeteteTask = ({tasks,setTasks,id}) =>{
  const handleOnClick = () =>{
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks);
  }
  return(
    <button onClick={handleOnClick}>削除</button>
  );
}