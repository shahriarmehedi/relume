import React from 'react'

function CTA() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className='text-center'>
                <p className=" font-bold">Tagline</p>
                <h2 className="text-5xl font-bold mt-5">
                    Join Our Gaming Community Today!
                </h2>
                <p className="mt-7 text-gray-300">
                    Become part of our passionate gaming community and stay updated with the latest news, events, and exclusive offers.
                </p>
                <div className="flex items-center justify-center gap-10 mt-10">
                    <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200">
                        <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                            <h1 class="text-white">Learn More</h1>
                        </div>
                    </div>
                    <div class="cursor-pointer flex gap-2 items-center">
                        <h1 class="text-white">Sign Up</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CTA