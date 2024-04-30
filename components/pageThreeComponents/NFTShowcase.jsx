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

            <div className="flex flex-col lg:flex-row gap-5 mt-16 h-full">
                <div className="w-full lg:w-1/2 h-full">
                    <img src="/1.png" alt="hero" className='w-full h-[600px] object-cover' />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
                        <img src="/7.png" alt="hero" className='w-full h-full object-cover' />
                        <img src="/8.png" alt="hero" className='w-full h-full object-cover' />
                        <img src="/9.png" alt="hero" className='w-full h-full object-cover' />
                        <img src="/10.png" alt="hero" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NFTShowcase