// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>
// const NegativeeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
//funkcja globalna poza komponentem
const displayMessage = (isConfirmed, isValidated) => {
    if (isValidated) {
        if (isConfirmed)
            return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />
        else
            return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
    } else {
        return null
    }
}

const ValidationMessage = (props) => {
    const { txt } = props //także destrukturyzacja
    return (
        <p>{txt}</p>
    )
}

const OrderForm = (props) => {
    const {onChange, onSubmit, checked} = props;  //destrukturyzacja
    return (
        <form onSubmit={onSubmit}>
            <input type="checkbox" id="age" onChange={onChange} checked={checked} />
            <label htmlFor="age">Mam conajmniej 16 lat</label><br />
            <button type="submit">Kup bilet</button>
        </form>
    )
}

class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        isValidated: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isValidated: false
        })
    }

    // displayMessage = () => {
    //     if(this.state.isValidated) {
    //         if(this.state.isConfirmed)
    //             return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!"/>
    //         else
    //             return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"/>
    //     } else {
    //         return null
    //     }
    // }

    handleFormValidate = (e) => {
        e.preventDefault()

        if (!this.state.isValidated) {
            this.setState({
                isValidated: true
            })
        }
    }

    render() {
        const { isConfirmed, isValidated } = this.state  //destrukturyzacja

        return (
            <>
                <h1>Kup bilet na horror roku</h1>
                <OrderForm
                    onChange={this.handleCheckboxChange}
                    onSubmit={this.handleFormValidate}
                    checked={isConfirmed}
                />
                {displayMessage(isConfirmed, isValidated)}
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<TicketShop />)