import './App.css';
import { useState } from 'react';





function Task(props) {
  let name = props.name;
  let onUpdate = props.onUpdate;

  return (
    <li id={name}><input type="checkbox" onChange={() => onUpdate(name)} />{name}</li>
  )
}

function TaskList(props) {
  let tasks = props.tasks;
  let onUpdate = props.onUpdate;
  return (
    <ul type="none">
      {tasks.map((t,i) => (<Task key={"task-"+i} name={t} onUpdate={onUpdate} />))}
    </ul>
  )  
}

function App() {

  var [tasks, setTasks] = useState(["Alpha", "Bravo", "Charlie"]);

  function removeTask(name) {
    console.log("Removing task: " + name);
    setTasks(tasks.filter(t => t !== name));
  }
  
  return (
    <div className="App">
      <TaskList tasks={tasks} onUpdate={removeTask} />
    </div>
  );
}

export default App;
