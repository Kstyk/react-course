import React, { Component } from 'react'

class Word extends Component {
    render() { 
        return (
            <li>
                Słowo po angielsku: <strong>{this.props.eng}</strong><br></br>
                Tłumaczenie: <strong>{this.props.pl}</strong>
            </li>
        );
    }
}
 
export default Word;