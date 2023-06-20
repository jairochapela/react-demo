import './App.css';

var tasks = ["Alpha", "Bravo", "Charlie"];

function Task(props) {
  let name = props.name;
  return (
    <li><input type="checkbox" />{name}</li>
  )
}

function TaskList(props) {
  let tasks = props.tasks;
  return (
    <ul type="none">
      {tasks.map(t => (<Task name={t}></Task>))}
    </ul>
  )  
}

function App() {
  return (
    <div className="App">
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
