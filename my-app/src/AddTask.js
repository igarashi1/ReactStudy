import React, { useState } from 'react';

export const AddTask = ({tasks,setTasks})=>{
  const [input,setInput] = useState('');
  const [id,setId] = useState(1);

  const handleOnClick = () =>{
    if(input.trim()){//入力があるかつ空白のみでない場合
      setTasks([...tasks,{id: id,text:input,completed: false}])
      setId(id+1);
    }
  }
  return(
    <>
      <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          /*  e: イベントオブジェクト。このオブジェクトには、イベントに関する情報が含まれています。
              e.target: イベントが発生した要素（この場合は<input>要素）。
              e.target.value: <input>要素の現在の値。*/
          placeholder="タスクを入力"
        />
        <button onClick={handleOnClick}>追加</button>
      </>
  );
};