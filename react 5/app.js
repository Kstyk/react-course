const Title = (props) => {
    return (
        <h1 className="title">{props.value}</h1>
    )
}

class App extends React.Component {
    state = {
        value: ""
    }

    handleInputChange = (e) => {
        console.log("Zawartość w evencie: " + e.target.value);
        console.log("Zawartość value przed setState: " + this.state.value);
        this.setState({
            value: e.target.value
        })
        console.log("Zawartość value po setState: " + this.state.value);

    }

    handleClick = () => {
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <>
                <input value={this.state.value} type="text" onChange={this.handleInputChange} />
                <button onClick={this.handleClick}>Reset</button>
                <Title value={this.state.value.toUpperCase()} />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))