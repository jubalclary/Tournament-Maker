import React from 'react'

function NumParticipantsButton (props) {
    const num = props.participantNum

    const handleClick = () => {

    }

    return (
        <button onClick={handleClick} className='numParticipantsButton'>{num}</button>
    )
}

export default NumParticipantsButton