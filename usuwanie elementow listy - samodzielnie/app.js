//dwa komponenty rodzica i dziecka

const Person = (props) => {
    return (
        <li>
            {props.name}
            <button onClick={props.click}>Usuń</button>
        </li>
    )
}

class List extends React.Component {
    state = {
        kids: [
            { id: 1, name: "Jan K." },
            { id: 2, name: "Piotr C." },
            { id: 3, name: "Marysia W." },
            { id: 4, name: "John S." }
        ]
    }

    handleDelete = (id) => {
        // console.log(id)

        const kids = [...this.state.kids]
        const index = kids.findIndex(x => x.id === id)
        // console.log(index)

        kids.splice(index, 1)

        this.setState({
            kids
        })
    }

    render() {

        const { kids } = this.state

        return (
            kids.length > 0 ? (
            <ul>
                {kids.map(el =>
                    <Person key={el.id} id={el.id} name={el.name} click={() => this.handleDelete(el.id)}/>
                )}
            </ul>
            ) : null
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<List />)