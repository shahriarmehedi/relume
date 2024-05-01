import React from 'react'

function Hero() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0'>
            <h1 className='text-5xl font-bold mt-20 lg:hidden'>Welcome to Shiba Shanti Inu - The Memecoin Revolution</h1>
            <h1 className='text-5xl font-bold mt-20 hidden lg:block'>Welcome to Shiba Shanti Inu - <br /> The Memecoin Revolution</h1>
            <p className=' mt-5'>Join us on our journey to the moon with our unique and exciting meme coin.</p>
            <div className="flex gap-3 mt-7">
                <div class="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200 ">
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

            <div>
                <img src="1.png" alt="hero" className='w-full mt-10' />
            </div>
        </div>
    )
}

export default Hero