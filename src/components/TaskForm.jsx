export default function TaskForm({ handleSubmit, handleChange, inputValue }) {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

