import React from 'react'

function Subscribe() {
    return (
        <div className='bg-gray-800 py-24'>
            <div className='max-w-7xl mx-auto px-5 2xl:px-0'>
                <div className=' lg:w-[60%]'>
                    <h2 className="text-5xl font-bold mt-5">
                        Stay Updated on Game Development
                    </h2>
                    <p className="mt-7 text-gray-300">
                        Subscribe to our newsletter for the latest updates on game development and NFT releases.
                    </p>
                    <div className='mt-10 flex gap-5 items-center'>
                        <input type="text" placeholder="Enter your email" className='w-full h-12 px-5 rounded-lg' />
                        <div class="cursor-pointer h-12 w-36 rounded-lg bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-lg">
                                <h1 class="text-white">Subscribe</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Subscribe