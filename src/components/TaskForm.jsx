import './TaskForm.css'

export default function TaskForm({ handleSubmit, handleChange, inputValue }) {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button className='btn-17' onClick={handleSubmit}>
          <span className="text-container">
            <span className="text">Add Todo</span>
          </span>
        </button>
    </form>
  )
}

