import './App.css';
import React from 'react';


class FormTask extends React.Component {


  constructor(props) {
    super(props)
    this.state  = {taskName: ""}
    this.onTaskAdd = props.onTaskAdd;
  }

  render() {
    return (
      <form onSubmit={(event) => {this.onTaskAdd(this.state.taskName) ; this.setState({taskName: ""}); event.preventDefault()}}>
        <input type="text" value={this.state.taskName} onChange={(e) => this.setState({taskName: e.target.value})} />
        <button type="submit">Agregar tarea</button>
      </form>
    )
  } 
}


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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tasks: ["Alpha", "Bravo", "Charlie"]};
  }

  addTask(name) {
    console.log("Adding task: " + name);
    console.log(this.state)
    this.state.tasks.push(name)
    this.setState({tasks: this.state.tasks});
  }

  removeTask(name) {
    console.log("Removing task: " + name);
    this.setState({tasks: this.state.tasks.filter(t => t !== name)});
  }
  
  render() {
    return (
      <div className="App">
        <FormTask  onTaskAdd={(t) => this.addTask(t)} />
        <TaskList tasks={this.state.tasks} onUpdate={(t) => this.removeTask(t)} />
      </div>
    );
  }
}

export default App;
