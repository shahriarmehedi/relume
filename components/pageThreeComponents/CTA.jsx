import React from 'react'

function CTA() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 py-24'>
            <div className="flex  flex-col gap-5">
                <h2 className="text-3xl lg:text-5xl font-bold mt-5">Start Collecting and Trading NFTs</h2>
                <p className=" text-gray-300">
                    Discover a world of unique digital assets and join the NFT revolution.
                </p>

                <div className="flex gap-5">
                    <div class="cursor-pointer h-12 w-36 bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                        <div class="flex h-full w-full items-center justify-center bg-gray-900">
                            <h1 class="text-white">
                                Get Started
                            </h1>
                        </div>
                    </div>
                    <div class="cursor-pointer h-12 w-36 bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                        <div class="flex h-full w-full items-center justify-center bg-gray-900">
                            <h1 class="text-white">
                                Learn More
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA