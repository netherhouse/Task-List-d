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
function TaskList() {
  return (
    <ul className="task-list">
      <TaskItem />
    </ul>
  );
}

function TaskItem() {
  return (
    <li className="task-item">
      <div className="task-info">
        <div>
          Title <strong>Medium</strong>
        </div>
        <div className="task-deadline">Due: {new Date().toLocaleStringe()}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button">Complete</button>
        <button className="delete-button">Delete</button>
      </div>
    </li>
  );
}
function CompletedTaskList() {
  return (
    <ul className="completed-task-list">
      <CompletedTaskItem />
    </ul>
  );
}
function CompletedTaskItem() {
  return (
    <li className="completed-task-item">
      <div className="task-info">
        <div>
          Title <strong>Medium</strong>
        </div>
        <div className="task-deadline">Due: {new Date().toLocaleStringe()}</div>
      </div>
      <div className="task-buttons">
        <button className="delete-button">Delete</button>
      </div>
    </li>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: React, JSX, props, useState,
        component composition, conditional rendering, array methods(map,
        filter), event handling.
      </p>
    </footer>
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
        <div className="sort-controls">
          <div className="sort-button">By Date</div>
          <div className="sort-button">By Priority</div>
        </div>
        <TaskList />
      </div>
      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button className="close-button">+</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
