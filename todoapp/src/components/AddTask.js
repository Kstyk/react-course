import React, { Component } from 'react'
import './AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleChecked = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleSubmit = () => {

        const {text, checked, date} = this.state
        const add = this.props.click(text,date, checked)

        if(add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }
    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1 

        maxDate = maxDate + "-12-31"

        return (
            <div className="form">
                <input type="text" name="task" id="task" onChange={this.handleText}
                placeholder="Dodaj zadanie..." value={this.state.text}/>
                <input type="checkbox" onChange={this.handleChecked} name="important" id="important" checked={this.state.checked}/>
                <label htmlFor="important">Priorytet</label><br/>
                <label htmlFor="date">Do kiedy zrobić?</label>
                <input type="date"onChange={this.handleDate} name="date" id="date" value={this.state.date} min={this.minDate}  max={maxDate}/><br />
                <button id="submit" onClick={this.handleSubmit}>Dodaj</button>
            </div>
        );
    }
}

export default AddTask;