import React from 'react'

function Inspired() {
    return (
        <div className='max-w-7xl mx-auto px-5 2xl:px-0 mt-48 pb-40'>
            <div className="flex items-center flex-col lg:flex-row gap-10">
                <div className='w-full lg:w-1/2'>
                    {/* <p className=" font-bold">Immerse</p> */}
                    <h2 className="text-3xl lg:text-5xl font-bold mt-5">
                        Inspired by Hideo Kojima's Metal Gear series, a captivating real-time strategy game.
                    </h2>
                    <p className="mt-7 text-gray-300">
                        Experience a unique storyline, diverse characters, and intense space-based combat systems.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-5 mt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                            </svg>
                            <h3 className="font-bold mt-5">Engaging Gameplay</h3>
                            <p className="mt-3 text-gray-300">
                                Immerse yourself in a rich narrative with intriguing missions and challenging objectives.
                            </p>

                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                            </svg>
                            <h3 className="font-bold mt-5">Customizable Weapons</h3>
                            <p className="mt-3 text-gray-300">
                                Upgrade and modify space-based weapons for epic surface combat against formidable enemies.
                            </p>

                        </div>
                    </div>


                </div>
                <div className='w-full lg:w-1/2'>
                    <img src="13.png" alt="hero" className='w-full mt-10' />
                </div>
            </div>
        </div>
    )
}

export default Inspired