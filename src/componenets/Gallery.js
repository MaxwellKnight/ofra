import React, { useState } from 'react'
import '../css/gallery.css'
import { printGallery } from '../utils/print'
import Modal from './Modal'

const Gallery = () => {

    const { images } = require('../data/images')
    const [currentImage, updateCurrentImage] = useState(0)
    const image = images.find(image => image.id === currentImage)

    const handleCurrentImage = id => {
        updateCurrentImage(id)
    }

    return (
        <>
            {currentImage ? <Modal path={image.path} handleCurrentItem={handleCurrentImage} /> : ''}
            <h1 className="gallery-title" style={{ color: 'darkblue' }}> יצירות רב תחומיות עם אנשים, עם חומרים, עם מילים ובכולן נוכחת רוח.</h1>
            <main className='gallery-container'>
                {printGallery(images, handleCurrentImage)}
            </main>
        </>
    )
}

export default Gallery;