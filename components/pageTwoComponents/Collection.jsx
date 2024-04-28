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
                <img src="https://placehold.co/600x500" alt="collection" className='' />
                <img src="https://placehold.co/600x500" alt="collection" className='' />
                <img src="https://placehold.co/600x500" alt="collection" className='' />
                <img src="https://placehold.co/600x500" alt="collection" className='' />
                <img src="https://placehold.co/600x500" alt="collection" className='' />
                <img src="https://placehold.co/600x500" alt="collection" className='' />

            </div>
        </div>
    )
}

export default Collection