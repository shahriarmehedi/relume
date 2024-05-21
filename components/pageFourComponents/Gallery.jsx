import React from 'react'

function Gallery() {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-5 2xl:px-0 pt-10'>
                <div className='flex flex-col gap-5 text-center'>
                    <h2 className='text-3xl lg:text-5xl font-bold mt-5'>Game Gallery</h2>
                    <p className='text-gray-300'>
                        Explore stunning screenshots and concept art from the game
                    </p>
                </div>

                <img src="13.png" alt="gallery" className='w-full mt-10' />
            </div>
        </div>
    )
}

export default Gallery