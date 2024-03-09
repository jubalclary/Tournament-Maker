import React from 'react'
import BracketImage from './BracketImage'
import TextEntryBoxesContainer from './TextEntryBoxesContainer'

function BracketWrapper (props) {
    return (
        <div>
                
            <BracketImage participantNums={props.participantNums} showButton={props.showButton} />
        </div>
    )
}

export default BracketWrapper