class App extends React.Component {
    state = {
        status: true
    }

    componentDidMount() {
        console.log("Aplikacja zamontowana");
    }

    componentDidUpdate() {
        console.log("Aplikacja zaktualizowana");
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({
                    status: !this.state.status
                })}>Przełącz</button>
                <Child1 status={this.state.status} />
                {this.state.status && <Child2 />}
            </>

        )
    }
}

class Child1 extends React.Component {
    componentDidMount() {
        console.log("Child1 zamontowana");
    }

    componentDidUpdate() {
        console.log("Child1 zaktualizowana");
    }

    render() {
        console.log("Child1 renderowanie");

        return <div>{String(this.props.status)}</div>
    }
}

class Child2 extends React.Component {
    componentDidMount() {
        console.log("Child2 zamontowana");
    }

    componentDidUpdate() {
        console.log("Child2 zaktualizowana");
    }

    componentWillUnmount() {
        console.log("Child2 odmontowany");
    }

    render() {
        console.log("Child2 renderowanie");

        return (
            <div>
                Komponent Child2 zamontowany
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)