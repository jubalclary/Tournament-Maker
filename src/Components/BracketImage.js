import React from 'react'

function BracketImage (props) {
    const participantNums = props.participantNums

    const imageFilePath = () => {
        switch (participantNums) {
            case '3_4':
                return `https://i.postimg.cc/jdW32YKC/tournament-bracket-3-4.png`
            case '5_8':
                return 'https://i.postimg.cc/XYyvjCGj/tournament-bracket-5-8.png'
            case '9_16':
                return 'https://i.postimg.cc/XYyvjCGj/tournament-bracket-5-8.png'
            case '17_32':
                return 'https://i.postimg.cc/XYyvjCGj/tournament-bracket-5-8.png'
            case '33_64':
                return 'https://i.postimg.cc/XYyvjCGj/tournament-bracket-5-8.png'
            default:
                throw new Error(`Error: bad value for participantNums: ${participantNums}`)
        }
    }

    return (
        <img className='bracketImage' src={imageFilePath()} alt='Tournament bracket'></img>
    )
}

export default BracketImage