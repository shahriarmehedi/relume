import React from 'react'

function CTA() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 flex  flex-col lg:flex-row gap-10 justify-between items-center pt-44'>

            <div className="w-full lg:w-1/2 flex flex-col">
                <p className='pb-2'>
                    Revolutionize
                </p>
                <h1 className='text-3xl lg:text-6xl font-bold'>Unleashing the <br /> Potential</h1>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
                <p className='text-lg'>Welcome to Shiba Shanti Inu, where we are revolutionizing the world of meme coins. Our mission is to unleash the potential of blockchain technology and NFT assets, creating a new era of gaming and digital assets.</p>
                <div className="flex gap-3 mt-7">
                    <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                        <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                            <h1 class="text-white">Learn More</h1>
                        </div>
                    </div>
                    <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                        <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                            <h1 class="text-white">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default CTA