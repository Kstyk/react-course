const App = () => {
    const [value, setValue] = React.useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        setValue('')
    }

    return (
        <>
            <input type="text" value={value} name="text" id="text" placeholder="wpisz..." onChange={handleChange} />
            <button onClick={handleClick}>Reset</button>
            <h1 className="title">{value.toUpperCase()}</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)