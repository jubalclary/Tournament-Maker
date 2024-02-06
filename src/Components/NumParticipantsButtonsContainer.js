import React, {useState} from 'react'
import NumParticipantsButton from './NumParticipantsButton'

function NumParticipantsButtonsContainer (props) {
    const [showButtons, setShowButtons] = useState(true)
    const [showHeader, setShowHeader] = useState(true)

    const handleClick = () => {
        setShowButtons(false)
        setShowHeader(false)
    }

    return (
        <div>
            {showHeader && <h3 className='subtextone'>First, choose the number of participants:</h3>}
            <NumParticipantsButton participantNum='3 - 4' showButton={showButtons} handleClick={handleClick} />
            <NumParticipantsButton participantNum='5 - 8' showButton={showButtons} handleClick={handleClick} />
            <NumParticipantsButton participantNum='9 - 16' showButton={showButtons} handleClick={handleClick} />
            <NumParticipantsButton participantNum='17 - 32' showButton={showButtons} handleClick={handleClick} />
        </div>
    )
}

export default NumParticipantsButtonsContainer