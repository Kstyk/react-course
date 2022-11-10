const Item = (props) => {
    return(
        <>
            <h1>Użytkownik {props.user.name}</h1>
            <p>Informacje o uzytkowniku</p>
            <p>Wiek użytkownika: {props.user.age}</p>
            <p>Płeć użytkownika: {props.user.sex}</p>
        </>
    )
}

const data = {
    users: [
        {
            id: 1,
            age: 22,
            name: "Arek",
            sex: "male"
        },
        {
            id: 2,
            age: 32,
            name: "Monika",
            sex: "female"
        },
        {
            id: 3,
            age: 25,
            name: "Janinka",
            sex: "female"
        },
        {
            id: 4,
            age: 25,
            name: "Karol",
            sex: "male"
        },
    ]
}



class ListItems extends React.Component {
    state = {
        select: "all"
    }

    usersList = () => {
        let users = this.props.data.users
        switch(this.state.select) {
            case "all":
                return users.map((user) => <Item user={user} key={user.id}/>)
            case "male":
                users = users.filter(user => user.sex === "male")
                return users.map((user) => <Item user={user} key={user.id}/>)
            case "female":
                users = users.filter(user => user.sex === "female")
                return users.map((user) => <Item user={user} key={user.id}/>)
            default:
                return "coś się zepsuło"
        }
    }

    handleUsersFilter = (option) => {
        this.setState({
            select: option
        })
    }

    render() {
        
        return (
            <>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
                <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
                <button onClick={this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
                {this.usersList()}
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ListItems data={data}/>)