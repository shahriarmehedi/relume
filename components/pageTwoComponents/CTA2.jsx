import React from 'react'

function CTA2() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 my-24'>
            <div className="flex  flex-col gap-5">
                <h2 className="text-3xl lg:text-5xl font-bold mt-5">Join the Shiba Shanti Inu</h2>
                <p className=" text-gray-300">
                    Stay updated with the latest news and developments from our project.
                </p>

                <div className="flex gap-5">
                    <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200">
                        <div class="flex h-full w-full items-center justify-center bg-gray-900 rounded-full">
                            <h1 class="text-white">
                                Join
                            </h1>
                        </div>
                    </div>
                    <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200">
                        <div class="flex h-full w-full items-center justify-center bg-gray-900 rounded-full">
                            <h1 class="text-white">
                                Follow
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA2