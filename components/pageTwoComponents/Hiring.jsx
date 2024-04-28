import React from 'react'

function Hiring() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex  flex-col gap-5">
                <h2 className="text-3xl lg:text-5xl font-bold mt-5">We’re hiring!</h2>
                <p className=" text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px]">
                    <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                        <h1 class="text-white">
                            Open Positions
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hiring