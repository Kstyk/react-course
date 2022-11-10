// const Dollars = (props) => {
//     return (
//         <div>Wartość w dolarach: {props.cash > 0 ? (props.cash/props.ratio).toFixed(2) : null}</div>
//     )
// }

// const Euros = (props) => {
//     return (
//         <div>Wartość w euro: {props.cash > 0 ? (props.cash/props.ratio).toFixed(2) : null}</div>
//     )
// }

const Cash = (props) => {
    const value = (props.cash / props.ratio * props.price).toFixed(2)
    return (
        <div>{props.title} {props.cash <= 0 ? "" : value}</div>
    )
}

class App extends React.Component {
    state = {
        amount: "",
        ratioDollar: 4.2,
        ratioEuro: 3.8,
        product: "electricity"
    }

    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: 'zloty',
                ratio: 1,
                title: 'Wartość w złotówkach: '
            },
            {
                id: 1,
                name: 'dollar',
                ratio: 3.55,
                title: 'Wartość w dolarach: '
            },
            {
                id: 2,
                name: 'euro',
                ratio: 4.55,
                title: 'Wartość w euro: '
            },
            {
                id: 3,
                name: 'funt',
                ratio: 4.91,
                title: 'Wartość w funtach: '
            },
        ],
        prices: {
            electricity: .51,
            gas: 6.20,
            oranges: 3.51,
        }
    }

    handleChange = (e) => {
        this.setState({
            amount: e.target.value,
        })
    }

    handleSelect = (e) => {
        this.setState({
            product: e.target.value
        })
    }

    insertSuffix(select) {
        if (select === "electricity") return <em>kWh</em>
        else if (select === "gas") return <em>litrów</em>
        else if (select === "oranges") return <em>pomarańczy</em>
    }

    selectPrice = (select) => {
        return this.props.prices[select]
    }

    render() {
        const calculators = this.props.currencies.map(currency => (
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={this.state.amount} price={this.selectPrice(this.state.product)}/>
        ))

        return (
            <>
                <label>Wybierz produkt:
                    <select value={this.state.product} onChange={this.handleSelect}>
                        <option value="">Prąd</option>
                        <option value="gas">Benzyna</option>
                        <option value="oranges">Pomarańcze</option>
                    </select>
                </label><br></br>

                <input type="number" value={this.state.amount} onChange={this.handleChange} />
                {this.insertSuffix(this.state.product)}
                {calculators}
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)