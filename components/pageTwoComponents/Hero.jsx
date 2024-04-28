import React from 'react'

function Hero() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-24'>
            <div className="flex items-center flex-col lg:flex-row gap-14">
                <div className='w-full lg:w-1/2'>




                    <h2 className="text-3xl lg:text-5xl font-bold mt-5">Founder's Gaming Journey</h2>
                    <p className="mt-7 text-gray-300">
                        From the Atari to modern consoles, the founder has immersed themselves in the gaming world for over 30 years. Starting with an Atari and progressing through Nintendo, Super Nintendo, Dreamcast, PlayStation 1-5, Xbox 1 and Xbox 2, they have played countless games and developed a deep-rooted connection to the gaming community.
                    </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img src="https://placehold.co/600x500" alt="hero" className='w-full mt-10' />
                </div>
            </div>
        </div>
    )
}

export default Hero