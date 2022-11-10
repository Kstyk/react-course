import React, { Component } from 'react';

class ButtonFetchUsers extends Component {
    state = {}
    render() {
        const { click } = this.props

        return (
            <>
                <button style={{
                    padding: '10px 20px',
                    border: '2px solid black',
                    backgroundColor: 'white',
                    margin: 20
                }} onClick={click}>Dodaj użytkownika</button>
            </>
        );
    }
}


export default ButtonFetchUsers;