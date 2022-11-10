const App = () => {
    const [counter, setCounter] = React.useState(0)

    return (
        <div>
            <h1>Prezentacja stanu w React</h1>
            <p>Wartość stanu: {counter}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)