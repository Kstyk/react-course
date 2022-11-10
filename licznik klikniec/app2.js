const Counter = (props) => {
    const [count, setCount] = React.useState(0)
    const [result, setResult] = React.useState(props.result)

    const handleMathClick = (type, number = 1) => {
        if (type === 'sub') {
            setCount(count + 1)
            setResult(result - number)
        } else if (type === 'reset') {
            setCount(count + 1)
            setResult(props.result)
        } else {
            setCount(count + 1)
            setResult(result + number)
        }
    }

    return (
        <>
            <MathButton
                name="-10"
                number="10"
                type="sub"
                click={handleMathClick}
            />
            <MathButton
                name="-1"
                number="1"
                type="sub"
                click={handleMathClick}
            />

            <MathButton
                name="Reset"
                type="reset"
                click={handleMathClick}
            />
            <MathButton
                name="+1"
                number="1"
                type="add"
                click={handleMathClick}
            />
            <MathButton
                name="+10"
                number="10"
                type="add"
                click={handleMathClick}
            />
            <ResultPanel count={count} result={result} />
        </>
    );
}

const MathButton = (props) => {
    const number = parseInt(props.number)

    return (
        <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    )
}

const ResultPanel = (props) => {
    return (
        <>
            <h1>Liczba kliknięć: {props.count}{props.count > 10 ? <span>Przeciążenie procesora</span> : null}</h1>
            <h1>Wynik: {props.result}</h1>
        </>
    )
}

const startValue = 0;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Counter result={startValue} />)