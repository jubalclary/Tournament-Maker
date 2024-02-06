import React, {useState} from 'react'

function ParticipantTexts (props) {
    return (
        <div>
            {props.participants === '3_4' && (
                <div>
                    <p className='p3-4' id='p3-4-1'>{props.inputs.input1}</p>
                    <p className='p3-4' id='p3-4-2'>{props.inputs.input2}</p>
                    <p className='p3-4' id='p3-4-3'>{props.inputs.input3}</p>
                    <p className='p3-4' id='p3-4-4'>{props.inputs.input4}</p>
                </div>
            )}
        </div>
    )
}

export default ParticipantTexts