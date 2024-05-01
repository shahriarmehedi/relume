import React from 'react'

function Hero3() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex items-center flex-col lg:flex-row gap-10">
                <div className='w-full lg:w-1/2'>
                    <p className=" font-bold">Empower</p>
                    <h2 className="text-5xl font-bold mt-5">Unlock Limitless Possibilities with 3D NFT Objects</h2>
                    <p className="mt-7 text-gray-300">
                        Experience a new dimension of gaming with our collection of 3D NFT objects. Purchase and unleash their power in the game to dominate the competition.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-5 mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                            </svg>
                            <h3 className="font-bold mt-5">Enhance Your Gameplay</h3>
                            <p className="mt-3 text-gray-300">
                                Discover a wide range of 3D NFT objects that give you a competitive edge.
                            </p>

                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                            </svg>
                            <h3 className="font-bold mt-5">Unleash Power</h3>
                            <p className="mt-3 text-gray-300">
                                Unleash the hidden potential of your gameplay with our exclusive collection of 3D NFT objects.
                            </p>

                        </div>
                    </div>

                    <div className="flex items-center gap-10 mt-10">
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
                <div className='w-full lg:w-1/2'>
                    <img src="3.png" alt="hero" className='w-full mt-10' />
                </div>
            </div>
        </div>
    )
}

export default Hero3