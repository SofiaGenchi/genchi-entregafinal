export default function TaskItem({ item, handleDelete, index }) {
  return (
    <li key={item}>
        {item}
        <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  )
}
