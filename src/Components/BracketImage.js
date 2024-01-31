import React from 'react'

function BracketImage (props) {
    const participantNums = props.participantNums
    const imageFilePath = `https://i.postimg.cc/jdW32YKC/tournament-bracket-${participantNums}.png`
    //`bracket_images/images/tournament_bracket_${participantNums}.png`
    

    return (
        <img className='bracketImage' src={imageFilePath}></img>
    )
}

export default BracketImage