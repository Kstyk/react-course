//Przycisk - po kliknięciu dodawana jest litera do tekstu

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: ""
    //     }
    // }

    state = {
        text: "",
        btn: "uruchom"
    }

    handleClick = () => {
        const number = Math.floor(Math.random() * 10)

        // this.setState({
        //     text: this.state.text + letter
        // })

        this.setState(() => ({
              text: this.state.text + number
        }))
    }

    render() {
        const btnName = "Dooodaj"
        return (
            <>
                <button onClick={this.handleClick}>{this.state.btn}</button>
                <PanelResult text={this.state.text}/>
            </>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}



ReactDOM.render(<App btnTitle="Dodaj"/>, document.getElementById('root'))