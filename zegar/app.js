class App extends React.Component {
    state = {
        clock: true
    }

    handleClick = () => {
        this.setState((prevState) => ({
            clock: !prevState.clock
        }))
    }

    render() {
        return (
            <div>
                {this.state.clock && <Clock/>}
                <SwitchButton active={this.state.clock} click={this.handleClick}/>
            </div>
        )
    }
} 

const SwitchButton = props => {
    return (
        <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
    )
}

class Clock extends React.Component {
    interval = ""

    state = { 
        czas: this.getTime()
    } 

    getTime() {
        const currentTime = new Date();

        return (
            {
                hours: (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours(),
                minutes: (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes(),
                seconds: (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds(),
            }
        )
    }

    setTime = () => {
        const czas = this.getTime()
        this.setState({
            czas: czas
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() { 
        const {hours, minutes, seconds} = this.state.czas
        return (
            <div>
                {hours} : {minutes} : {seconds}
            </div>
        )
    }
}
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)