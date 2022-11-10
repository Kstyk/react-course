import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    }
  }

  messages = {
    username_incorrect: 'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji',
    email_incorrect: 'Brak @ w emailu',
    password_incorrect: 'Hasło musi mieć 8 znaków',
    accept_incorrect: 'Nie potwierdzona zgoda'
  }

  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;

    if (type === "text" || type === "password" || type === "email") {
      this.setState({
        [name]: e.target.value
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked;

      this.setState({
        [name]: checked
      })
    }
  }

  formValidation = () => {
    //true - ok
    //false - nie ok
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if(this.state.username.length > 10 && this.state.username.indexOf(' ') === -1) {
      username = true
    }

    if(this.state.email.indexOf('@') !== -1) {
      email = true;
    }

    if(this.state.password.length === 8) {
      password = true;
    }

    if(this.state.accept) {
      accept = true;
    }

    if(username && email && password && accept) {
      correct = true;
    }

    return ({
      correct,
      username,
      email,
      password,
      accept
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log("działa")

    const validation = this.formValidation()
    // console.log(validation)

    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        message: 'Formularz został wysłany',

        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        }
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        }
      })
    }
  }

  componentDidUpdate() {
    if(this.state.message !== '') {
      setTimeout(() => this.setState({ message: '' }), 3000)
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoję imię
            <input type="text" name="username" id="user" value={this.state.username} onChange={this.handleChange} />
            <span>{this.state.errors.username && this.messages.username_incorrect}</span>
          </label>
          <label htmlFor="email">Twój email
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
            <span>{this.state.errors.email && this.messages.email_incorrect}</span>
          </label>
          <label htmlFor="password">Twoje hasło
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
            <span>{this.state.errors.password && this.messages.password_incorrect}</span>
          </label>
          <label htmlFor="accept">
            <input type="checkbox" name="accept" id="accept" checked={this.state.accept} onChange={this.handleChange} /> Wyrażam zgodę wszelaką
            <span>{this.state.errors.accept && this.messages.accept_incorrect}</span>
          </label>
          <button>Zapisz się</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default App;
