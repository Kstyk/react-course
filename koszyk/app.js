class App extends React.Component {
    state = {
        availableProducts: 7,
        shoppingCart: 1,
    }

    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }

    handleAddToCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1,
        })
    }

    orderCart = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCart,
            shoppingCart: 0
        })
    }

    render() {
        const {shoppingCart, availableProducts} = this.state

        return(
            <div>
                <button 
                    disabled={shoppingCart === 0 ? true : false}
                    onClick={this.handleRemoveFromCart}
                >-</button>
                <span style={shoppingCart === 0 ? { 
                    opacity: 0.3
                 } : {}}> {shoppingCart} </span>
                <button 
                    disabled={shoppingCart === availableProducts ? true : false}
                    onClick={this.handleAddToCart}
                >+</button>
                {shoppingCart > 0 && <button onClick={this.orderCart}>Kup</button>}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)