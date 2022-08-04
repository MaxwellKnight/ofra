import React from 'react'
import '../css/cloud.css'

const Cloud = props => {

    const { sentence, header, contentList, id } = props

    const handleCloudClick = () => {
        const text = window.document.getElementById(`cloud${id}`)
        text.classList.toggle('expend')
    }

    return (
        <div className='cloud-container' onClick={handleCloudClick}>
            <div id={`cloud${id}`} className='hidden'>
                {header ? <p className="quote">{header}</p> : ''}
                {id === 5 ? <p className='ls-1'><strong>ב</strong>ולם <strong>ר</strong>וגזו <strong>י</strong>פחית <strong>א</strong>וכלו <strong>ו</strong>יגביר <strong>ת</strong>נועתו</p> : null}
                {sentence ? <p>{sentence}</p> : ''}
                {id !== 5 ? contentList.map(item => <p>{item}</p>) : null}
            </div>
            <div className='cloud'>
                <div className='cloud-text-wrapper'>
                    <p className='cloud-text'>{contentList.map(item => <p>{item}</p>)}</p>
                </div>
            </div>
        </div >
    )
}

export default Cloud;