import React from 'react'

function CTA() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 pt-44'>

            <div className='flex  flex-col lg:flex-row gap-10 justify-between '>
                <div className="w-full lg:w-1/2 flex flex-col">
                    <p className='pb-2'>
                        Immersive
                    </p>
                    <h1 className='text-2xl lg:text-4xl font-bold'>Unleash Your Strategic Skills <br /> in an Epic Adventure</h1>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                    <p className=''>
                        Embark on a thrilling journey filled with captivating storylines, intricate character development, and cutting-edge DARPA-type technology. Dive into a world where every decision matters and strategic thinking is the key to success. Are you ready to conquer the dark side of the moon and build a thriving civilization?
                    </p>
                    <div className="flex gap-3 mt-7">
                        <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                                <h1 class="text-white">Learn More</h1>
                            </div>
                        </div>
                        <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200">
                            <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                                <h1 class="text-white">Sign Up</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-14 w-full'>
                <img src="14.png" alt="hero" className='w-full mt-10 h-[700px] object-cover' />
            </div>



        </div>
    )
}

export default CTA