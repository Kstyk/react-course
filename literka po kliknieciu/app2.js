const App = () => {
    const [text, setText] = React.useState('')

    const handleOnClick = () => {
        const letter = 'a'
        setText(text + letter)
    }

    return (
        <>
            <button onClick={handleOnClick}>Dodaj "A"</button>
            <h1>{text}</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)