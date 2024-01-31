import React, {useState} from 'react'
import NumParticipantsButton from './NumParticipantsButton'

function NumParticipantsButtonsContainer (props) {
    const [showButtons, setShowButtons] = useState(true)

    const handleClick = () => {
        setShowButtons(false)
    }

    return (
        <div>
            <NumParticipantsButton participantNum='3 - 4' showButton={showButtons} handleClick={handleClick} />
            <NumParticipantsButton participantNum='5 - 8' showButton={showButtons} handleClick={handleClick} />
            <NumParticipantsButton participantNum='9 - 16' showButton={showButtons} handleClick={handleClick} />
            <NumParticipantsButton participantNum='17 - 32' showButton={showButtons} handleClick={handleClick} />
            <NumParticipantsButton participantNum='33 - 64' showButton={showButtons} handleClick={handleClick} />
        </div>
    )
}

export default NumParticipantsButtonsContainer