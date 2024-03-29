import React from 'react'

function CTA2() {
    return (
        <div className='bg-gray-800 py-14 mt-36'>
            <div className='max-w-7xl mx-auto px-5 2xl:px-0'>
                <div className='flex flex-col lg:flex-row justify-between'>

                    <div className='text-center lg:text-left'>
                        <h2 className="text-3xl font-bold mt-5">
                            Join the Shiba Shanti Inu Community
                        </h2>
                        <p className="mt-7 text-gray-300">
                            Invest in the hottest meme coin of the year!
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <div class="cursor-pointer h-12 w-36 rounded-lg bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-lg">
                                <h1 class="text-white">Buy</h1>
                            </div>
                        </div>
                        <div class="cursor-pointer h-12 w-36 rounded-lg bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-lg">
                                <h1 class="text-white">Learn More</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default CTA2