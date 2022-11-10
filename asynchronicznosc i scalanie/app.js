class Clicker extends React.Component {
    state = { 
        number1: 0,
        number2: 0,
        number3: 0,
     } 

    handleClick = () => {
        this.setState({
            number1: this.state.number1 + 1,
        })
        console.log(this.state.number1 + "w metodzie handleClick")
    } 
    handleClick3 = () => {
        this.setState((state) => ({
            number3: state.number3 + 1,
        }))
        this.setState((state) => ({
            number3: state.number3 + 1,
        }))
        this.setState((state) => ({
            number3: state.number3 + 1,
        }))
        console.log(this.state.number3 + "w metodzie handleClick")
    } 

    handleClick2 = () => {
        this.setState({
            number2: this.state.number2 + 1,
        })
        this.setState({
            number2: this.state.number2 + 1,
        })
        this.setState({
            number2: this.state.number2 + 1,
        })
        console.log(this.state.number2 + "w metodzie handleClick")
    } 

    render() {
        console.log(this.state.number3 + "w render")
        return (
            <div>
                <button onClick={this.handleClick3}>Podbij o 3</button>
                <h1>{this.state.number3}</h1>
            </div>
        );
    }
}
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Clicker/>)