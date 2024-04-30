import React from 'react'

function Hero4() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48'>
            <div className="flex items-center flex-col lg:flex-row gap-10">
                <div className='w-full lg:w-1/2'>

                    <h2 className="text-5xl font-bold mt-5">
                        Discover the Tokenomics of Shiba Shanti Inu - A Memorable Meme Coin
                    </h2>
                    <p className="mt-7 text-gray-300">
                        Shiba Shanti Inu has a maximum supply of 888,000,000 tokens and employs a deflationary buy and burn mechanism to enhance value.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-5 mt-10">
                        <div>
                            <h1 className="font-bold text-5xl mt-5">50%</h1>

                            <p className="mt-3 text-gray-300">
                                Token holders benefit from the deflationary tokenomics model.
                            </p>

                        </div>
                        <div>
                            <h1 className="font-bold text-5xl mt-5">50%</h1>

                            <p className="mt-3 text-gray-300">
                                The buy and burn mechanism ensures scarcity and value appreciation.
                            </p>

                        </div>
                    </div>


                </div>
                <div className='w-full lg:w-1/2'>
                    <img src="4.png" alt="hero" className='w-full mt-10' />
                </div>
            </div>
        </div>
    )
}

export default Hero4