import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Umyj podłogę",
        date: '2022-11-18',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Umyj auto",
        date: '2023-11-18',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Umyj tv",
        date: '2024-11-18',
        important: false,
        active: true,
        finishDate: null
      },

    ]
  }

  counter = 4
  
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id)
    
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++

    let tasks = [...this.state.tasks]
    tasks.push(task)

    this.setState({ tasks })

    return true
  }

  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask click={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} status={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
