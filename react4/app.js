class ShoppingList extends React.Component {
    state = {
        items1: 'ogórki',
        items2: 'sok',
        items3: 'piwo'
    }
    
    render() {
        return (
            <div>
                <h1>Lista zakupów</h1>
                <ul>
                    <ItemList name={this.state.items1} example={2+69}/>
                    <ItemList name={this.state.items2}/>
                    <ItemList name={this.state.items3}/>
                </ul>
            </div>
        )
    }
}

class ItemList extends React.Component
 {
     render() {
        return (
            <li>{this.props.name}, {this.props.example}</li>
        )
     }
 }

ReactDOM.render(<ShoppingList/>, document.getElementById('root'))