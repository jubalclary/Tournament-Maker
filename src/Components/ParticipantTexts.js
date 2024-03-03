import React, {useState} from 'react'
import WinnerScreen from './WinnerScreen'

function ParticipantTexts (props) {
    const [showHeader, setShowHeader] = useState(true)
    const [strikeThrough, setStrikeThrough] = useState(Array(60).fill(false))
    const [visibleTexts, setVisibleTexts] = useState(Array(30).fill(false))
    const [clickedElements, setClickedElements] = useState([])
    const [winnerDeclared, setWinnerDeclared] = useState(false)

    const inputNumToNextMap = {
        1: 33, 2: 33, 3: 34, 4: 34, 5: 35,
        6: 35, 7: 36, 8: 36, 9: 37, 10: 37,
        11: 38, 12: 38, 13: 39, 14: 39, 15: 40,
        16: 40, 17: 41, 18: 41, 19: 42, 20: 42,
        21: 43, 22: 43, 23: 44, 24: 44, 25: 45,
        26: 45, 27: 46, 28: 46, 29: 47, 30: 47,
        31: 48, 32: 48, 33: 49, 34: 49, 35: 50,
        36: 50, 37: 51, 38: 51, 39: 52, 40: 52,
        41: 53, 42: 53, 43: 54, 44: 54, 45: 55,
        46: 55, 47: 56, 48: 56, 49: 57, 50: 57,
        51: 58, 52: 58, 53: 59, 54: 59, 55: 60,
        56: 60, 57: 61, 58: 61, 59: 62, 60: 62,
        61: 63, 62: 63
    }

    const handleClick = (inputNum, actualInput, finalRound = false) => {
        // Strikethrough the complement participant
        let complementInputNum
        if(inputNum % 2 === 0) {
            complementInputNum = inputNum - 1
        } else {
            complementInputNum = inputNum + 1
        }

        const nextRoundNum = inputNumToNextMap[inputNum]
        if(clickedElements.includes(inputNum) === false && clickedElements.includes(complementInputNum) === false && clickedElements.includes(nextRoundNum) === false){           
            const updatedStrikeThrough = [...strikeThrough]
            updatedStrikeThrough[complementInputNum - 1] = !updatedStrikeThrough[complementInputNum - 1]       
            setStrikeThrough(updatedStrikeThrough)
            setClickedElements([...clickedElements, inputNum])
        }

        // Display the winner of the round in the next round of the bracket
        if(nextRoundNum < 100 && clickedElements.includes(nextRoundNum) === false) {
            const relativeNextRoundNum = nextRoundNum - 32
            const updatedVisibleTexts = [...visibleTexts]
            updatedVisibleTexts[relativeNextRoundNum - 1] = actualInput
            setVisibleTexts(updatedVisibleTexts)
            setClickedElements([...clickedElements, nextRoundNum])
        }

        // Display the winner screen if the clicked participant is in the final round
        if(finalRound === true) {
            setWinnerDeclared(true)
        }        
    }

    return (
        <div>
            {showHeader && <h3>Click on a participant to advance them to the next round.</h3>}
            {props.participants === '3_4' && (
                <div>
                    <p className={'p3-4 ' + (strikeThrough[0] ? 'strikethrough' : '')} id='p3-4-1' onClick={() => handleClick(1, props.inputs.input1)}>{props.inputs.input1}</p>
                    <p className={'p3-4 ' + (strikeThrough[1] ? 'strikethrough' : '')} id='p3-4-2' onClick={() => handleClick(2, props.inputs.input2)}>{props.inputs.input2}</p>
                    <p className={'p3-4 ' + (strikeThrough[2] ? 'strikethrough' : '')} id='p3-4-3' onClick={() => handleClick(3, props.inputs.input3)}>{props.inputs.input3}</p>
                    <p className={'p3-4 ' + (strikeThrough[3] ? 'strikethrough' : '')} id='p3-4-4' onClick={() => handleClick(4, props.inputs.input4)}>{props.inputs.input4}</p>

                    {visibleTexts[0] && <p className={'p3-4 ' + (strikeThrough[4] ? 'strikethrough' : '')} id='p3-4-5' onClick={() => handleClick(5, visibleTexts[0], true)}>{visibleTexts[0]}</p>}
                    {visibleTexts[1] && <p className={'p3-4 ' + (strikeThrough[5] ? 'strikethrough' : '')} id='p3-4-6' onClick={() => handleClick(6, visibleTexts[1], true)}>{visibleTexts[1]}</p>}

                    {winnerDeclared && <WinnerScreen winner={visibleTexts[2]} />}
                </div>
            )}
            {props.participants === '5_8' && (
                <div>
                    <p className={'p5-8 ' + (strikeThrough[0] ? 'strikethrough' : '')} id='p5-8-1' onClick={() => handleClick(1, props.inputs.input1)}>{props.inputs.input1}</p>
                    <p className={'p5-8 ' + (strikeThrough[1] ? 'strikethrough' : '')} id='p5-8-2' onClick={() => handleClick(2, props.inputs.input2)}>{props.inputs.input2}</p>
                    <p className={'p5-8 ' + (strikeThrough[2] ? 'strikethrough' : '')} id='p5-8-3' onClick={() => handleClick(3, props.inputs.input3)}>{props.inputs.input3}</p>
                    <p className={'p5-8 ' + (strikeThrough[3] ? 'strikethrough' : '')} id='p5-8-4' onClick={() => handleClick(4, props.inputs.input4)}>{props.inputs.input4}</p>
                    <p className={'p5-8 ' + (strikeThrough[4] ? 'strikethrough' : '')} id='p5-8-5' onClick={() => handleClick(5, props.inputs.input5)}>{props.inputs.input5}</p>
                    <p className={'p5-8 ' + (strikeThrough[5] ? 'strikethrough' : '')} id='p5-8-6' onClick={() => handleClick(6, props.inputs.input6)}>{props.inputs.input6}</p>
                    <p className={'p5-8 ' + (strikeThrough[6] ? 'strikethrough' : '')} id='p5-8-7' onClick={() => handleClick(7, props.inputs.input7)}>{props.inputs.input7}</p>
                    <p className={'p5-8 ' + (strikeThrough[7] ? 'strikethrough' : '')} id='p5-8-8' onClick={() => handleClick(8, props.inputs.input8)}>{props.inputs.input8}</p>

                    {visibleTexts[0] && <p className={'p5-8 ' + (strikeThrough[8] ? 'strikethrough' : '')} id='p5-8-9' onClick={() => handleClick(9, visibleTexts[0])}>{visibleTexts[0]}</p>}
                    {visibleTexts[1] && <p className={'p5-8 ' + (strikeThrough[9] ? 'strikethrough' : '')} id='p5-8-10' onClick={() => handleClick(10, visibleTexts[1])}>{visibleTexts[1]}</p>}
                    {visibleTexts[2] && <p className={'p5-8 ' + (strikeThrough[10] ? 'strikethrough' : '')} id='p5-8-11' onClick={() => handleClick(11, visibleTexts[2])}>{visibleTexts[2]}</p>}
                    {visibleTexts[3] && <p className={'p5-8 ' + (strikeThrough[11] ? 'strikethrough' : '')} id='p5-8-12' onClick={() => handleClick(12, visibleTexts[3])}>{visibleTexts[3]}</p>}
                    {visibleTexts[4] && <p className={'p5-8 ' + (strikeThrough[12] ? 'strikethrough' : '')} id='p5-8-13' onClick={() => handleClick(13, visibleTexts[4], true)}>{visibleTexts[4]}</p>}
                    {visibleTexts[5] && <p className={'p5-8 ' + (strikeThrough[13] ? 'strikethrough' : '')} id='p5-8-14' onClick={() => handleClick(14, visibleTexts[5], true)}>{visibleTexts[5]}</p>}

                    {winnerDeclared && <WinnerScreen winner={visibleTexts[6]} />}
                </div>
            )}
            {props.participants === '9_16' && (
                <div>
                    <p className={'p9-16 ' + (strikeThrough[0] ? 'strikethrough' : '')} id='p9-16-1' onClick={() => handleClick(1, props.inputs.input1)}>{props.inputs.input1}</p>
                    <p className={'p9-16 ' + (strikeThrough[1] ? 'strikethrough' : '')} id='p9-16-2' onClick={() => handleClick(2, props.inputs.input2)}>{props.inputs.input2}</p>
                    <p className={'p9-16 ' + (strikeThrough[2] ? 'strikethrough' : '')} id='p9-16-3' onClick={() => handleClick(3, props.inputs.input3)}>{props.inputs.input3}</p>
                    <p className={'p9-16 ' + (strikeThrough[3] ? 'strikethrough' : '')} id='p9-16-4' onClick={() => handleClick(4, props.inputs.input4)}>{props.inputs.input4}</p>
                    <p className={'p9-16 ' + (strikeThrough[4] ? 'strikethrough' : '')} id='p9-16-5' onClick={() => handleClick(5, props.inputs.input5)}>{props.inputs.input5}</p>
                    <p className={'p9-16 ' + (strikeThrough[5] ? 'strikethrough' : '')} id='p9-16-6' onClick={() => handleClick(6, props.inputs.input6)}>{props.inputs.input6}</p>
                    <p className={'p9-16 ' + (strikeThrough[6] ? 'strikethrough' : '')} id='p9-16-7' onClick={() => handleClick(7, props.inputs.input7)}>{props.inputs.input7}</p>
                    <p className={'p9-16 ' + (strikeThrough[7] ? 'strikethrough' : '')} id='p9-16-8' onClick={() => handleClick(8, props.inputs.input8)}>{props.inputs.input8}</p>
                    <p className={'p9-16 ' + (strikeThrough[8] ? 'strikethrough' : '')} id='p9-16-9' onClick={() => handleClick(9, props.inputs.input9)}>{props.inputs.input9}</p>
                    <p className={'p9-16 ' + (strikeThrough[9] ? 'strikethrough' : '')} id='p9-16-10' onClick={() => handleClick(10, props.inputs.input10)}>{props.inputs.input10}</p>
                    <p className={'p9-16 ' + (strikeThrough[10] ? 'strikethrough' : '')} id='p9-16-11' onClick={() => handleClick(11, props.inputs.input11)}>{props.inputs.input11}</p>
                    <p className={'p9-16 ' + (strikeThrough[11] ? 'strikethrough' : '')} id='p9-16-12' onClick={() => handleClick(12, props.inputs.input12)}>{props.inputs.input12}</p>
                    <p className={'p9-16 ' + (strikeThrough[12] ? 'strikethrough' : '')} id='p9-16-13' onClick={() => handleClick(13, props.inputs.input13)}>{props.inputs.input13}</p>
                    <p className={'p9-16 ' + (strikeThrough[13] ? 'strikethrough' : '')} id='p9-16-14' onClick={() => handleClick(14, props.inputs.input14)}>{props.inputs.input14}</p>
                    <p className={'p9-16 ' + (strikeThrough[14] ? 'strikethrough' : '')} id='p9-16-15' onClick={() => handleClick(15, props.inputs.input15)}>{props.inputs.input15}</p>
                    <p className={'p9-16 ' + (strikeThrough[15] ? 'strikethrough' : '')} id='p9-16-16' onClick={() => handleClick(16, props.inputs.input16)}>{props.inputs.input16}</p>

                    {visibleTexts[0] && <p className={'p9-16 ' + (strikeThrough[16] ? 'strikethrough' : '')} id='p9-16-17' onClick={() => handleClick(17, visibleTexts[0])}>{visibleTexts[0]}</p>}
                    {visibleTexts[1] && <p className={'p9-16 ' + (strikeThrough[17] ? 'strikethrough' : '')} id='p9-16-18' onClick={() => handleClick(18, visibleTexts[1])}>{visibleTexts[1]}</p>}
                    {visibleTexts[2] && <p className={'p9-16 ' + (strikeThrough[18] ? 'strikethrough' : '')} id='p9-16-19' onClick={() => handleClick(19, visibleTexts[2])}>{visibleTexts[2]}</p>}
                    {visibleTexts[3] && <p className={'p9-16 ' + (strikeThrough[19] ? 'strikethrough' : '')} id='p9-16-20' onClick={() => handleClick(20, visibleTexts[3])}>{visibleTexts[3]}</p>}
                    {visibleTexts[4] && <p className={'p9-16 ' + (strikeThrough[20] ? 'strikethrough' : '')} id='p9-16-21' onClick={() => handleClick(21, visibleTexts[4])}>{visibleTexts[4]}</p>}
                    {visibleTexts[5] && <p className={'p9-16 ' + (strikeThrough[21] ? 'strikethrough' : '')} id='p9-16-22' onClick={() => handleClick(22, visibleTexts[5])}>{visibleTexts[5]}</p>}
                    {visibleTexts[6] && <p className={'p9-16 ' + (strikeThrough[22] ? 'strikethrough' : '')} id='p9-16-23' onClick={() => handleClick(23, visibleTexts[6])}>{visibleTexts[6]}</p>}
                    {visibleTexts[7] && <p className={'p9-16 ' + (strikeThrough[23] ? 'strikethrough' : '')} id='p9-16-24' onClick={() => handleClick(24, visibleTexts[7])}>{visibleTexts[7]}</p>}
                    {visibleTexts[8] && <p className={'p9-16 ' + (strikeThrough[24] ? 'strikethrough' : '')} id='p9-16-25' onClick={() => handleClick(25, visibleTexts[8])}>{visibleTexts[8]}</p>}
                    {visibleTexts[9] && <p className={'p9-16 ' + (strikeThrough[25] ? 'strikethrough' : '')} id='p9-16-26' onClick={() => handleClick(26, visibleTexts[9])}>{visibleTexts[9]}</p>}
                    {visibleTexts[10] && <p className={'p9-16 ' + (strikeThrough[26] ? 'strikethrough' : '')} id='p9-16-27' onClick={() => handleClick(27, visibleTexts[10])}>{visibleTexts[10]}</p>}
                    {visibleTexts[11] && <p className={'p9-16 ' + (strikeThrough[27] ? 'strikethrough' : '')} id='p9-16-28' onClick={() => handleClick(28, visibleTexts[11])}>{visibleTexts[11]}</p>}
                    {visibleTexts[12] && <p className={'p9-16 ' + (strikeThrough[28] ? 'strikethrough' : '')} id='p9-16-29' onClick={() => handleClick(29, visibleTexts[12], true)}>{visibleTexts[12]}</p>}
                    {visibleTexts[13] && <p className={'p9-16 ' + (strikeThrough[29] ? 'strikethrough' : '')} id='p9-16-30' onClick={() => handleClick(30, visibleTexts[13], true)}>{visibleTexts[13]}</p>}

                    {winnerDeclared && <WinnerScreen winner={visibleTexts[14]} />}
                </div>
            )}
            {props.participants === '17_32' && (
                <div>
                    <p className={'p17-32 ' + (strikeThrough[0] ? 'strikethrough' : '')} id='p17-32-1' onClick={() => handleClick(1, props.inputs.input1)}>{props.inputs.input1}</p>
                    <p className={'p17-32 ' + (strikeThrough[1] ? 'strikethrough' : '')} id='p17-32-2' onClick={() => handleClick(2, props.inputs.input2)}>{props.inputs.input2}</p>
                    <p className={'p17-32 ' + (strikeThrough[2] ? 'strikethrough' : '')} id='p17-32-3' onClick={() => handleClick(3, props.inputs.input3)}>{props.inputs.input3}</p>
                    <p className={'p17-32 ' + (strikeThrough[3] ? 'strikethrough' : '')} id='p17-32-4' onClick={() => handleClick(4, props.inputs.input4)}>{props.inputs.input4}</p>
                    <p className={'p17-32 ' + (strikeThrough[4] ? 'strikethrough' : '')} id='p17-32-5' onClick={() => handleClick(5, props.inputs.input5)}>{props.inputs.input5}</p>
                    <p className={'p17-32 ' + (strikeThrough[5] ? 'strikethrough' : '')} id='p17-32-6' onClick={() => handleClick(6, props.inputs.input6)}>{props.inputs.input6}</p>
                    <p className={'p17-32 ' + (strikeThrough[6] ? 'strikethrough' : '')} id='p17-32-7' onClick={() => handleClick(7, props.inputs.input7)}>{props.inputs.input7}</p>
                    <p className={'p17-32 ' + (strikeThrough[7] ? 'strikethrough' : '')} id='p17-32-8' onClick={() => handleClick(8, props.inputs.input8)}>{props.inputs.input8}</p>
                    <p className={'p17-32 ' + (strikeThrough[8] ? 'strikethrough' : '')} id='p17-32-9' onClick={() => handleClick(9, props.inputs.input9)}>{props.inputs.input9}</p>
                    <p className={'p17-32 ' + (strikeThrough[9] ? 'strikethrough' : '')} id='p17-32-10' onClick={() => handleClick(10, props.inputs.input10)}>{props.inputs.input10}</p>
                    <p className={'p17-32 ' + (strikeThrough[10] ? 'strikethrough' : '')} id='p17-32-11' onClick={() => handleClick(11, props.inputs.input11)}>{props.inputs.input11}</p>
                    <p className={'p17-32 ' + (strikeThrough[11] ? 'strikethrough' : '')} id='p17-32-12' onClick={() => handleClick(12, props.inputs.input12)}>{props.inputs.input12}</p>
                    <p className={'p17-32 ' + (strikeThrough[12] ? 'strikethrough' : '')} id='p17-32-13' onClick={() => handleClick(13, props.inputs.input13)}>{props.inputs.input13}</p>
                    <p className={'p17-32 ' + (strikeThrough[13] ? 'strikethrough' : '')} id='p17-32-14' onClick={() => handleClick(14, props.inputs.input14)}>{props.inputs.input14}</p>
                    <p className={'p17-32 ' + (strikeThrough[14] ? 'strikethrough' : '')} id='p17-32-15' onClick={() => handleClick(15, props.inputs.input15)}>{props.inputs.input15}</p>
                    <p className={'p17-32 ' + (strikeThrough[15] ? 'strikethrough' : '')} id='p17-32-16' onClick={() => handleClick(16, props.inputs.input16)}>{props.inputs.input16}</p>
                    <p className={'p17-32 ' + (strikeThrough[16] ? 'strikethrough' : '')} id='p17-32-17' onClick={() => handleClick(17, props.inputs.input17)}>{props.inputs.input17}</p>
                    <p className={'p17-32 ' + (strikeThrough[17] ? 'strikethrough' : '')} id='p17-32-18' onClick={() => handleClick(18, props.inputs.input18)}>{props.inputs.input18}</p>
                    <p className={'p17-32 ' + (strikeThrough[18] ? 'strikethrough' : '')} id='p17-32-19' onClick={() => handleClick(19, props.inputs.input19)}>{props.inputs.input19}</p>
                    <p className={'p17-32 ' + (strikeThrough[19] ? 'strikethrough' : '')} id='p17-32-20' onClick={() => handleClick(20, props.inputs.input20)}>{props.inputs.input20}</p>
                    <p className={'p17-32 ' + (strikeThrough[20] ? 'strikethrough' : '')} id='p17-32-21' onClick={() => handleClick(21, props.inputs.input21)}>{props.inputs.input21}</p>
                    <p className={'p17-32 ' + (strikeThrough[21] ? 'strikethrough' : '')} id='p17-32-22' onClick={() => handleClick(22, props.inputs.input22)}>{props.inputs.input22}</p>
                    <p className={'p17-32 ' + (strikeThrough[22] ? 'strikethrough' : '')} id='p17-32-23' onClick={() => handleClick(23, props.inputs.input23)}>{props.inputs.input23}</p>
                    <p className={'p17-32 ' + (strikeThrough[23] ? 'strikethrough' : '')} id='p17-32-24' onClick={() => handleClick(24, props.inputs.input24)}>{props.inputs.input24}</p>
                    <p className={'p17-32 ' + (strikeThrough[24] ? 'strikethrough' : '')} id='p17-32-25' onClick={() => handleClick(25, props.inputs.input25)}>{props.inputs.input25}</p>
                    <p className={'p17-32 ' + (strikeThrough[25] ? 'strikethrough' : '')} id='p17-32-26' onClick={() => handleClick(26, props.inputs.input26)}>{props.inputs.input26}</p>
                    <p className={'p17-32 ' + (strikeThrough[26] ? 'strikethrough' : '')} id='p17-32-27' onClick={() => handleClick(27, props.inputs.input27)}>{props.inputs.input27}</p>
                    <p className={'p17-32 ' + (strikeThrough[27] ? 'strikethrough' : '')} id='p17-32-28' onClick={() => handleClick(28, props.inputs.input28)}>{props.inputs.input28}</p>
                    <p className={'p17-32 ' + (strikeThrough[28] ? 'strikethrough' : '')} id='p17-32-29' onClick={() => handleClick(29, props.inputs.input29)}>{props.inputs.input29}</p>
                    <p className={'p17-32 ' + (strikeThrough[29] ? 'strikethrough' : '')} id='p17-32-30' onClick={() => handleClick(30, props.inputs.input30)}>{props.inputs.input30}</p>
                    <p className={'p17-32 ' + (strikeThrough[30] ? 'strikethrough' : '')} id='p17-32-31' onClick={() => handleClick(31, props.inputs.input31)}>{props.inputs.input31}</p>
                    <p className={'p17-32 ' + (strikeThrough[31] ? 'strikethrough' : '')} id='p17-32-32' onClick={() => handleClick(32, props.inputs.input32)}>{props.inputs.input32}</p>

                    {visibleTexts[0] && <p className={'p17-32 ' + (strikeThrough[32] ? 'strikethrough' : '')} id='p17-32-33' onClick={() => handleClick(33, visibleTexts[0])}>{visibleTexts[0]}</p>}
                    {visibleTexts[1] && <p className={'p17-32 ' + (strikeThrough[33] ? 'strikethrough' : '')} id='p17-32-34' onClick={() => handleClick(34, visibleTexts[1])}>{visibleTexts[1]}</p>}
                    {visibleTexts[2] && <p className={'p17-32 ' + (strikeThrough[34] ? 'strikethrough' : '')} id='p17-32-35' onClick={() => handleClick(35, visibleTexts[2])}>{visibleTexts[2]}</p>}
                    {visibleTexts[3] && <p className={'p17-32 ' + (strikeThrough[35] ? 'strikethrough' : '')} id='p17-32-36' onClick={() => handleClick(36, visibleTexts[3])}>{visibleTexts[3]}</p>}
                    {visibleTexts[4] && <p className={'p17-32 ' + (strikeThrough[36] ? 'strikethrough' : '')} id='p17-32-37' onClick={() => handleClick(37, visibleTexts[4])}>{visibleTexts[4]}</p>}
                    {visibleTexts[5] && <p className={'p17-32 ' + (strikeThrough[37] ? 'strikethrough' : '')} id='p17-32-38' onClick={() => handleClick(38, visibleTexts[5])}>{visibleTexts[5]}</p>}
                    {visibleTexts[6] && <p className={'p17-32 ' + (strikeThrough[38] ? 'strikethrough' : '')} id='p17-32-39' onClick={() => handleClick(39, visibleTexts[6])}>{visibleTexts[6]}</p>}
                    {visibleTexts[7] && <p className={'p17-32 ' + (strikeThrough[39] ? 'strikethrough' : '')} id='p17-32-40' onClick={() => handleClick(40, visibleTexts[7])}>{visibleTexts[7]}</p>}
                    {visibleTexts[8] && <p className={'p17-32 ' + (strikeThrough[40] ? 'strikethrough' : '')} id='p17-32-41' onClick={() => handleClick(41, visibleTexts[8])}>{visibleTexts[8]}</p>}
                    {visibleTexts[9] && <p className={'p17-32 ' + (strikeThrough[41] ? 'strikethrough' : '')} id='p17-32-42' onClick={() => handleClick(42, visibleTexts[9])}>{visibleTexts[9]}</p>}
                    {visibleTexts[10] && <p className={'p17-32 ' + (strikeThrough[42] ? 'strikethrough' : '')} id='p17-32-43' onClick={() => handleClick(43, visibleTexts[10])}>{visibleTexts[10]}</p>}
                    {visibleTexts[11] && <p className={'p17-32 ' + (strikeThrough[43] ? 'strikethrough' : '')} id='p17-32-44' onClick={() => handleClick(44, visibleTexts[11])}>{visibleTexts[11]}</p>}
                    {visibleTexts[12] && <p className={'p17-32 ' + (strikeThrough[44] ? 'strikethrough' : '')} id='p17-32-45' onClick={() => handleClick(45, visibleTexts[12])}>{visibleTexts[12]}</p>}
                    {visibleTexts[13] && <p className={'p17-32 ' + (strikeThrough[45] ? 'strikethrough' : '')} id='p17-32-46' onClick={() => handleClick(46, visibleTexts[13])}>{visibleTexts[13]}</p>}
                    {visibleTexts[14] && <p className={'p17-32 ' + (strikeThrough[46] ? 'strikethrough' : '')} id='p17-32-47' onClick={() => handleClick(47, visibleTexts[14])}>{visibleTexts[14]}</p>}
                    {visibleTexts[15] && <p className={'p17-32 ' + (strikeThrough[47] ? 'strikethrough' : '')} id='p17-32-48' onClick={() => handleClick(48, visibleTexts[15])}>{visibleTexts[15]}</p>}
                    {visibleTexts[16] && <p className={'p17-32 ' + (strikeThrough[48] ? 'strikethrough' : '')} id='p17-32-49' onClick={() => handleClick(49, visibleTexts[16])}>{visibleTexts[16]}</p>}
                    {visibleTexts[17] && <p className={'p17-32 ' + (strikeThrough[49] ? 'strikethrough' : '')} id='p17-32-50' onClick={() => handleClick(50, visibleTexts[17])}>{visibleTexts[17]}</p>}
                    {visibleTexts[18] && <p className={'p17-32 ' + (strikeThrough[50] ? 'strikethrough' : '')} id='p17-32-51' onClick={() => handleClick(51, visibleTexts[18])}>{visibleTexts[18]}</p>}
                    {visibleTexts[19] && <p className={'p17-32 ' + (strikeThrough[51] ? 'strikethrough' : '')} id='p17-32-52' onClick={() => handleClick(52, visibleTexts[19])}>{visibleTexts[19]}</p>}          
                    {visibleTexts[20] && <p className={'p17-32 ' + (strikeThrough[52] ? 'strikethrough' : '')} id='p17-32-53' onClick={() => handleClick(53, visibleTexts[20])}>{visibleTexts[20]}</p>}
                    {visibleTexts[21] && <p className={'p17-32 ' + (strikeThrough[53] ? 'strikethrough' : '')} id='p17-32-54' onClick={() => handleClick(54, visibleTexts[21])}>{visibleTexts[21]}</p>}
                    {visibleTexts[22] && <p className={'p17-32 ' + (strikeThrough[54] ? 'strikethrough' : '')} id='p17-32-55' onClick={() => handleClick(55, visibleTexts[22])}>{visibleTexts[22]}</p>}
                    {visibleTexts[23] && <p className={'p17-32 ' + (strikeThrough[55] ? 'strikethrough' : '')} id='p17-32-56' onClick={() => handleClick(56, visibleTexts[23])}>{visibleTexts[23]}</p>}
                    {visibleTexts[24] && <p className={'p17-32 ' + (strikeThrough[56] ? 'strikethrough' : '')} id='p17-32-57' onClick={() => handleClick(57, visibleTexts[24])}>{visibleTexts[24]}</p>}
                    {visibleTexts[25] && <p className={'p17-32 ' + (strikeThrough[57] ? 'strikethrough' : '')} id='p17-32-58' onClick={() => handleClick(58, visibleTexts[25])}>{visibleTexts[25]}</p>}
                    {visibleTexts[26] && <p className={'p17-32 ' + (strikeThrough[58] ? 'strikethrough' : '')} id='p17-32-59' onClick={() => handleClick(59, visibleTexts[26])}>{visibleTexts[26]}</p>}
                    {visibleTexts[27] && <p className={'p17-32 ' + (strikeThrough[59] ? 'strikethrough' : '')} id='p17-32-60' onClick={() => handleClick(60, visibleTexts[27])}>{visibleTexts[27]}</p>}
                    {visibleTexts[28] && <p className={'p17-32 ' + (strikeThrough[60] ? 'strikethrough' : '')} id='p17-32-61' onClick={() => handleClick(61, visibleTexts[28], true)}>{visibleTexts[28]}</p>}
                    {visibleTexts[29] && <p className={'p17-32 ' + (strikeThrough[61] ? 'strikethrough' : '')} id='p17-32-62' onClick={() => handleClick(62, visibleTexts[29], true)}>{visibleTexts[29]}</p>}

                    {winnerDeclared && <WinnerScreen winner={visibleTexts[30]} />}
                </div>
            )}
        </div>
    )
}

export default ParticipantTexts