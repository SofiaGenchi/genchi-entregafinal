import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

import './TaskList.css'

export default function TaskList() {
  const [list, setList] = useState(() => {
    const savedTasks = localStorage.getItem('task');
    if(savedTasks){
      return JSON.parse(savedTasks);
    }else {
      return[];
    }
  });

  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(list));
  }, [list]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, inputValue]);
    setInputValue("");
  }

  function handleDelete(index) {
    const newItems = [...list];
    newItems.splice(index, 1);
    setList(newItems);
  }

  return (
    <div id="taskList">
      <h1>Todo List</h1>
      <div id="formulario">
      <TaskForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      <ul>
        {list.map((item, index) => (
          <TaskItem
            key={item}
            item={item}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
      </div>
      
    </div>
  );
}
