import React from 'react'

function NFTShowcase() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-3xl lg:text-5xl font-bold">NFT Showcase</h2>
                <p className=" text-gray-300 pb-2">
                    Explore stunning NFT designs with unique in-game features
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 mt-16">
                <div className="w-full lg:w-1/2">
                    <img src="https://placehold.co/500x500" alt="hero" className='w-full' />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <img src="https://placehold.co/500x500" alt="hero" className='w-full' />
                        <img src="https://placehold.co/500x500" alt="hero" className='w-full' />
                        <img src="https://placehold.co/500x500" alt="hero" className='w-full' />
                        <img src="https://placehold.co/500x500" alt="hero" className='w-full' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NFTShowcase