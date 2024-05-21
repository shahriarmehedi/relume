import React from 'react'

function Hero() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-24'>
            <div className="flex flex-col-reverse items-center gap-14">
                <div className='w-full lg:w-2/3 mx-auto'>

                    <h2 className="text-3xl lg:text-5xl font-bold mt-5">Exploring the Lunar Frontier</h2>
                    <p className="mt-7 text-gray-300">
                        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                    </p>
                    <p className="mt-3 text-gray-300">
                        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                    </p>
                    <p className="mt-3 text-gray-300">
                        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
                    </p>
                </div>
                <div className='w-full'>
                    <img src="6.png" alt="hero" className='w-full mt-10' />
                </div>
            </div>
        </div>
    )
}

export default Hero