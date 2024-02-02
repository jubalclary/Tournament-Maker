import React, {useState} from 'react'
import BracketImage from './BracketImage'

function NumParticipantsButton (props) {
    const [showBracketImage, setShowBracketImage] = useState(false)
    const [participants, setParticipants] = useState(null)

    const num = props.participantNum

    const handleButtonClick = () => {
        let updatedParticipants

        switch (num) {
            case '3 - 4':
                updatedParticipants = '3_4'
                break
            case '5 - 8':
                updatedParticipants = '5_8'
                break
            case '9 - 16':  
                updatedParticipants = '9_16'
                break
            case '17 - 32':
                updatedParticipants = '17_32'
                break
            case '33 - 64':
                updatedParticipants = '33_64'
                break   
            default:
                throw new Error(`Error: bad value for props.participantNum: ${num}`)
        }

        setParticipants(updatedParticipants)
        setShowBracketImage(true)
        props.handleClick()
    }

    return (
        <div style={{display: 'inline'}}>
            <div style={{display: props.showButton ? 'inline' : 'none' }}>
                <button onClick={handleButtonClick} className='numParticipantsButton'>{num}</button>
            </div>           
            {showBracketImage && participants && <BracketImage participantNums={participants} showButton={true} />}
        </div>
    )
}

export default NumParticipantsButton