// wytyczne
// Jeden komponent
// Wersja na 5 zobacz wrozbe, losuje jedna z trzech wrozb
// wersja na 6 - dodaje do trzechistniejacych wrozb kolejna

class App extends React.Component {
    state = { 
        wrozba: null,
        value: ""
     } 

    wrozby = [
        "Pierwsza wróżba",
        "Druga wróżba",
        "Trzecia wróżba"
    ] 

    handleClick = () => {
        this.setState({
            wrozba: this.wrozby[Math.floor(Math.random()*this.wrozby.length)]
        })
    }

    handleClickAdd = () => {
        if(this.state.value.trim() != "") {
            this.wrozby.push(this.state.value)
            alert('Wróżba dodana. Aktualne wróżby: ' + this.wrozby)
            this.setState({
                value: ""
            })
        }
        else
            alert("Podaj coś!")
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() { 

        return (
            <>
                <button onClick={this.handleClick}>Zobacz wróżbę</button><br></br>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleClickAdd}>Dodaj wróżbę</button>
                {this.state.wrozba ? <h1>{this.state.wrozba}</h1> : null}
            </>
        );
    }
}
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)