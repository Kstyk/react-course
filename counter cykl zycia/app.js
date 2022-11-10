class Counter extends React.Component {
    state = { 
        result: 1,
        ratio: 2
     } 

    handleMultiplication = () => {
        this.setState((prevState) => ({
            result: prevState.result * prevState.ratio
        }))
    } 

    componentDidUpdate() {
        console.log(this.state)
        if(this.state.result > 1000 && this.state.ratio === 2) {
            this.setState(() => ({
                ratio: 0.5
            }))
        } else if (this.state.result < 1 && this.state.ratio === 0.5) {
            this.setState({
                ratio: 2
            })
        }
    }

    render() { 
        return (
            <div>
                <p>Kalkulator mnozy przez dwa, jesli suma jest mniejszan niz 1000.
                    Po przekroczeniu 1000 kalkulator mnozy przz 0.5 az osiagnie sume mniejsza niz jeden. Wtedy pono
                    wnie zaczyna mnożyc przez dwa.
                </p>
                <button onClick={this.handleMultiplication}>{`Pomnoz przez ${this.state.ratio}`}</button>
                <h1>Wynik: {this.state.result}</h1>
            </div>
        );
    }
}
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Counter/>)