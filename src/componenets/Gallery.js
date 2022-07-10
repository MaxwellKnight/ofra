import React from 'react'
import '../css/gallery.css'
import { printGallery } from '../utils/print'

const Gallery = () => {

    const { images } = require('../data/images')

    return (
        <>
            <h1 className="gallery-title">גלריה</h1>
            <main className='gallery-container'>
                {printGallery(images)}
            </main>
        </>
    )
}

export default Gallery;