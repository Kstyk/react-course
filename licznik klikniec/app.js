class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result
    }

    handleMathClick = (type, number) => {
        if(type === "reset") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: 0
            }))
        } else if(type === "sub") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            })) 
        } else if(type === "add") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            })) 
        }
    }

    render() {
        return (
            <>
                {/* <button onClick={() => this.handleMathClick("add", 10)}>+10</button>
                <button onClick={() => this.handleMathClick("add", 1)}>+1</button>
                <button onClick={this.handleMathClick.bind(this, "reset")}>reset</button>
                <button onClick={this.handleMathClick.bind(this, "sub", -1)}>-1</button>
                <button onClick={this.handleMathClick.bind(this, "sub", -10)}>-10</button> */}
                
                
                <MathButton 
                    name="-10"
                    number={-10}
                    type="sub" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="-1"
                    number={-1}
                    type="sub" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="reset"
                    number={0}
                    type="reset" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="1"
                    number={1}
                    type="add" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="10"
                    number={10}
                    type="add" 
                    click={this.handleMathClick}
                />

                {/* <h1>Liczba kliknięć: {this.state.count}</h1>
                <h1>Wynik: {this.state.result}</h1> */}

                <Results 
                    count={this.state.count}
                    result={this.state.result}
                />
            </>
        )
    }
}

const MathButton = (props) => {
    return (
        <>
            <button onClick={() => props.click(props.type, props.number)}>{props.name}</button>
        </>
    )
}

const Results = (props) => {
    return (
        <>
            <h1>Liczba kliknięć: {props.count} {props.count > 10 ? <span>Przeciążenie procesora!</span> : null}</h1>
            <h1>Wynik: {props.result}</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Counter result={10}/>)