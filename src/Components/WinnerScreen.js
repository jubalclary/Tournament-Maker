import React, {useState} from 'react'

function WinnerScreen (props) {

    const handleClick = () => {
        window.location.reload()
    }
    
    return (
        <div id='winnerscreen'>
            <h2 onClick={() => handleClick()}>{props.winner} is the winner!</h2>
        </div>
    )
}

export default WinnerScreen