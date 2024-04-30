import React from 'react'

function Collection() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex items-center justify-center flex-col gap-5">
                <h2 className="text-3xl lg:text-5xl font-bold mt-5">Founder's Collection</h2>
                <p className=" text-gray-300">
                    A journey through gaming history, from Atari to PlayStation 5
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-14">
                <img src="7.png" alt="collection" className='w-full h-full object-cover' />
                <img src="8.png" alt="collection" className='w-full h-full object-cover' />
                <img src="9.png" alt="collection" className='w-full h-full object-cover' />
                <img src="10.png" alt="collection" className='w-full h-full object-cover' />
                <img src="11.png" alt="collection" className='w-full h-full object-cover' />
                <img src="12.png" alt="collection" className='w-full h-full object-cover' />

            </div>
        </div>
    )
}

export default Collection