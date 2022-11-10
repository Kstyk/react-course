import React from 'react'

const SwitchButton = (props) => {
    return (
        <button onClick={props.click}>
            {!props.active ? "Start" : "Stop"}
        </button>
    )
}

export default SwitchButton