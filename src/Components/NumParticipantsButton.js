import React, {useState} from 'react'
import BracketImage from './BracketImage'

function NumParticipantsButton (props) {
    const [showBracketImage, setShowBracketImage] = useState(false)
    const num = props.participantNum
    let participants

    const handleButtonClick = () => {
        switch (num) {
            case '3 - 4':
                participants = '3_4'
                setShowBracketImage(true)
                props.handleClick()
                break
            case '5 - 8':
                participants = '5_8'
                setShowBracketImage(true)
                props.handleClick()
                break
            case '9 - 16':  
                participants = '9_16'
                setShowBracketImage(true)
                props.handleClick()
                break
            case '17 - 32':
                participants = '17_32'
                setShowBracketImage(true)
                props.handleClick()
                break
            case '33 - 64':
                participants = '33_64'
                setShowBracketImage(true)
                props.handleClick()
                break   
            default:
                throw new Error(`Error: bad value for props.participantNum: ${num}`)
        }
    }

    return (
        <div style={{display: 'inline'}}>
            <div style={{display: props.showButton ? 'inline' : 'none' }}>
                <button onClick={handleButtonClick} className='numParticipantsButton'>{num}</button>
            </div>           
            {showBracketImage && <BracketImage participantNums={participants} />}
        </div>
    )
}

export default NumParticipantsButton