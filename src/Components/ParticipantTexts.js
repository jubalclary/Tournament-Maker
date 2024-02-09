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
            {props.participants === '5_8' && (
                <div>
                    <p className='p5-8' id='p5-8-1'>{props.inputs.input1}</p>
                    <p className='p5-8' id='p5-8-2'>{props.inputs.input2}</p>
                    <p className='p5-8' id='p5-8-3'>{props.inputs.input3}</p>
                    <p className='p5-8' id='p5-8-4'>{props.inputs.input4}</p>
                    <p className='p5-8' id='p5-8-5'>{props.inputs.input5}</p>
                    <p className='p5-8' id='p5-8-6'>{props.inputs.input6}</p>
                    <p className='p5-8' id='p5-8-7'>{props.inputs.input7}</p>
                    <p className='p5-8' id='p5-8-8'>{props.inputs.input8}</p>
                </div>
            )}
            {props.participants === '9_16' && (
                <div>
                    <p className='p9-16' id='p9-16-1'>{props.inputs.input1}</p>
                    <p className='p9-16' id='p9-16-2'>{props.inputs.input2}</p>
                    <p className='p9-16' id='p9-16-3'>{props.inputs.input3}</p>
                    <p className='p9-16' id='p9-16-4'>{props.inputs.input4}</p>
                    <p className='p9-16' id='p9-16-5'>{props.inputs.input5}</p>
                    <p className='p9-16' id='p9-16-6'>{props.inputs.input6}</p>
                    <p className='p9-16' id='p9-16-7'>{props.inputs.input7}</p>
                    <p className='p9-16' id='p9-16-8'>{props.inputs.input8}</p>
                    <p className='p9-16' id='p9-16-9'>{props.inputs.input9}</p>
                    <p className='p9-16' id='p9-16-10'>{props.inputs.input10}</p>
                    <p className='p9-16' id='p9-16-11'>{props.inputs.input11}</p>
                    <p className='p9-16' id='p9-16-12'>{props.inputs.input12}</p>
                    <p className='p9-16' id='p9-16-13'>{props.inputs.input13}</p>
                    <p className='p9-16' id='p9-16-14'>{props.inputs.input14}</p>
                    <p className='p9-16' id='p9-16-15'>{props.inputs.input15}</p>
                    <p className='p9-16' id='p9-16-16'>{props.inputs.input16}</p>
                </div>
            )}
            {props.participants === '17_32' && (
                <div>
                    <p className='p17-32' id='p17-32-1'>{props.inputs.input1}</p>
                    <p className='p17-32' id='p17-32-2'>{props.inputs.input2}</p>
                    <p className='p17-32' id='p17-32-3'>{props.inputs.input3}</p>
                    <p className='p17-32' id='p17-32-4'>{props.inputs.input4}</p>
                    <p className='p17-32' id='p17-32-5'>{props.inputs.input5}</p>
                    <p className='p17-32' id='p17-32-6'>{props.inputs.input6}</p>
                    <p className='p17-32' id='p17-32-7'>{props.inputs.input7}</p>
                    <p className='p17-32' id='p17-32-8'>{props.inputs.input8}</p>
                    <p className='p17-32' id='p17-32-9'>{props.inputs.input9}</p>
                    <p className='p17-32' id='p17-32-10'>{props.inputs.input10}</p>
                    <p className='p17-32' id='p17-32-11'>{props.inputs.input11}</p>
                    <p className='p17-32' id='p17-32-12'>{props.inputs.input12}</p>
                    <p className='p17-32' id='p17-32-13'>{props.inputs.input13}</p>
                    <p className='p17-32' id='p17-32-14'>{props.inputs.input14}</p>
                    <p className='p17-32' id='p17-32-15'>{props.inputs.input15}</p>
                    <p className='p17-32' id='p17-32-16'>{props.inputs.input16}</p>
                    <p className='p17-32' id='p17-32-17'>{props.inputs.input17}</p>
                    <p className='p17-32' id='p17-32-18'>{props.inputs.input18}</p>
                    <p className='p17-32' id='p17-32-19'>{props.inputs.input19}</p>
                    <p className='p17-32' id='p17-32-20'>{props.inputs.input20}</p>
                    <p className='p17-32' id='p17-32-21'>{props.inputs.input21}</p>
                    <p className='p17-32' id='p17-32-22'>{props.inputs.input22}</p>
                    <p className='p17-32' id='p17-32-23'>{props.inputs.input23}</p>
                    <p className='p17-32' id='p17-32-24'>{props.inputs.input24}</p>
                    <p className='p17-32' id='p17-32-25'>{props.inputs.input25}</p>
                    <p className='p17-32' id='p17-32-26'>{props.inputs.input26}</p>
                    <p className='p17-32' id='p17-32-27'>{props.inputs.input27}</p>
                    <p className='p17-32' id='p17-32-28'>{props.inputs.input28}</p>
                    <p className='p17-32' id='p17-32-29'>{props.inputs.input29}</p>
                    <p className='p17-32' id='p17-32-30'>{props.inputs.input30}</p>
                    <p className='p17-32' id='p17-32-31'>{props.inputs.input31}</p>
                    <p className='p17-32' id='p17-32-32'>{props.inputs.input32}</p>                
                </div>
            )}
        </div>
    )
}

export default ParticipantTexts