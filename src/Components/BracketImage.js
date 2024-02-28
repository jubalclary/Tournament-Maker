import React, {useState} from 'react'

function BracketImage (props) {
    const participantNums = props.participantNums

    const imgId = () => {
        switch (participantNums) {
            case '3_4':
                return `img3-4`
            case '5_8':
                return 'img5-8'
            case '9_16':
                return 'img9-16'
            case '17_32':
                return 'img17-32'
            default:
                throw new Error(`Error: bad value for participantNums: ${participantNums}`)           
        }
    }   

    const imageFilePath = () => {
        switch (participantNums) {
            case '3_4':
                return `https://i.postimg.cc/jdW32YKC/tournament-bracket-3-4.png`
            case '5_8':
                return 'https://i.postimg.cc/XYyvjCGj/tournament-bracket-5-8.png'
            case '9_16':
                return 'https://i.postimg.cc/pXs7hsvt/tournament-bracket-9-16-cropped.png'
            case '17_32':
                return 'https://i.postimg.cc/C5GB1cQy/tournament-bracket-17-32-cropped.png'
            default:
                throw new Error(`Error: bad value for participantNums: ${participantNums}`)
        }
    }

    return (
        <div>            
            <img className='bracketImage' id={imgId()} src={imageFilePath()} alt='Tournament bracket'></img>

        </div>
    )
}

export default BracketImage