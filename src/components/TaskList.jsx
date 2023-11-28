import { useState } from "react"
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e){
    setInputValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setList([...list, inputValue])
    setInputValue('')
  }

  function handleDelete(index){
    const newItems = [...list];
    newItems.splice(index, 1)
    setList(newItems);
  }


  return (
    <div>
    <h1>Todo List</h1>
    <TaskForm handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue} />
    <ul>
        {list.map((item, index) => (
            <TaskItem item={item} handleDelete={handleDelete} index={index} />
        ))}
    </ul>
</div>
  )
}
