import React, {useState} from 'react'

function TextEntryBoxesContainer (props) {
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: '',
        input13: '',
        input14: '',
        input15: '',
        input16: '',
        input17: '',
        input18: '',
        input19: '',
        input20: '',
        input21: '',
        input22: '',
        input23: '',
        input24: '',
        input25: '',
        input26: '',
        input27: '',
        input28: '',
        input29: '',
        input30: '',
        input31: '',
        input32: '',
    })

    const idToStateKeyMap = {
        'input3-4-1': 'input1',
        'input3-4-2': 'input2',
        'input3-4-3': 'input3',
        'input3-4-4': 'input4',
        'input5-8-1': 'input1',
        'input5-8-2': 'input2',
        'input5-8-3': 'input3',
        'input5-8-4': 'input4',
        'input5-8-5': 'input5',
        'input5-8-6': 'input6',
        'input5-8-7': 'input7',
        'input5-8-8': 'input8',
        'input9-16-1': 'input1',
        'input9-16-2': 'input2',
        'input9-16-3': 'input3',
        'input9-16-4': 'input4',
        'input9-16-5': 'input5',
        'input9-16-6': 'input6',
        'input9-16-7': 'input7',
        'input9-16-8': 'input8',
        'input9-16-9': 'input9',
        'input9-16-10': 'input10',
        'input9-16-11': 'input11',
        'input9-16-12': 'input12',
        'input9-16-13': 'input13',
        'input9-16-14': 'input14',
        'input9-16-15': 'input15',
        'input9-16-16': 'input16',
        'input17-32-1': 'input1',
        'input17-32-2': 'input2',
        'input17-32-3': 'input3',
        'input17-32-4': 'input4',
        'input17-32-5': 'input5',
        'input17-32-6': 'input6',
        'input17-32-7': 'input7',
        'input17-32-8': 'input8',
        'input17-32-9': 'input9',
        'input17-32-10': 'input10',
        'input17-32-11': 'input11',
        'input17-32-12': 'input12',
        'input17-32-13': 'input13',
        'input17-32-14': 'input14',
        'input17-32-15': 'input15',
        'input17-32-16': 'input16',
        'input17-32-17': 'input17',
        'input17-32-18': 'input18',
        'input17-32-19': 'input19',
        'input17-32-20': 'input20',
        'input17-32-21': 'input21',
        'input17-32-22': 'input22',
        'input17-32-23': 'input23',
        'input17-32-24': 'input24',
        'input17-32-25': 'input25',
        'input17-32-26': 'input26',
        'input17-32-27': 'input27',
        'input17-32-28': 'input28',
        'input17-32-29': 'input29',
        'input17-32-30': 'input30',
        'input17-32-31': 'input31',
        'input17-32-32': 'input32'
    }

    const handleInputChange = (event) => {
        const {id, value} = event.target
        const stateKey = idToStateKeyMap[id]
        setInputValues({...inputValues, [stateKey]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11,
               input12, input13, input14, input15, input16, input17, input18, input19, input20, input21,
               input22, input23, input24, input25, input26, input27, input28, input29, input30, input31, input32} = inputValues;
        //Do something with the input values

    }
    

    return (
        <div>
            {props.participantNums === '3_4' && (
                <form onSubmit={handleSubmit}>
                    <input className='input3-4' type='text' maxLength='11' id='input3-4-1' value={inputValues.input1} onChange={handleInputChange} />
                    <input className='input3-4' type='text' maxLength='11' id='input3-4-2' value={inputValues.input2} onChange={handleInputChange} />
                    <input className='input3-4' type='text' maxLength='11' id='input3-4-3' value={inputValues.input3} onChange={handleInputChange} />
                    <input className='input3-4' type='text' maxLength='11' id='input3-4-4' value={inputValues.input4} onChange={handleInputChange} />
                    <input type='submit' value='Submit Participants' id='input3-4-submit' />
                </form>
            )}
            {props.participantNums === '5_8' && (
                <form onSubmit={handleSubmit}>
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-1' value={inputValues.input1} onChange={handleInputChange} />
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-2' value={inputValues.input2} onChange={handleInputChange} />
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-3' value={inputValues.input3} onChange={handleInputChange} />
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-4' value={inputValues.input4} onChange={handleInputChange} />
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-5' value={inputValues.input5} onChange={handleInputChange} />
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-6' value={inputValues.input6} onChange={handleInputChange} />
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-7' value={inputValues.input7} onChange={handleInputChange} />
                    <input className='input5-8' type='text' maxLength='9' id='input5-8-8' value={inputValues.input8} onChange={handleInputChange} />
                    <input type='submit' value='Submit Participants' id='input5-8-submit' />
                </form>
            )}
            {props.participantNums === '9_16' && (
                <form onSubmit={handleSubmit}>
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-1' value={inputValues.input1} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-2' value={inputValues.input2} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-3' value={inputValues.input3} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-4' value={inputValues.input4} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-5' value={inputValues.input5} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-6' value={inputValues.input6} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-7' value={inputValues.input7} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-8' value={inputValues.input8} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-9' value={inputValues.input9} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-10' value={inputValues.input10} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-11' value={inputValues.input11} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-12' value={inputValues.input12} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-13' value={inputValues.input13} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-14' value={inputValues.input14} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-15' value={inputValues.input15} onChange={handleInputChange} />
                    <input className='input9-16' type='text' maxLength='9' id='input9-16-16' value={inputValues.input16} onChange={handleInputChange} />
                    <input type='submit' value='Submit Participants' id='input9-16-submit' />
                </form>
            )}
            {props.participantNums === '17_32' && (
                <form onSubmit={handleSubmit}>
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-1' value={inputValues.input1} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-2' value={inputValues.input2} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-3' value={inputValues.input3} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-4' value={inputValues.input4} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-5' value={inputValues.input5} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-6' value={inputValues.input6} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-7' value={inputValues.input7} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-8' value={inputValues.input8} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-9' value={inputValues.input9} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-10' value={inputValues.input10} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-11' value={inputValues.input11} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-12' value={inputValues.input12} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-13' value={inputValues.input13} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-14' value={inputValues.input14} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-15' value={inputValues.input15} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-16' value={inputValues.input16} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-17' value={inputValues.input17} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-18' value={inputValues.input18} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-19' value={inputValues.input19} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-20' value={inputValues.input20} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-21' value={inputValues.input21} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-22' value={inputValues.input22} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-23' value={inputValues.input23} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-24' value={inputValues.input24} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-25' value={inputValues.input25} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-26' value={inputValues.input26} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-27' value={inputValues.input27} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-28' value={inputValues.input28} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-29' value={inputValues.input29} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-30' value={inputValues.input30} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-31' value={inputValues.input31} onChange={handleInputChange} />
                    <input className='input17-32' type='text' maxLength='7' id='input17-32-32' value={inputValues.input32} onChange={handleInputChange} />
                    <input type='submit' value='Submit Participants' id='input17-32-submit' />
                </form>
            )}
        </div>
    )

}

export default TextEntryBoxesContainer