const Header = () => {
    return (
        <div>
            <h1>Witaj na stronie</h1>
        </div>
    )
}

class Blog extends React.Component {
    render() {
        return (
            <section>
                <h2>
                    Artykuł
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, rem.</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <div>
        <Header/>
        <Blog/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))