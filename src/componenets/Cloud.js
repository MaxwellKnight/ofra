import React from 'react'
import '../css/cloud.css'

const Cloud = props => {

    const { sentence, id } = props

    const handleCloudClick = () => {
        const text = window.document.getElementById(`cloud${id}`)
        text.classList.toggle('expend')
    }

    return (
        <div className='cloud-container' onClick={handleCloudClick}>
            <div id={`cloud${id}`} className='hidden'>
                {sentence}
            </div>
            <div className='cloud'>
                <div className='cloud-text-wrapper'>
                    <p className='cloud-text'>{`${sentence}`}</p>
                </div>
            </div>
        </div >
    )
}

export default Cloud;