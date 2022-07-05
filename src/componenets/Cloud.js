import React from 'react'
import '../css/cloud.css'

export default function Cloud(props) {

    const { sentence } = props

    return (
        <div className='cloud-container'>
            <div id="expend" className='hidden'>{sentence}</div>
            <div id='cloud' className='cloud'>
                <div className='cloud-text-wrapper'>
                    <p className='cloud-text'>{sentence}</p>
                </div>
            </div>
        </div >
    )
}