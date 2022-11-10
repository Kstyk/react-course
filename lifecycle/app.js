class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
        }
        console.log("Wywołać metodę constructor");
    }

    componentWillMount() {  // nie używać!
        console.log("Wywołano ComponentWillMount");
    }

    componentDidMount() {
        console.log("Wywołano ComponentDidMount");
        this.setState({
            number: 1,
        })
    }

    componentDidUpdate() {
        console.log("Wywołano ComponentDidUpdate");
    }

    render() { 
        console.log("Wywołana metoda render");
        return (
            <>
            <Child/>
            </>
        );
    }
}
 
class Child extends React.Component {
    componentDidMount() {
        console.log("Wywołano ComponentDidMount w komponencie Child");
        // this.setState({
        //     number: 1,
        // })
    }

    render () {
        console.log()
        return (
            <h1>Dziecko</h1>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)