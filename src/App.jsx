function TaskForm() {
  return (
    <form action="" className="task-form">
      <input type="text" value={""} placeholder="task title" required />
      <select value="">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="datetime-local" required value="" />
      <button type="submit">add Task</button>
    </form>
  );
}

function App() {
  return (
    <div className="app">
      <div className="task-container">
        <h1>Task list with Priority</h1>
        <button className="close-button">+</button>
        <TaskForm />
      </div>
      <div className="task-container">
        <h2>Tasks</h2>
        <button className="close-button">+</button>
      </div>
      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button className="close-button">+</button>
      </div>
    </div>
  );
}

export default App;
