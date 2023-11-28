import { useState } from "react"

export default function TaskItem({ item, handleDelete, index }) {

  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li key={item} style={{ textDecoration: isChecked ? 'line-through' : 'none', opacity: isChecked ? 0.5 : 1 }}>
      <input type="checkbox" onClick={toggleCheckbox} />
      {item}
      <button onClick={() => handleDelete(index)}> - </button>
    </li>
  )
}
